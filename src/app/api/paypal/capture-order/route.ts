import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { orderId, applicationId } = await request.json()

    if (!orderId || !applicationId) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: orderId, applicationId' },
        { status: 400 }
      )
    }

    const clientId = process.env.PAYPAL_CLIENT_ID
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET
    const baseURL = process.env.PAYPAL_ENVIRONMENT === 'live' 
      ? 'https://api-m.paypal.com' 
      : 'https://api-m.sandbox.paypal.com'

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        { success: false, error: 'PayPal configuration missing' },
        { status: 500 }
      )
    }

    // Get access token
    const tokenResponse = await fetch(`${baseURL}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    })

    const tokenData = await tokenResponse.json()

    if (!tokenData.access_token) {
      console.error('Failed to get PayPal access token:', tokenData)
      return NextResponse.json(
        { success: false, error: 'Failed to authenticate with PayPal' },
        { status: 500 }
      )
    }

    // Capture the order
    const captureResponse = await fetch(`${baseURL}/v2/checkout/orders/${orderId}/capture`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json',
        'PayPal-Request-Id': `TM-CAPTURE-${applicationId}-${Date.now()}`
      }
    })

    const captureResult = await captureResponse.json()

    if (captureResponse.ok && captureResult.status === 'COMPLETED') {
      // Extract payment details
      const paymentId = captureResult.id
      const purchaseUnit = captureResult.purchase_units?.[0]
      const capture = purchaseUnit?.payments?.captures?.[0]
      
      if (capture) {
        // Update the application with payment information
        try {
          await prisma.trademarkApplication.update({
            where: { id: applicationId },
            data: {
              paymentStatus: 'completed',
              paymentId: paymentId,
              paymentMethod: 'paypal',
              paymentIntentId: capture.id,
              status: 'submitted',
              submissionDate: new Date(),
              notes: `Payment captured via PayPal. Transaction ID: ${capture.id}`
            }
          })

          return NextResponse.json({
            success: true,
            paymentId: paymentId,
            transactionId: capture.id,
            status: 'completed',
            captureResult: captureResult
          })
        } catch (dbError) {
          console.error('Database update error:', dbError)
          // Payment was successful but database update failed
          // This should be handled by your monitoring system
          return NextResponse.json(
            { success: false, error: 'Payment completed but database update failed. Please contact support.' },
            { status: 500 }
          )
        }
      } else {
        // Payment was not completed successfully
        return NextResponse.json(
          { success: false, error: `Payment capture failed. Status: ${captureResult.status}` },
          { status: 400 }
        )
      }
    } else {
      console.error('PayPal capture failed:', captureResult)
      return NextResponse.json(
        { success: false, error: captureResult.message || 'Failed to capture payment' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('PayPal capture order error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error during payment capture' },
      { status: 500 }
    )
  }
}