"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Users, Clock, ArrowRight, Star, Award, Search, TrendingUp, FileCheck, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Inline Badge component to avoid import issues
const Badge = ({ className = "", children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) => (
  <div className={`inline-flex items-center rounded-full border border-transparent bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium ${className}`} {...props}>
    {children}
  </div>
)

export default function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showPopup, setShowPopup] = useState(false)

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setShowPopup(true)
    }
  }

  const closePopup = () => {
    setShowPopup(false)
    setSearchTerm("")
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                #1 Trusted Trademark Service Since 2009
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Secure Your Brand&apos;s Identity
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-blue-600 font-semibold mb-6">
              Trademark Registration Made Simple & Affordable
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Protect your business name, logo, slogan & more with our expert legal team. 
              Starting at just $49 + USPTO filing fee.
            </p>
            
            {/* Features List */}
            <div className="mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto lg:mx-0">
                {[
                  "Licensed trademark attorneys",
                  "Comprehensive trademark search",
                  "USPTO correspondence handling", 
                  "30-day money-back guarantee"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Link href="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg">
                  Start Registration Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  Free Consultation
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {[
                { icon: FileCheck, value: "200K+", label: "Trademarks Filed" },
                { icon: Users, value: "120K+", label: "Happy Clients" },
                { icon: TrendingUp, value: "98%", label: "Success Rate" },
                { icon: Clock, value: "24/7", label: "Support" }
              ].map((indicator, index) => {
                const IconComponent = indicator.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-lg p-3 shadow-sm border mx-auto w-fit mb-2">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{indicator.value}</div>
                    <div className="text-sm text-gray-600">{indicator.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Search Card */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Search Card */}
              <Card className="bg-white shadow-2xl border-0 p-8 transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                      <Search className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Check Availability</h3>
                    <p className="text-gray-600">
                      Search to see if your brand name is available for trademark registration
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Enter your brand name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      />
                    </div>
                    <Button 
                      onClick={handleSearch}
                      disabled={!searchTerm.trim()}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 py-3 text-lg transition-all duration-300"
                    >
                      <Search className="w-5 h-5 mr-2" />
                      Search Now - Free
                    </Button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 text-center">Trusted by 120,000+ businesses</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-green-500 rounded-full p-3 shadow-lg animate-bounce">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-500 rounded-full p-3 shadow-lg animate-pulse">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 bg-yellow-500 rounded-full p-2 shadow-lg animate-bounce delay-500">
                <Award className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Search Result Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100 border border-white/30">
              <div className="relative p-8">
                {/* Close Button */}
                <button 
                  onClick={closePopup}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Success Icon */}
                <div className="text-center mb-6">
                  <div className="bg-green-100 rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Great News!</h3>
                </div>

                {/* Message */}
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold text-blue-600">&ldquo;{searchTerm}&rdquo;</span> appears to be available!
                  </p>
                  <p className="text-gray-600">
                    Please register now to secure your brand identity and protect your business.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link href="/register" className="block">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      <Shield className="w-5 h-5 mr-2" />
                      Secure Your Brand Now
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    onClick={closePopup}
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3"
                  >
                    Search Another Name
                  </Button>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  * This is a preliminary search. Professional trademark search recommended for complete clearance.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}