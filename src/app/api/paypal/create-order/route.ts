import { NextRequest, NextResponse } from 'next/server'
import PayPalConfig from '@/lib/paypal'

export async function POST(request: NextRequest) {
  try {
    const { applicationId, packageType, amount, currency = 'USD' } = await request.json()

    if (!applicationId || !packageType || !amount) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: applicationId, packageType, amount' },
        { status: 400 }
      )
    }

    // Validate amount is a positive number
    const numericAmount = parseFloat(amount)
    if (isNaN(numericAmount) || numericAmount <= 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid amount provided' },
        { status: 400 }
      )
    }

    // Get PayPal access token
    const paypalConfig = PayPalConfig.getInstance()
    const accessToken = await paypalConfig.getAccessToken()
    const baseURL = paypalConfig.getBaseURL()

    // Create order request
    const orderData = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          reference_id: applicationId,
          amount: {
            currency_code: currency,
            value: numericAmount.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: currency,
                value: numericAmount.toFixed(2)
              }
            }
          },
          items: [
            {
              name: `Trademark Registration - ${packageType}`,
              description: `Trademark registration package: ${packageType}`,
              quantity: '1',
              unit_amount: {
                currency_code: currency,
                value: numericAmount.toFixed(2)
              },
              category: 'DIGITAL_GOODS'
            }
          ],
          custom_id: applicationId,
          description: `Trademark registration for application ${applicationId}`,
          invoice_id: `TM-${applicationId}-${Date.now()}`
        }
      ],
      application_context: {
        return_url: `${process.env.NEXTAUTH_URL}/register/success`,
        cancel_url: `${process.env.NEXTAUTH_URL}/register/step-3`,
        brand_name: 'USPTO Legal Trademark Office',
        landing_page: 'BILLING',
        user_action: 'PAY_NOW',
        shipping_preference: 'NO_SHIPPING'
      }
    }

    // Create PayPal order
    const orderResponse = await fetch(`${baseURL}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'PayPal-Request-Id': `TM-${applicationId}-${Date.now()}`
      },
      body: JSON.stringify(orderData)
    })

    const orderResult = await orderResponse.json()

    if (orderResponse.ok && orderResult.id) {
      return NextResponse.json({
        success: true,
        orderId: orderResult.id,
        links: orderResult.links
      })
    } else {
      console.error('PayPal order creation failed:', orderResult)
      return NextResponse.json(
        { success: false, error: 'Failed to create PayPal order' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('PayPal create order error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error during order creation' },
      { status: 500 }
    )
  }
}