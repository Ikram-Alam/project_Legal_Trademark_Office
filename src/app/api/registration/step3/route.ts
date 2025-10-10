import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const { applicationId } = data

    if (!applicationId) {
      return NextResponse.json(
        { success: false, error: 'Application ID is required' },
        { status: 400 }
      )
    }

    // Update existing application with step 3 data
    const application = await prisma.trademarkApplication.update({
      where: { id: applicationId },
      data: {
        currentStep: 3,
        // Step 3 fields
        packageType: data.packageType,
        packagePrice: data.packagePrice ? Number(data.packagePrice) : null,
        governmentFee: data.governmentFee ? Number(data.governmentFee) : null,
        discount: data.discount ? Number(data.discount) : 0,
        promoCode: data.promoCode || null,
        totalAmount: data.totalAmount ? Number(data.totalAmount) : null,
        
        // Payment Information (will be updated during payment processing)
        paymentStatus: 'pending',
      }
    })

    return NextResponse.json({ 
      success: true, 
      applicationId: application.id,
      message: 'Step 3 data saved successfully' 
    })

  } catch (error) {
    console.error('Error saving step 3 data:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save step 3 data' },
      { status: 500 }
    )
  }
}

// Create payment intent and process payment
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { applicationId, paymentMethodId: _paymentMethodId } = data

    if (!applicationId) {
      return NextResponse.json(
        { success: false, error: 'Application ID is required' },
        { status: 400 }
      )
    }

    // Get the application to calculate total amount
    const application = await prisma.trademarkApplication.findUnique({
      where: { id: applicationId }
    })

    if (!application) {
      return NextResponse.json(
        { success: false, error: 'Application not found' },
        { status: 404 }
      )
    }

    const totalAmount = application.totalAmount

    if (!totalAmount) {
      return NextResponse.json(
        { success: false, error: 'Total amount not calculated' },
        { status: 400 }
      )
    }

    // STATIC PAYMENT PROCESSING - Always successful for now
    console.log(`Processing static payment for application ${applicationId}`)
    console.log(`Amount: $${totalAmount}`)
    
    // Simulate a small delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Always mark as successful for now
    const updatedApplication = await prisma.trademarkApplication.update({
      where: { id: applicationId },
      data: {
        status: 'submitted',
        paymentStatus: 'completed',
        paymentId: `static_${Date.now()}`, // Static payment ID
        paymentMethod: 'static_simulation',
        submissionDate: new Date(),
        usto_applicationNumber: `USPTO-${Date.now()}`, // Generate a mock USPTO number
      }
    })

    console.log(`Payment completed for application: ${updatedApplication.id}`)

    return NextResponse.json({ 
      success: true, 
      applicationId: updatedApplication.id,
      message: 'Payment processed successfully (STATIC MODE)',
      redirectTo: '/register/success'
    })

  } catch (error) {
    console.error('Error processing static payment:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process payment' },
      { status: 500 }
    )
  }
}