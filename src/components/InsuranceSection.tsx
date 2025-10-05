import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Shield, CheckCircle, Clock, Award, ArrowRight, Lock, Zap, Heart } from "lucide-react"

// Inline Badge component to avoid import issues
const Badge = ({ className = "", children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) => (
  <div className={`inline-flex items-center rounded-full border border-transparent bg-green-500 text-white px-4 py-2 ${className}`} {...props}>
    {children}
  </div>
)

export default function InsuranceSection() {
  const guarantees = [
    {
      icon: Shield,
      title: "100% Money-Back Guarantee",
      description: "If we can't register your trademark, you get a full refund of our legal fees",
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "Fast Processing Guarantee", 
      description: "We guarantee to file your application within 5 business days or it's free",
      color: "text-blue-500"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every application is reviewed by licensed attorneys before filing",
      color: "text-purple-500"
    },
    {
      icon: Lock,
      title: "Secure & Confidential",
      description: "Your sensitive business information is protected with bank-level security",
      color: "text-orange-500"
    }
  ]

  const benefits = [
    "No registration, no fee - guaranteed",
    "USPTO correspondence handling included",
    "24/7 application status tracking",
    "Direct attorney consultation",
    "Trademark monitoring for 12 months",
    "Amendment and response services"
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-green-500 text-white px-4 py-2 mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Peace of Mind Promise
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete Protection with <span className="text-green-300">Trademark Insurance</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Register with confidence knowing you&apos;re backed by our comprehensive guarantee. 
            Your success is our success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 rounded-full p-3 mr-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Trademark Insurance</h3>
                  <p className="text-green-300 font-semibold">Just $49 - One-time fee</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                    <span className="text-blue-100">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-green-500/20 border border-green-300 rounded-lg p-4 mb-6">
                <p className="text-green-100 font-semibold text-center">
                  🛡️ No Registration, No Fee - 100% Guaranteed
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="flex-1">
                  <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4">
                    <Zap className="w-5 h-5 mr-2" />
                    Start Protected Registration
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-blue-300 hover:bg-white hover:text-blue-600 py-4">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <p className="text-sm text-blue-200 text-center">
              * Terms and conditions apply. See full guarantee details.
            </p>
          </div>
          
          {/* Visual Element */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center border border-white/30">
                  <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
                    <Shield className="h-24 w-24 text-white animate-pulse" />
                  </div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 animate-bounce">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-400 rounded-full p-3 animate-bounce delay-500">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-1/2 -left-8 bg-purple-500 rounded-full p-2 animate-pulse">
                <Lock className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${guarantee.color}`} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{guarantee.title}</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">{guarantee.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}