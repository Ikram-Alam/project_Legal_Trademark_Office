import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Application ID is required' },
        { status: 400 }
      )
    }

    const application = await prisma.trademarkApplication.findUnique({
      where: { id }
    })

    if (!application) {
      return NextResponse.json(
        { success: false, error: 'Application not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      application 
    })

  } catch (error) {
    console.error('Error retrieving application:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve application' },
      { status: 500 }
    )
  }
}