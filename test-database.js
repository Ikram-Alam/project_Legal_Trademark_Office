// Test script to verify database connectivity and operations
import { prisma } from './src/lib/prisma.js'

async function testDatabase() {
  try {
    console.log('🧪 Testing database connection...')
    
    // Test database connection
    await prisma.$connect()
    console.log('✅ Database connected successfully!')
    
    // Test creating a trademark application
    console.log('🧪 Testing trademark application creation...')
    
    const testApplication = await prisma.trademarkApplication.create({
      data: {
        currentStep: 1,
        status: 'draft',
        trademarkName: 'Test Trademark Name',
        description: 'Test description for trademark',
        trademarkType: 'word',
        internationalClass: '1',
        businessEntityType: 'sole-proprietorship',
        useInCommerce: 'intent',
        searchPerformed: true,
        conflictsFound: false,
      }
    })
    
    console.log('✅ Test application created successfully!')
    console.log('📝 Application ID:', testApplication.id)
    console.log('📝 Trademark Name:', testApplication.trademarkName)
    
    // Test retrieving the application
    console.log('🧪 Testing application retrieval...')
    
    const retrievedApp = await prisma.trademarkApplication.findUnique({
      where: { id: testApplication.id }
    })
    
    if (retrievedApp) {
      console.log('✅ Application retrieved successfully!')
      console.log('📝 Retrieved Name:', retrievedApp.trademarkName)
    }
    
    // Test updating the application (Step 2 data)
    console.log('🧪 Testing application update (Step 2)...')
    
    const updatedApp = await prisma.trademarkApplication.update({
      where: { id: testApplication.id },
      data: {
        currentStep: 2,
        applicantType: 'individual',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '(555) 123-4567',
        address: '123 Main St',
        city: 'New York',
        state: 'New York',
        zipCode: '10001',
        country: 'United States'
      }
    })
    
    console.log('✅ Application updated with Step 2 data!')
    console.log('📝 Current Step:', updatedApp.currentStep)
    console.log('📝 Applicant:', `${updatedApp.firstName} ${updatedApp.lastName}`)
    
    // Test Step 3 data and payment
    console.log('🧪 Testing Step 3 and payment processing...')
    
    const finalApp = await prisma.trademarkApplication.update({
      where: { id: testApplication.id },
      data: {
        currentStep: 3,
        packageType: 'standard',
        packagePrice: 149,
        governmentFee: 325,
        totalAmount: 474,
        paymentStatus: 'completed',
        paymentId: 'test_payment_123',
        paymentMethod: 'static_simulation',
        status: 'submitted',
        submissionDate: new Date(),
        usto_applicationNumber: `USPTO-TEST-${Date.now()}`
      }
    })
    
    console.log('✅ Payment processing simulation completed!')
    console.log('📝 Final Status:', finalApp.status)
    console.log('📝 Payment Status:', finalApp.paymentStatus)
    console.log('📝 USPTO Number:', finalApp.usto_applicationNumber)
    
    // Count total applications
    const totalApps = await prisma.trademarkApplication.count()
    console.log('📊 Total applications in database:', totalApps)
    
    console.log('🎉 All database tests passed successfully!')
    console.log('🎯 Database integration is working correctly!')
    
  } catch (error) {
    console.error('❌ Database test failed:', error)
  } finally {
    await prisma.$disconnect()
    console.log('🔌 Database connection closed')
  }
}

// Run the test
testDatabase()