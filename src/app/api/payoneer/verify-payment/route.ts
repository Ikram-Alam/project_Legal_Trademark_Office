import { NextRequest, NextResponse } from 'next/server'
import PayoneerPaymentGateway from '@/lib/payoneer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * POST /api/payoneer/verify-payment
 * Verifies and processes a completed Payoneer payment
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { sessionId, applicationId } = body

    if (!sessionId || !applicationId) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: sessionId or applicationId'
      }, { status: 400 })
    }

    // Initialize Payoneer
    const payoneer = PayoneerPaymentGateway.getInstance()

    // Get payment details from Payoneer
    const paymentDetails = await payoneer.getPaymentDetails(sessionId)

    // Verify payment status
    if (paymentDetails.status !== 'COMPLETED') {
      return NextResponse.json({
        success: false,
        error: 'Payment not completed',
        status: paymentDetails.status
      }, { status: 400 })
    }

    // Update application in database
    const updateData: Record<string, unknown> = {
      paymentId: sessionId,
      transactionId: paymentDetails.transactionId,
      paymentStatus: 'COMPLETED',
      paymentMethod: paymentDetails.paymentMethod,
      paymentDate: new Date(paymentDetails.timestamp),
      status: 'submitted'
    }
    
    const updatedApplication = await prisma.trademarkApplication.update({
      where: { id: applicationId },
      data: updateData
    })

    console.log('Payment verified and application updated:', {
      applicationId,
      transactionId: paymentDetails.transactionId,
      amount: paymentDetails.amount
    })

    return NextResponse.json({
      success: true,
      paymentId: sessionId,
      transactionId: paymentDetails.transactionId,
      status: paymentDetails.status,
      amount: paymentDetails.amount,
      currency: paymentDetails.currency,
      message: 'Payment verified successfully',
      application: {
        id: updatedApplication.id,
        status: updatedApplication.status
      }
    })
  } catch (error) {
    console.error('Error verifying Payoneer payment:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to verify payment'
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
