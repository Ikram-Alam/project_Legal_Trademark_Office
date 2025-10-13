import { NextRequest, NextResponse } from 'next/server'
import PayoneerPaymentGateway from '@/lib/payoneer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * POST /api/payoneer/webhook
 * Handles Payoneer webhook notifications for payment events
 */
export async function POST(request: NextRequest) {
  try {
    const payload = await request.text()
    const signature = request.headers.get('x-payoneer-signature') || ''

    // Verify webhook signature
    const payoneer = PayoneerPaymentGateway.getInstance()
    const isValid = await payoneer.verifyWebhookSignature(payload, signature)

    if (!isValid) {
      console.error('Invalid Payoneer webhook signature')
      return NextResponse.json({
        success: false,
        error: 'Invalid signature'
      }, { status: 401 })
    }

    // Parse webhook event
    const event = JSON.parse(payload)
    
    console.log('Payoneer webhook received:', {
      type: event.type,
      sessionId: event.data?.session_id
    })

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed':
        await handlePaymentCompleted(event.data)
        break
      
      case 'checkout.session.failed':
        await handlePaymentFailed(event.data)
        break
      
      case 'checkout.session.cancelled':
        await handlePaymentCancelled(event.data)
        break
      
      default:
        console.log(`Unhandled webhook event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json({
      success: false,
      error: 'Webhook processing failed'
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

/**
 * Handle successful payment
 */
async function handlePaymentCompleted(data: {
  session_id: string
  transaction_id: string
  order_id: string
  amount: { value: string; currency: string }
  payment_method: string
  completed_at: string
}) {
  try {
    const updateData: Record<string, unknown> = {
      paymentId: data.session_id,
      transactionId: data.transaction_id,
      paymentStatus: 'completed',
      paymentMethod: data.payment_method,
      paymentDate: new Date(data.completed_at),
      status: 'submitted',
      submissionDate: new Date()
    }
    
    await prisma.trademarkApplication.update({
      where: { id: data.order_id },
      data: updateData
    })

    console.log('Payment completed via webhook:', {
      orderId: data.order_id,
      transactionId: data.transaction_id
    })
  } catch (error) {
    console.error('Error updating payment status:', error)
    throw error
  }
}

/**
 * Handle failed payment
 */
async function handlePaymentFailed(data: {
  session_id: string
  order_id: string
  error_message?: string
}) {
  try {
    await prisma.trademarkApplication.update({
      where: { id: data.order_id },
      data: {
        paymentStatus: 'failed',
        paymentId: data.session_id,
        notes: data.error_message || 'Payment failed'
      }
    })

    console.log('Payment failed via webhook:', {
      orderId: data.order_id,
      error: data.error_message
    })
  } catch (error) {
    console.error('Error updating payment status:', error)
    throw error
  }
}

/**
 * Handle cancelled payment
 */
async function handlePaymentCancelled(data: {
  session_id: string
  order_id: string
}) {
  try {
    await prisma.trademarkApplication.update({
      where: { id: data.order_id },
      data: {
        paymentStatus: 'pending',
        paymentId: data.session_id,
        notes: 'Payment cancelled by user'
      }
    })

    console.log('Payment cancelled via webhook:', {
      orderId: data.order_id
    })
  } catch (error) {
    console.error('Error updating payment status:', error)
    throw error
  }
}
