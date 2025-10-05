"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  CheckCircle, 
  Download, 
  Mail, 
  Phone, 
  Clock,
  ArrowRight,
  Shield,
  Star,
  Trophy,
  Gift,
  Calendar,
  FileText,
  Users,
  Sparkles,
  Heart,
  Home
} from "lucide-react"

interface ApplicationData {
  step1?: {
    trademarkName?: string
    slogan?: string
    trademarkType?: string
    businessCategories?: string[]
    useInCommerce?: string
  }
  step2?: {
    applicantType?: string
    firstName?: string
    lastName?: string
    organizationName?: string
    email?: string
    organizationEmail?: string
  }
  step3?: {
    package?: string
    originalAmount?: number
    finalAmount?: number
    paymentMethod?: string
  }
}

export default function SuccessPage() {
  const router = useRouter()
  const [applicationData, setApplicationData] = useState<ApplicationData>({})
  const [applicationId] = useState(() => 
    'TM-' + Date.now().toString().slice(-6) + Math.random().toString(36).substring(2, 8).toUpperCase()
  )

  useEffect(() => {
    // Load all application data
    const step1 = localStorage.getItem('trademarkStep1')
    const step2 = localStorage.getItem('trademarkStep2')
    const step3 = localStorage.getItem('trademarkStep3')

    setApplicationData({
      step1: step1 ? JSON.parse(step1) : null,
      step2: step2 ? JSON.parse(step2) : null,
      step3: step3 ? JSON.parse(step3) : null
    })
  }, [])

  const handleDownloadReceipt = () => {
    // Generate a simple receipt (in real app, this would generate a PDF)
    const receiptData = {
      applicationId,
      timestamp: new Date().toISOString(),
      ...applicationData
    }
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(receiptData, null, 2))
    const downloadAnchor = document.createElement('a')
    downloadAnchor.setAttribute("href", dataStr)
    downloadAnchor.setAttribute("download", `trademark-application-${applicationId}.json`)
    document.body.appendChild(downloadAnchor)
    downloadAnchor.click()
    downloadAnchor.remove()
  }

  const clearApplicationData = () => {
    localStorage.removeItem('trademarkStep1')
    localStorage.removeItem('trademarkStep2')
    localStorage.removeItem('trademarkStep3')
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8 relative overflow-hidden">
      {/* Celebratory Floating Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-blue-200 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-indigo-300 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-32 right-1/4 w-20 h-20 bg-pink-200 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/2 left-20 w-36 h-36 bg-yellow-200 rounded-full animate-bounce delay-1000"></div>
        
        {/* Success confetti effect */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-16 left-1/3 transform -translate-x-1/2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping delay-200"></div>
        </div>
        <div className="absolute top-12 right-1/3 transform translate-x-1/2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping delay-400"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-yellow-500 mr-2 animate-pulse" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Application Submitted Successfully!
              </h1>
              <Sparkles className="w-6 h-6 text-yellow-500 ml-2 animate-pulse" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Congratulations! Your trademark application has been successfully submitted to the USPTO. 
              We&apos;ll keep you updated every step of the way.
            </p>
          </div>

          {/* Application ID */}
          <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg mb-8">
            <div className="text-sm text-gray-600 mb-2">Your Application ID</div>
            <div className="text-3xl font-bold text-gray-800 tracking-wider font-mono">
              {applicationId}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Please save this ID for your records
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* What's Next */}
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
              <CardTitle className="text-xl flex items-center">
                <Clock className="w-5 h-5 mr-3" />
                What Happens Next?
              </CardTitle>
              <CardDescription className="text-blue-100">
                Your trademark application journey timeline
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Application Submitted</h4>
                    <p className="text-sm text-gray-600">Your application has been received and is being processed</p>
                    <p className="text-xs text-green-600 font-medium">Completed ✓</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <FileText className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Attorney Review</h4>
                    <p className="text-sm text-gray-600">Our attorneys will review your application before USPTO filing</p>
                    <p className="text-xs text-yellow-600 font-medium">Next (2-3 business days)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">USPTO Filing</h4>
                    <p className="text-sm text-gray-600">Application filed with the United States Patent and Trademark Office</p>
                    <p className="text-xs text-blue-600 font-medium">Within 5-7 business days</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Calendar className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">USPTO Review</h4>
                    <p className="text-sm text-gray-600">USPTO examiner reviews application for approval</p>
                    <p className="text-xs text-purple-600 font-medium">8-12 months</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Trophy className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Registration</h4>
                    <p className="text-sm text-gray-600">Your trademark is officially registered and protected</p>
                    <p className="text-xs text-green-600 font-medium">Final step</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Support */}
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
              <CardTitle className="text-xl flex items-center">
                <Users className="w-5 h-5 mr-3" />
                We&apos;re Here to Help
              </CardTitle>
              <CardDescription className="text-green-100">
                Your dedicated support team
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Get Updates</h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-800">Email Notifications</div>
                        <div className="text-sm text-gray-600">We&apos;ll email you at every major milestone</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <Phone className="w-5 h-5 text-green-600 mr-3" />
                      <div>
                        <div className="font-medium text-gray-800">Phone Support</div>
                        <div className="text-sm text-gray-600">Call us anytime at 1-800-TRADEMARK</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Your Account Manager</h4>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Sarah Johnson, Esq.</div>
                        <div className="text-sm text-gray-600">Senior Trademark Attorney</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Sarah will personally oversee your application and be your point of contact throughout the process.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
                  <div className="flex items-center mb-2">
                    <Star className="w-5 h-5 text-yellow-600 mr-2" />
                    <span className="font-semibold text-gray-800">Priority Support</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    As a valued client, you have access to our priority support queue with average response time of 2 hours.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Download Receipt</h3>
              <p className="text-sm text-gray-600 mb-4">Get a detailed receipt of your application</p>
              <Button 
                onClick={handleDownloadReceipt}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Track Application</h3>
              <p className="text-sm text-gray-600 mb-4">Monitor your application status online</p>
              <Button 
                variant="outline"
                className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <FileText className="w-4 h-4 mr-2" />
                Track Status
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Leave Review</h3>
              <p className="text-sm text-gray-600 mb-4">Share your experience with others</p>
              <Button 
                variant="outline"
                className="w-full border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                <Star className="w-4 h-4 mr-2" />
                Write Review
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Special Offers */}
        <Card className="shadow-xl border-0 bg-gradient-to-r from-purple-500 to-pink-600 text-white mb-8">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Exclusive Client Benefits</h3>
                  <p className="text-purple-100 text-lg">
                    As our valued client, you get access to exclusive services and discounts
                  </p>
                </div>
              </div>
              <Button 
                variant="outline"
                className="border-white text-purple-500 hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View Benefits
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Final Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Thank you for choosing our trademark services!
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We&apos;re committed to providing you with the best trademark registration experience. 
              Your application is in expert hands, and we&apos;ll guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={clearApplicationData}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-3"
              >
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Button>
              <Button 
                variant="outline"
                onClick={() => router.push('/register/step-1')}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
              >
                File Another Trademark
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}