import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Clock, Users, Shield, CheckCircle, Zap, Star, Phone } from "lucide-react"

// Inline Badge component to avoid import issues
const Badge = ({ className = "", children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) => (
  <div className={`inline-flex items-center rounded-full border border-transparent bg-red-100 text-red-700 px-4 py-2 ${className}`} {...props}>
    {children}
  </div>
)

export default function CTASection() {
  const urgencyIndicators = [
    {
      icon: Clock,
      text: "Limited time offer",
      subtext: "Save 50% on registration fees"
    },
    {
      icon: Users,
      text: "Join 120,000+ businesses",
      subtext: "who trust us with their trademarks"
    },
    {
      icon: Shield,
      text: "100% money-back guarantee",
      subtext: "No registration, no fee"
    }
  ]

  const quickFacts = [
    "⚡ Fast 24-48 hour processing",
    "🏆 98% success rate",
    "📞 24/7 customer support", 
    "🔒 Bank-level security"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <Card className="bg-white shadow-2xl border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <Badge className="bg-red-100 text-red-700 px-4 py-2 mb-4">
                    <Zap className="w-4 h-4 mr-2" />
                    Limited Time - 50% Off Registration
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Ready to <span className="text-blue-600">Protect Your Brand?</span>
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Don&apos;t wait until it&apos;s too late. Secure your trademark today and join over 
                    120,000 businesses who trust us to protect their most valuable assets.
                  </p>
                </div>
                
                {/* Quick Facts */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {quickFacts.map((fact, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link href="/register" className="flex-1">
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Start Registration Now
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-4 text-lg">
                      <Phone className="w-5 h-5 mr-2" />
                      Free Consultation
                    </Button>
                  </Link>
                </div>
                
                <p className="text-sm text-gray-500 text-center">
                  🔒 Secure checkout • No hidden fees • Cancel anytime
                </p>
              </div>
              
              {/* Visual Side */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-12 text-white relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Us Today?</h3>
                  
                  <div className="space-y-6">
                    {urgencyIndicators.map((indicator, index) => {
                      const IconComponent = indicator.icon
                      return (
                        <div key={index} className="flex items-start">
                          <div className="bg-white/20 rounded-lg p-3 mr-4 flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-lg">{indicator.text}</div>
                            <div className="text-blue-100 text-sm">{indicator.subtext}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  {/* Customer Rating */}
                  <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                      ))}
                      <span className="ml-2 font-semibold">5.0</span>
                    </div>
                    <p className="text-center text-blue-100">
                      &quot;Excellent service! Fast, professional, and hassle-free trademark registration.&quot;
                    </p>
                    <p className="text-center text-blue-200 text-sm mt-2">
                      - Sarah K., Tech Startup Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Bottom Trust Indicators */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["TechCorp", "StartupXYZ", "BrandCo", "InnovateLtd", "FutureTech"].map((company, index) => (
              <div key={index} className="bg-gray-200 px-6 py-3 rounded-lg">
                <span className="text-gray-600 font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}