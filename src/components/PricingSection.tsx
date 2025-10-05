import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Crown, Zap, Users, Star, ArrowRight, Clock, Shield } from "lucide-react"

// Inline Badge component to avoid import issues
const Badge = ({ className = "", children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) => (
  <div className={`inline-flex items-center rounded-full border border-transparent text-white px-4 py-1 text-sm font-medium ${className}`} {...props}>
    {children}
  </div>
)

export default function PricingSection() {
  const packages = [
    {
      name: "Essential",
      icon: Users,
      targetAudience: "Individuals & Startups",
      price: 49,
      originalPrice: 99,
      usdtoFee: 350,
      color: "blue",
      badge: "Popular Choice",
      description: "Perfect for new businesses and entrepreneurs starting their trademark journey",
      features: [
        "Comprehensive trademark search",
        "7-day processing timeline", 
        "Filing prepared by specialists",
        "100% satisfaction guarantee",
        "Basic office action support",
        "6 months trademark monitoring",
        "Online application tracking"
      ],
      highlight: false
    },
    {
      name: "Professional", 
      icon: Crown,
      targetAudience: "Small & Medium Businesses",
      price: 149,
      originalPrice: 249,
      usdtoFee: 350,
      color: "green",
      badge: "Most Popular",
      description: "Comprehensive protection with enhanced support for growing businesses",
      features: [
        "Comprehensive trademark search",
        "3-day priority processing",
        "Reviewed by experienced paralegal",
        "100% satisfaction guarantee", 
        "Full office action support",
        "12 months trademark monitoring",
        "Priority customer support",
        "Domain name consultation"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      icon: Zap,
      targetAudience: "Large Corporations",
      price: 249,
      originalPrice: 399,
      usdtoFee: 350,
      color: "purple",
      badge: "Premium Service",
      description: "White-glove service with attorney review for maximum protection",
      features: [
        "Comprehensive trademark search",
        "24-48 hour express processing",
        "Full attorney review and guidance",
        "100% satisfaction guarantee",
        "Complete office action management",
        "24 months trademark monitoring",
        "Dedicated account manager",
        "International filing consultation"
      ],
      highlight: false
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">Transparent Pricing</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-blue-600">Protection Package</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Simple, transparent pricing with no hidden fees. All packages include USPTO filing 
            and our 100% satisfaction guarantee.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              <span>Fast processing</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-purple-500" />
              <span>Licensed attorneys</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon
            const colorClasses: Record<string, string> = {
              blue: "border-blue-500 bg-blue-50",
              green: "border-green-500 bg-green-50", 
              purple: "border-purple-500 bg-purple-50"
            }
            const badgeColors: Record<string, string> = {
              blue: "bg-blue-500",
              green: "bg-green-500",
              purple: "bg-purple-500"
            }
            
            return (
              <Card 
                key={index} 
                className={`relative ${pkg.highlight ? 'border-2 ' + colorClasses[pkg.color] + ' shadow-2xl scale-105' : 'border shadow-lg hover:shadow-xl'} transition-all duration-300 transform hover:-translate-y-2`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className={`${badgeColors[pkg.color]} text-white px-4 py-1 text-sm font-medium`}>
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`bg-white rounded-2xl p-4 w-20 h-20 mx-auto mb-4 shadow-md`}>
                      <IconComponent className={`w-12 h-12 text-${pkg.color}-600`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{pkg.targetAudience}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{pkg.description}</p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-gray-900">${pkg.price}</span>
                        <span className="text-lg text-gray-500 line-through">${pkg.originalPrice}</span>
                      </div>
                      <p className="text-sm text-gray-600">+ USPTO Fee ${pkg.usdtoFee} per class</p>
                      <p className="text-xs text-green-600 font-semibold mt-1">
                        Save ${pkg.originalPrice - pkg.price}!
                      </p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Link href={`/register?package=${pkg.name.toLowerCase()}`}>
                    <Button 
                      className={`w-full py-4 text-lg font-semibold ${pkg.highlight ? `bg-${pkg.color}-600 hover:bg-${pkg.color}-700` : 'bg-gray-800 hover:bg-gray-900'} transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      Get Started Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  
                  <p className="text-center text-xs text-gray-500 mt-4">
                    No setup fees • Cancel anytime
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not sure which package is right for you?
            </h3>
            <p className="text-gray-600 mb-6">
              Our trademark experts are here to help you choose the perfect protection level for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Free Consultation
                </Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
                  View FAQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}