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

    // Update existing application with step 2 data
    const application = await prisma.trademarkApplication.update({
      where: { id: applicationId },
      data: {
        currentStep: 2,
        // Step 2 fields
        applicantType: data.applicantType,
        
        // Individual fields
        firstName: data.firstName || null,
        lastName: data.lastName || null,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address || null,
        city: data.city || null,
        state: data.state || null,
        zipCode: data.zipCode || null,
        country: data.country || null,
        citizenshipCountry: data.citizenshipCountry || null,
        domiciledInUS: data.domiciledInUS ?? true,
        
        // Organization fields
        organizationName: data.organizationName || null,
        organizationType: data.organizationType || null,
        contactPerson: data.contactPerson || null,
        organizationEmail: data.organizationEmail || null,
        organizationPhone: data.organizationPhone || null,
        organizationAddress: data.organizationAddress || null,
        organizationCity: data.organizationCity || null,
        organizationState: data.organizationState || null,
        organizationZipCode: data.organizationZipCode || null,
        organizationCountry: data.organizationCountry || null,
        businessFormationState: data.businessFormationState || null,
        taxId: data.taxId || null,
        
        // Attorney Information
        attorneyDesignation: data.attorneyDesignation || null,
        attorneyName: data.attorneyName || null,
        attorneyEmail: data.attorneyEmail || null,
        attorneyPhone: data.attorneyPhone || null,
        
        // Communication Preferences
        correspondencePreference: data.correspondencePreference || null,
        signatureMethod: data.signatureMethod || null,
        emergencyContact: data.emergencyContact || null,
        emergencyPhone: data.emergencyPhone || null,
      }
    })

    return NextResponse.json({ 
      success: true, 
      applicationId: application.id,
      message: 'Step 2 data saved successfully' 
    })

  } catch (error) {
    console.error('Error saving step 2 data:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save step 2 data' },
      { status: 500 }
    )
  }
}