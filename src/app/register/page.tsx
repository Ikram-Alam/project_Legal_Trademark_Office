"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, FileText, User, CreditCard, Shield, Star, Clock, Users, Search, Globe } from "lucide-react"

// Inline Badge component
function Badge({ children, variant = "default", className = "" }: { children: React.ReactNode, variant?: "default" | "secondary", className?: string }) {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
  const variantClasses = variant === "secondary" 
    ? "bg-gray-100 text-gray-800" 
    : "bg-blue-100 text-blue-800"
  
  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  )
}

const steps = [
  {
    id: 1,
    title: "Trademark Information",
    description: "Enter your trademark details and conduct searches",
    icon: FileText,
    href: "/register/step-1",
    details: "Trademark name, logo, classes, and comprehensive search",
    time: "5-10 minutes"
  },
  {
    id: 2,
    title: "Personal Details",
    description: "Provide applicant and attorney information",
    icon: User,
    href: "/register/step-2",
    details: "Contact information, correspondence preferences, signatures",
    time: "3-5 minutes"
  },
  {
    id: 3,
    title: "Payment & Review",
    description: "Review application and complete payment",
    icon: CreditCard,
    href: "/register/step-3",
    details: "Package selection, application review, secure payment",
    time: "2-3 minutes"
  }
]

export default function RegisterPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-indigo-200 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-300 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200">
              <Shield className="w-3 h-3 mr-1" />
              Trusted by 10,000+ Businesses
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Register Your Trademark
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Protect your brand in just 3 simple steps. Our expert team will guide you through the entire process with comprehensive support and legal expertise.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center text-gray-600">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="font-semibold">4.9/5</span>
              <span className="ml-1">Customer Rating</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 text-green-500 mr-2" />
              <span className="font-semibold">10,000+</span>
              <span className="ml-1">Trademarks Filed</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 text-blue-500 mr-2" />
              <span className="font-semibold">24-48 hrs</span>
              <span className="ml-1">Processing Time</span>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Registration Process</h2>
            
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`relative flex items-center justify-center w-16 h-16 rounded-full border-3 transition-all duration-300 ${
                    currentStep >= step.id
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 border-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-white border-gray-300 text-gray-500 hover:border-gray-400"
                  }`}>
                    {currentStep > step.id ? (
                      <Check className="w-8 h-8" />
                    ) : (
                      <step.icon className="w-8 h-8" />
                    )}
                    {currentStep >= step.id && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-pulse opacity-20"></div>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-32 h-2 mx-6 rounded-full transition-all duration-500 ${
                      currentStep > step.id 
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600" 
                        : "bg-gray-200"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div key={step.id} className="text-center">
                  <h3 className={`text-lg font-semibold mb-2 ${
                    currentStep >= step.id ? "text-blue-600" : "text-gray-600"
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{step.details}</p>
                  <div className="flex items-center justify-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <Card key={step.id} className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
              currentStep === step.id 
                ? "ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl shadow-blue-500/20" 
                : "hover:bg-gradient-to-br hover:from-gray-50 hover:to-white border-gray-200"
            }`}>
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                  currentStep >= step.id
                    ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 group-hover:from-blue-100 group-hover:to-indigo-100 group-hover:text-blue-600"
                }`}>
                  <step.icon className="w-10 h-10" />
                </div>
                <CardTitle className="text-xl mb-2">
                  Step {step.id}: {step.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">What you&apos;ll provide:</p>
                  <p className="text-xs text-gray-500">{step.details}</p>
                </div>
                <Button 
                  className={`w-full transition-all duration-300 ${
                    currentStep === step.id 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25" 
                      : "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-blue-600 hover:to-indigo-600"
                  }`}
                  onClick={() => {
                    setCurrentStep(step.id)
                    router.push(step.href)
                  }}
                >
                  {currentStep > step.id ? (
                    <>
                      <Check className="mr-2 w-4 h-4" />
                      Review Step
                    </>
                  ) : currentStep === step.id ? (
                    <>
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Start Step
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Start Button */}
        <div className="text-center mb-20">
          <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Protect Your Brand?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses who trust us with their trademark protection. 
              Start your registration today with expert guidance every step of the way.
            </p>
            <Button 
              size="lg"
              className="px-12 py-6 text-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              onClick={() => router.push("/register/step-1")}
            >
              <Shield className="mr-3 w-6 h-6" />
              Start Your Trademark Registration
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              <Clock className="w-4 h-4 inline mr-1" />
              Takes only 10-15 minutes • No hidden fees • Money-back guarantee
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-green-500/20">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Expert Review</h3>
            <p className="text-gray-600 leading-relaxed">
              Our experienced trademark attorneys review every application before submission to ensure accuracy and maximize approval chances.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/20">
              <Search className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Comprehensive Search</h3>
            <p className="text-gray-600 leading-relaxed">
              Thorough trademark searches across federal databases and common law sources to identify potential conflicts before filing.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/20">
              <Globe className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">USPTO Direct Filing</h3>
            <p className="text-gray-600 leading-relaxed">
              Direct electronic filing with the United States Patent and Trademark Office with full tracking and correspondence management.
            </p>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Trademark Service?</h2>
            <p className="text-blue-200 text-lg max-w-3xl mx-auto">
              We provide comprehensive trademark protection with industry-leading expertise and customer support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">4.9/5 Rating</h4>
              <p className="text-blue-200 text-sm">Trusted by thousands of satisfied customers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">10,000+ Filed</h4>
              <p className="text-blue-200 text-sm">Successfully processed trademark applications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">24-48 Hours</h4>
              <p className="text-blue-200 text-sm">Typical processing and review time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold mb-2">Money-Back</h4>
              <p className="text-blue-200 text-sm">30-day satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}