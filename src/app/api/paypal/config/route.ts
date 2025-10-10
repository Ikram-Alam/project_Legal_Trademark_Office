import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const clientId = process.env.PAYPAL_CLIENT_ID
    const environment = process.env.PAYPAL_ENVIRONMENT || 'sandbox'

    // Check if we have valid PayPal credentials
    if (!clientId || 
        clientId === 'your_sandbox_client_id_here' || 
        clientId === 'your_paypal_client_id_here' ||
        clientId === 'your_actual_paypal_client_id') {
      return NextResponse.json({
        success: false,
        error: 'PayPal credentials not configured',
        message: 'Please configure your PayPal Client ID in the environment variables. Visit https://developer.paypal.com/ to get your credentials.',
        setupInstructions: {
          step1: 'Go to https://developer.paypal.com/',
          step2: 'Create a developer account or sign in',
          step3: 'Create a new app for your business',
          step4: 'Copy the Client ID and Client Secret',
          step5: 'Update your .env.local file with the real credentials'
        }
      }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      clientId,
      environment
    })
  } catch (error) {
    console.error('PayPal config error:', error)
    return NextResponse.json(
      { success: false, error: 'PayPal configuration not available' },
      { status: 500 }
    )
  }
}