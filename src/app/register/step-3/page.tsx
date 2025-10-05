"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  ArrowLeft, 
  Check, 
  CreditCard, 
  Lock, 
  Shield, 
  Star, 
  Award, 
  FileText,
  Users,
  Phone,
  Mail,
  Globe,
  AlertTriangle,
  CheckCircle,
  Zap,
  Trophy,
  Heart,
  Sparkles,
  BadgeCheck,
  Gift,
  Timer,
  DollarSign,
  Verified
} from "lucide-react"

interface Step1Data {
  trademarkName: string
  slogan?: string
  trademarkType: string
  logoFile?: File
  businessCategories: string[]
  useInCommerce: string
  firstUseDate?: string
  firstCommercialUseDate?: string
  searchResults?: []
}

interface Step2Data {
  applicantType: 'individual' | 'organization'
  // Individual fields
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string
  // Organization fields
  organizationName?: string
  organizationType?: string
  contactPerson?: string
  organizationEmail?: string
  organizationPhone?: string
  organizationAddress?: string
  organizationCity?: string
  organizationState?: string
  organizationZipCode?: string
  organizationCountry?: string
  // Additional fields
  attorneyDesignation?: string
  attorneyName?: string
  attorneyEmail?: string
  attorneyPhone?: string
  correspondencePreference?: string
  signatureMethod?: string
}

export default function Step3Page() {
  const router = useRouter()
  const [selectedPackage, setSelectedPackage] = useState("standard")
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null)
  const [step2Data, setStep2Data] = useState<Step2Data | null>(null)
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [newsletterSignup, setNewsletterSignup] = useState(true)
  const [paymentMethod, setPaymentMethod] = useState("credit")
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    // Load previous steps data
    const step1 = localStorage.getItem('trademarkStep1')
    const step2 = localStorage.getItem('trademarkStep2')
    
    if (!step1 || !step2) {
      router.push('/register/step-1')
      return
    }

    setStep1Data(JSON.parse(step1))
    setStep2Data(JSON.parse(step2))
  }, [router])

  const packages = [
    {
      id: "basic",
      name: "Essential",
      price: 49,
      originalPrice: 99,
      description: "Perfect for startups and individuals",
      popular: false,
      savings: 50,
      processingTime: "10-12 weeks",
      features: [
        "Trademark name/logo registration",
        "USPTO filing (government fees included)",
        "Basic trademark search",
        "Application preparation & review",
        "Email support within 24 hours",
        "Standard processing timeline",
        "Digital certificate upon approval",
        "Basic application tracking"
      ],
      governmentFee: 325,
      totalPrice: 374,
      badge: "Great Value",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "standard",
      name: "Professional",
      price: 149,
      originalPrice: 249,
      description: "Most comprehensive protection package",
      popular: true,
      savings: 100,
      processingTime: "8-10 weeks",
      features: [
        "Everything in Essential package",
        "Attorney review before filing",
        "Comprehensive trademark search & analysis",
        "Priority customer support (2-hour response)",
        "Real-time application tracking dashboard",
        "USPTO correspondence handling",
        "30-day money back guarantee",
        "Expedited initial review",
        "Free consultation call (30 minutes)",
        "Trademark monitoring alerts (6 months)"
      ],
      governmentFee: 325,
      totalPrice: 474,
      badge: "Most Popular",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "premium",
      name: "Enterprise",
      price: 249,
      originalPrice: 399,
      description: "Full-service with premium legal protection",
      popular: false,
      savings: 150,
      processingTime: "6-8 weeks",
      features: [
        "Everything in Professional package",
        "Dedicated attorney assigned to your case",
        "Cease & desist letter template library",
        "Comprehensive trademark monitoring (1 year)",
        "Priority USPTO filing & expedited processing",
        "Unlimited phone consultations",
        "Express attorney review (24-48 hours)",
        "Legal protection package & guidance",
        "Domain name availability check",
        "International trademark guidance",
        "Opposition response assistance",
        "Renewal reminder service (10 years)"
      ],
      governmentFee: 325,
      totalPrice: 574,
      badge: "Premium Service",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const selectedPkg = packages.find(pkg => pkg.id === selectedPackage)

  const handlePromoCode = () => {
    // Simulate promo code validation
    if (promoCode.toLowerCase() === "save20") {
      setDiscount(0.20)
    } else if (promoCode.toLowerCase() === "first10") {
      setDiscount(0.10)
    } else {
      setDiscount(0)
    }
  }

  const calculateTotal = () => {
    if (!selectedPkg) return 0
    const subtotal = selectedPkg.totalPrice
    const discountAmount = subtotal * discount
    return subtotal - discountAmount
  }

  const handlePayment = async () => {
    if (!acceptTerms || !acceptPrivacy) {
      alert('Please accept the terms and privacy policy to continue.')
      return
    }

    setIsProcessing(true)
    
    try {
      // Save payment selection
      const paymentData = {
        package: selectedPackage,
        originalAmount: selectedPkg?.totalPrice,
        discount: discount,
        finalAmount: calculateTotal(),
        promoCode: promoCode,
        paymentMethod: paymentMethod,
        timestamp: new Date().toISOString(),
        newsletterSignup: newsletterSignup
      }
      localStorage.setItem('trademarkStep3', JSON.stringify(paymentData))
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For now, just show success message (will integrate with Stripe later)
      router.push('/register/success')
    } catch (error) {
      console.error('Payment error:', error)
      alert('Payment processing failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const isFormValid = acceptTerms && acceptPrivacy

  if (!step1Data || !step2Data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your information...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8 relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-blue-200 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-indigo-300 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-32 right-1/4 w-20 h-20 bg-pink-200 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/2 left-20 w-36 h-36 bg-yellow-200 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Progress Header */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              <span className="font-semibold">Step 3 of 3</span>
              <span className="mx-2">•</span>
              <span>Review & Payment</span>
              <span className="mx-2">•</span>
              <span className="flex items-center text-green-600">
                <CheckCircle className="w-4 h-4 mr-1" />
                Almost Complete!
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-500" style={{ width: '100%' }}>
                <div className="w-full h-full bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Package Selection */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Sparkles className="w-6 h-6 mr-3" />
                  Choose Your Protection Level
                </CardTitle>
                <CardDescription className="text-green-100">
                  Select the package that provides the right level of protection for your trademark
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {packages.map((pkg) => (
                      <div key={pkg.id} className="relative">
                        {pkg.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center shadow-lg">
                              <Star className="w-3 h-3 mr-1" />
                              {pkg.badge}
                            </span>
                          </div>
                        )}
                        
                        <div className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 h-full ${
                          selectedPackage === pkg.id 
                            ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg ring-2 ring-green-200' 
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                        } ${pkg.popular ? 'ring-2 ring-yellow-200 shadow-lg' : ''}`}>
                          
                          {/* Package Header */}
                          <div className="flex items-center mb-4">
                            <RadioGroupItem value={pkg.id} id={pkg.id} className="text-green-600" />
                            <Label htmlFor={pkg.id} className="ml-3 cursor-pointer">
                              <div className="font-bold text-lg text-gray-800">{pkg.name}</div>
                              <div className={`text-xs font-medium bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                                {pkg.badge}
                              </div>
                            </Label>
                          </div>
                          
                          {/* Pricing */}
                          <div className="mb-4">
                            <div className="flex items-baseline mb-2">
                              <span className="text-3xl font-bold text-gray-900">${pkg.price}</span>
                              <span className="text-lg text-gray-400 line-through ml-2">${pkg.originalPrice}</span>
                              <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-full ml-2">
                                Save ${pkg.savings}
                              </span>
                            </div>
                            <div className="text-sm text-gray-500 mb-1">+ ${pkg.governmentFee} USPTO fees</div>
                            <div className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                              Total: ${pkg.totalPrice}
                            </div>
                            <div className="flex items-center text-sm text-gray-600 mt-2">
                              <Timer className="w-4 h-4 mr-1 text-blue-500" />
                              {pkg.processingTime}
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4 text-sm">{pkg.description}</p>

                          {/* Features List */}
                          <ul className="space-y-2">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-start text-sm">
                                <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Package Highlight */}
                          {pkg.popular && (
                            <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                              <div className="flex items-center text-sm font-medium text-yellow-800">
                                <Trophy className="w-4 h-4 mr-1" />
                                Recommended by 9 out of 10 attorneys
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Enhanced Application Review */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center">
                  <FileText className="w-5 h-5 mr-3" />
                  Application Review
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Review your trademark application details before submission
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Trademark Information */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <BadgeCheck className="w-4 h-4 mr-2 text-green-600" />
                    Trademark Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Trademark Name:</span>
                      <p className="text-gray-900">{step1Data?.trademarkName}</p>
                    </div>
                    {step1Data?.slogan && (
                      <div>
                        <span className="font-medium text-gray-700">Slogan:</span>
                        <p className="text-gray-900">{step1Data.slogan}</p>
                      </div>
                    )}
                    <div>
                      <span className="font-medium text-gray-700">Type:</span>
                      <p className="text-gray-900 capitalize">{step1Data?.trademarkType}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Use in Commerce:</span>
                      <p className="text-gray-900 capitalize">{step1Data?.useInCommerce}</p>
                    </div>
                  </div>
                  {step1Data?.businessCategories && step1Data.businessCategories.length > 0 && (
                    <div className="mt-3">
                      <span className="font-medium text-gray-700">Business Categories:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {step1Data.businessCategories.map((category, index) => (
                          <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Applicant Information */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-blue-600" />
                    Applicant Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Applicant Type:</span>
                      <p className="text-gray-900 capitalize">{step2Data?.applicantType}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Name:</span>
                      <p className="text-gray-900">
                        {step2Data?.applicantType === 'individual' 
                          ? `${step2Data.firstName} ${step2Data.lastName}`
                          : step2Data?.organizationName
                        }
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Email:</span>
                      <p className="text-gray-900">
                        {step2Data?.applicantType === 'individual' 
                          ? step2Data.email
                          : step2Data?.organizationEmail
                        }
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Phone:</span>
                      <p className="text-gray-900">
                        {step2Data?.applicantType === 'individual' 
                          ? step2Data.phone
                          : step2Data?.organizationPhone
                        }
                      </p>
                    </div>
                  </div>
                  
                  {step2Data?.attorneyDesignation === "yes" && (
                    <div className="mt-3 p-3 bg-indigo-100 rounded-lg">
                      <span className="font-medium text-gray-700">Attorney Designated:</span>
                      <p className="text-gray-900">{step2Data.attorneyName}</p>
                      <p className="text-sm text-gray-600">{step2Data.attorneyEmail}</p>
                    </div>
                  )}
                </div>

                {/* Correspondence Preferences */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-purple-600" />
                    Correspondence Preferences
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Preferred Method:</span>
                      <p className="text-gray-900 capitalize">{step2Data?.correspondencePreference}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Signature Method:</span>
                      <p className="text-gray-900 capitalize">{step2Data?.signatureMethod}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Payment Information */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center">
                  <CreditCard className="w-5 h-5 mr-3" />
                  Payment Information
                </CardTitle>
                <CardDescription className="text-purple-100">
                  Secure payment processing with enterprise-grade encryption
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Development Notice */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-800">Development Preview Mode</h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        Secure payment integration with Stripe will be implemented in the production version. 
                        This preview demonstrates the complete payment flow and user experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-gray-800">Payment Method</Label>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-purple-400 transition-colors">
                        <RadioGroupItem value="credit" id="credit" />
                        <Label htmlFor="credit" className="cursor-pointer flex items-center flex-1">
                          <CreditCard className="w-5 h-5 mr-3 text-purple-600" />
                          <div>
                            <div className="font-medium">Credit/Debit Card</div>
                            <div className="text-sm text-gray-600">Visa, MasterCard, American Express</div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-xl hover:border-purple-400 transition-colors">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="cursor-pointer flex items-center flex-1">
                          <Globe className="w-5 h-5 mr-3 text-purple-600" />
                          <div>
                            <div className="font-medium">PayPal</div>
                            <div className="text-sm text-gray-600">Pay with your PayPal account</div>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Promo Code Section */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                  <Label className="font-semibold text-gray-700 flex items-center mb-3">
                    <Gift className="w-4 h-4 mr-2 text-green-600" />
                    Promotional Code
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter promo code (try: SAVE20 or FIRST10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="border-green-200 focus:border-green-500"
                    />
                    <Button 
                      onClick={handlePromoCode}
                      variant="outline"
                      className="border-green-200 text-green-700 hover:bg-green-100"
                    >
                      Apply
                    </Button>
                  </div>
                  {discount > 0 && (
                    <div className="mt-2 text-sm text-green-600 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {Math.round(discount * 100)}% discount applied!
                    </div>
                  )}
                </div>

                {/* Mock Payment Form */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="font-medium text-gray-700">Card Number</Label>
                      <div className="mt-2 p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-500 flex items-center">
                        <CreditCard className="w-4 h-4 mr-2" />
                        •••• •••• •••• ••••
                      </div>
                    </div>
                    <div>
                      <Label className="font-medium text-gray-700">Expiry Date</Label>
                      <div className="mt-2 p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                        MM/YY
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="font-medium text-gray-700">CVV</Label>
                      <div className="mt-2 p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                        •••
                      </div>
                    </div>
                    <div>
                      <Label className="font-medium text-gray-700">ZIP Code</Label>
                      <div className="mt-2 p-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                        {(step2Data?.zipCode || step2Data?.organizationZipCode) || '•••••'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Features */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <Lock className="w-6 h-6 text-green-600 mb-1" />
                      <span className="text-xs font-medium text-gray-700">256-bit SSL</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Shield className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs font-medium text-gray-700">PCI Compliant</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Verified className="w-6 h-6 text-purple-600 mb-1" />
                      <span className="text-xs font-medium text-gray-700">Identity Verified</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <BadgeCheck className="w-6 h-6 text-green-600 mb-1" />
                      <span className="text-xs font-medium text-gray-700">Secure Processing</span>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="terms"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                      className="mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and understand that this application will be filed with the USPTO
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="privacy"
                      checked={acceptPrivacy}
                      onCheckedChange={(checked) => setAcceptPrivacy(checked === true)}
                      className="mt-1"
                    />
                    <Label htmlFor="privacy" className="text-sm text-gray-700 cursor-pointer">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to the processing of my personal data
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="newsletter"
                      checked={newsletterSignup}
                      onCheckedChange={(checked) => setNewsletterSignup(checked === true)}
                      className="mt-1"
                    />
                    <Label htmlFor="newsletter" className="text-sm text-gray-700 cursor-pointer">
                      Send me trademark tips, legal updates, and special offers (optional)
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Order Summary Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Trademark Details</h4>
                    <p className="text-sm text-gray-900 font-medium">{step1Data?.trademarkName}</p>
                    {step1Data?.slogan && (
                      <p className="text-xs text-gray-600 mt-1">Slogan: {step1Data.slogan}</p>
                    )}
                    <div className="flex items-center mt-2 text-xs text-blue-600">
                      <Verified className="w-3 h-3 mr-1" />
                      {step1Data?.trademarkType} trademark
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Applicant</h4>
                    <p className="text-sm text-gray-900 font-medium">
                      {step2Data?.applicantType === 'individual' 
                        ? `${step2Data.firstName} ${step2Data.lastName}`
                        : step2Data?.organizationName
                      }
                    </p>
                    <p className="text-xs text-gray-600">
                      {step2Data?.applicantType === 'individual' 
                        ? step2Data.email
                        : step2Data?.organizationEmail
                      }
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3 text-gray-800 flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      Package: {selectedPkg?.name}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span>Service Fee</span>
                        <div className="text-right">
                          <span className="font-medium">${selectedPkg?.price}</span>
                          <div className="text-xs text-gray-500 line-through">
                            ${selectedPkg?.originalPrice}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span>USPTO Government Fee</span>
                        <span className="font-medium">${selectedPkg?.governmentFee}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount ({Math.round(discount * 100)}%)</span>
                          <span className="font-medium">-${Math.round((selectedPkg?.totalPrice || 0) * discount)}</span>
                        </div>
                      )}
                      <div className="border-t pt-2 mt-3">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span className="text-green-600">${calculateTotal()}</span>
                        </div>
                        {discount > 0 && (
                          <div className="text-xs text-green-600 text-right mt-1">
                            You save ${Math.round((selectedPkg?.totalPrice || 0) * discount)}!
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Security & Guarantees */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Security & Guarantees
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Lock className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Enterprise-grade 256-bit SSL encryption</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>PCI DSS Level 1 compliant processing</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>30-day money back guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>24/7 priority customer support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>USPTO registration guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>99.9% customer satisfaction rate</span>
                  </li>
                </ul>
                
                <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="flex items-center text-sm font-medium text-blue-800">
                    <Zap className="w-4 h-4 mr-1" />
                    Trusted by 50,000+ businesses
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Information */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-t-lg">
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-gray-700 mb-4">
                  Our trademark experts are standing by to help you complete your application.
                </p>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-orange-200 text-orange-700 hover:bg-orange-100"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call: 1-800-TRADEMARK
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-200 text-blue-700 hover:bg-blue-100"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Support
                  </Button>
                </div>
                <p className="text-xs text-gray-600 mt-3 text-center">
                  Free consultation • Available 24/7 • Average response: 2 minutes
                </p>
              </CardContent>
            </Card>

            {/* Enhanced Payment Button */}
            <Button 
              onClick={handlePayment}
              disabled={!isFormValid || isProcessing}
              className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              {isProcessing ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing Payment...
                </div>
              ) : (
                <div className="flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  Complete Secure Payment - ${calculateTotal()}
                </div>
              )}
            </Button>
            
            {!isFormValid && (
              <p className="text-xs text-red-600 text-center">
                Please accept the terms and privacy policy to continue
              </p>
            )}
          </div>
        </div>

        {/* Enhanced Navigation */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Button 
                variant="outline"
                onClick={() => router.push('/register/step-2')}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Contact Details
              </Button>
              
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Questions? Call us:</div>
                  <div className="text-lg font-semibold text-blue-600">1-800-TRADEMARK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}