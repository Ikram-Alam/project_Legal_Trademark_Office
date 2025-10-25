"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X, Zap, Phone } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-white via-blue-50 to-white shadow-xl fixed w-full top-0 z-50 border-b border-blue-100/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo with USPTO Image */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center space-x-2 sm:space-x-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 transform group-hover:scale-110 transition-all duration-300">
                <Image
                  src="/uspto1.png"
                  alt="Legal Trademark Office Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Legal Trademark Office
                </div>
                <div className="text-xs text-blue-500 font-medium">
                  Protecting Your Brand Since 2010
                </div>
              </div>
              {/* Mobile: Show abbreviated name */}
              <div className="sm:hidden">
                <div className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  USPTO
                </div>
              </div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg hover:bg-blue-50 relative group"
              >
                Home
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>

              {/* Enhanced Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg hover:bg-blue-50 flex items-center group relative">
                  Our Services
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 bg-white/95 backdrop-blur-sm border border-blue-100 shadow-xl rounded-xl p-2">
                  <DropdownMenuItem className="rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200">
                    <Link href="/services/trademark-registration" className="w-full flex items-center py-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                      Trademark Registration
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200">
                    <Link href="/services/trademark-renewal" className="w-full flex items-center py-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></div>
                      Trademark Renewal
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-200">
                    <Link href="/services/trademark-revival" className="w-full flex items-center py-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                      Trademark Revival
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg hover:bg-blue-50 relative group"
              >
                About Us
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg hover:bg-blue-50 relative group"
              >
                Contact Us
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg hover:bg-blue-50 relative group"
              >
                FAQ
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center whitespace-nowrap">
              <Phone className="w-4 h-4 mr-1" />
              (806) 302-1211
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                <Zap className="w-4 h-4 mr-2" />
                Register Now
              </Button>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transform transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fadeIn">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-gradient-to-b from-white to-blue-50 border-t border-blue-100 shadow-lg">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-4 py-2">
                <span className="text-gray-900 text-base font-bold flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                  Our Services
                </span>
                <div className="ml-6 mt-3 space-y-2">
                  <Link
                    href="/services/trademark-registration"
                    className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-3 text-sm rounded-lg transition-all duration-300 flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                    Trademark Registration
                  </Link>
                  <Link
                    href="/services/trademark-renewal"
                    className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-3 text-sm rounded-lg transition-all duration-300 flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></div>
                    Trademark Renewal
                  </Link>
                  <Link
                    href="/services/trademark-revival"
                    className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-3 text-sm rounded-lg transition-all duration-300 flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                    Trademark Revival
                  </Link>
                </div>
              </div>
              
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              
              {/* Mobile Contact & CTA */}
              <div className="pt-4 space-y-3">
                <div className="flex items-center justify-center text-sm text-gray-600 bg-blue-50 py-2 px-4 rounded-lg">
                  <Phone className="w-4 h-4 mr-2 text-blue-500" />
                  Call us: (806) 302-1211
                </div>
                <Link href="/register" onClick={() => setIsOpen(false)} className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <Zap className="w-4 h-4 mr-2" />
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}