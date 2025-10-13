import { NextRequest, NextResponse } from 'next/server'
import PayoneerPaymentGateway from '@/lib/payoneer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * POST /api/payoneer/create-session
 * Creates a Payoneer checkout session for payment
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { applicationId, packageType, amount, currency = 'USD' } = body

    // Validate required fields
    if (!applicationId || !packageType || !amount) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: applicationId, packageType, or amount'
      }, { status: 400 })
    }

    // Get application details from database
    const application = await prisma.trademarkApplication.findUnique({
      where: { id: applicationId }
    })

    if (!application) {
      return NextResponse.json({
        success: false,
        error: 'Application not found'
      }, { status: 404 })
    }

    // Initialize Payoneer
    const payoneer = PayoneerPaymentGateway.getInstance()
    
    // Determine customer email based on applicant type
    const customerEmail = application.applicantType === 'organization' 
      ? application.organizationEmail 
      : application.email
    
    // Create checkout session
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001'
    const session = await payoneer.createCheckoutSession({
      amount: parseFloat(amount),
      currency,
      orderId: applicationId,
      description: `USPTO Trademark Registration - ${packageType} Package`,
      customerEmail: customerEmail || 'customer@example.com',
      successUrl: `${appUrl}/register/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${appUrl}/register/step-3?cancelled=true`
    })

    // Store session ID in database for later verification
    await prisma.trademarkApplication.update({
      where: { id: applicationId },
      data: {
        paymentId: session.sessionId,
        paymentStatus: 'PENDING'
      }
    })

    console.log('Payoneer checkout session created:', {
      sessionId: session.sessionId,
      applicationId,
      amount
    })

    return NextResponse.json({
      success: true,
      sessionId: session.sessionId,
      checkoutUrl: session.checkoutUrl,
      expiresAt: session.expiresAt
    })
  } catch (error) {
    console.error('Error creating Payoneer session:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create checkout session'
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
