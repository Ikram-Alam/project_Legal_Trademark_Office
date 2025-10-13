import { NextResponse } from 'next/server'
import PayoneerPaymentGateway from '@/lib/payoneer'

/**
 * GET /api/payoneer/config
 * Returns Payoneer configuration for client-side
 */
export async function GET() {
  try {
    // Check if Payoneer is properly configured
    const apiKey = process.env.PAYONEER_API_KEY
    const programId = process.env.PAYONEER_PROGRAM_ID

    // Check for placeholder or missing values
    if (!apiKey || !programId || 
        apiKey === 'your_api_key_here' || 
        programId === 'your_program_id_here') {
      return NextResponse.json({
        success: false,
        setupInstructions: true,
        message: 'Payoneer credentials not configured',
        instructions: {
          steps: [
            'Visit https://myaccount.payoneer.com/',
            'Sign in to your Payoneer account',
            'Navigate to Settings > API Access',
            'Generate API Key and note your Program ID',
            'Update .env.local with your credentials',
            'Restart the development server'
          ],
          required: {
            PAYONEER_API_KEY: 'Your Payoneer API key',
            PAYONEER_PROGRAM_ID: 'Your Payoneer program ID',
            PAYONEER_ENVIRONMENT: 'sandbox or production',
            PAYONEER_WEBHOOK_SECRET: 'Your webhook secret'
          }
        }
      }, { status: 200 })
    }

    const payoneer = PayoneerPaymentGateway.getInstance()

    return NextResponse.json({
      success: true,
      environment: payoneer.getEnvironment(),
      programId: payoneer.getProgramId(),
      message: 'Payoneer configured successfully'
    })
  } catch (error) {
    console.error('Payoneer config error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Configuration error',
      setupInstructions: true
    }, { status: 500 })
  }
}
