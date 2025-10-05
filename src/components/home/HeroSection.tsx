"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, CheckCircle, Shield, X } from "lucide-react"
import { useState } from "react"

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
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secure Your Brand&apos;s Identity
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Name, Logo, Slogan & More!
            </p>
            <p className="text-lg mb-8 opacity-90">
              Starting at Just $49 + USPTO Filing Fee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Register Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Free Consultation
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold">200,000+</div>
                <div className="text-sm opacity-80">Trademarks since 2009</div>
              </div>
              <div>
                <div className="text-2xl font-bold">120,000+</div>
                <div className="text-sm opacity-80">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm opacity-80">Years in Service</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">Search Your Brand Name Availability</h3>
              <p className="text-sm opacity-90 mb-4">
                Search to see if your business name, slogan, or logo is available for trademark registration.
              </p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter your brand name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="flex-1 px-4 py-2 rounded-md text-gray-900"
                />
                <Button 
                  onClick={handleSearch}
                  disabled={!searchTerm.trim()}
                  className="bg-blue-700 hover:bg-blue-800 disabled:bg-gray-600"
                >
                  <Search className="h-4 w-4" />
                </Button>
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