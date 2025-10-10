import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    console.log('Step 1 API received data:', JSON.stringify(data, null, 2))
    
    // Create new trademark application with step 1 data
    const application = await prisma.trademarkApplication.create({
      data: {
        currentStep: 1,
        status: 'draft',
        // Step 1 fields
        trademarkName: data.trademarkName,
        slogan: data.trademarkType === 'slogan' ? data.sloganText : null, // Only save slogan if type is slogan
        description: data.description,
        trademarkType: data.trademarkType,
        logoFile: data.logoPath || null, // Use logoPath instead of logoFile
        internationalClass: data.internationalClass,
        useInCommerce: data.useInCommerce,
        firstUseDate: data.firstUseDate ? new Date(data.firstUseDate) : null,
        commerceUseDate: data.commerceUseDate ? new Date(data.commerceUseDate) : null,
        disclaimerText: data.disclaimerText || null,
        translationRequired: data.translationRequired || false,
        translationText: data.translationText || null,
        significanceExplanation: data.significanceExplanation || null,
        businessEntityType: data.businessEntityType,
        searchPerformed: data.searchPerformed || false,
        conflictsFound: data.conflictsFound || false,
      }
    })

    return NextResponse.json({ 
      success: true, 
      applicationId: application.id,
      message: 'Step 1 data saved successfully' 
    })

  } catch (error) {
    console.error('Error saving step 1 data:')
    console.error('Error message:', error instanceof Error ? error.message : error)
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace')
    console.error('Full error object:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to save step 1 data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

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

    // Update existing application with step 1 data
    const application = await prisma.trademarkApplication.update({
      where: { id: applicationId },
      data: {
        currentStep: 1,
        // Step 1 fields
        trademarkName: data.trademarkName,
        slogan: data.trademarkType === 'slogan' ? data.sloganText : null, // Only save slogan if type is slogan
        description: data.description,
        trademarkType: data.trademarkType,
        logoFile: data.logoPath || null, // Use logoPath instead of logoFile
        internationalClass: data.internationalClass,
        useInCommerce: data.useInCommerce,
        firstUseDate: data.firstUseDate ? new Date(data.firstUseDate) : null,
        commerceUseDate: data.commerceUseDate ? new Date(data.commerceUseDate) : null,
        disclaimerText: data.disclaimerText || null,
        translationRequired: data.translationRequired || false,
        translationText: data.translationText || null,
        significanceExplanation: data.significanceExplanation || null,
        businessEntityType: data.businessEntityType,
        searchPerformed: data.searchPerformed || false,
        conflictsFound: data.conflictsFound || false,
      }
    })

    return NextResponse.json({ 
      success: true, 
      applicationId: application.id,
      message: 'Step 1 data updated successfully' 
    })

  } catch (error) {
    console.error('Error updating step 1 data:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update step 1 data' },
      { status: 500 }
    )
  }
}