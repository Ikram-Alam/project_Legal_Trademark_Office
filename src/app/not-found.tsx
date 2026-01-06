import Link from "next/link"
import { Home, Search, Phone, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="mb-8 relative">
          <div className="text-[150px] md:text-[200px] font-bold text-transparent bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text animate-pulse">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-blue-200 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
            <AlertCircle className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The page may have been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                Popular Pages
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/services", label: "Our Services", icon: "📋" },
                { href: "/register", label: "Register Trademark", icon: "✍️" },
                { href: "/faq", label: "FAQs", icon: "❓" },
                { href: "/about", label: "About Us", icon: "ℹ️" },
                { href: "/contact", label: "Contact", icon: "📞" },
                { href: "/privacy-policy", label: "Privacy Policy", icon: "🔒" }
              ].map((link, index) => (
                <Link key={index} href={link.href}>
                  <div className="group p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-blue-300">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{link.icon}</span>
                      <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                        {link.label}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-8 text-gray-600">
          <p className="mb-2">Need immediate assistance?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+18063180751" className="flex items-center hover:text-blue-600 transition-colors duration-300">
              <Phone className="w-4 h-4 mr-2" />
              806-318-0751
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:usptolegaltrademarkoffice@gmail.com" className="flex items-center hover:text-blue-600 transition-colors duration-300">
              usptolegaltrademarkoffice@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
