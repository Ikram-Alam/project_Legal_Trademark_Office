import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Users, CheckCircle, ArrowDown, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function ProcessSection() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Comprehensive Search",
      description: "Our legal experts conduct an in-depth trademark search to ensure your mark is available and identify potential conflicts.",
      features: ["Federal database search", "State trademark search", "Common law search", "Domain availability check"],
      duration: "24-48 hours",
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      number: "02", 
      title: "Professional Filing",
      description: "We prepare and file your trademark application with precision, ensuring all requirements are met.",
      features: ["Expert application preparation", "USPTO filing", "Classification guidance", "Evidence compilation"],
      duration: "3-5 business days",
      color: "bg-green-500"
    },
    {
      icon: Users,
      number: "03",
      title: "Ongoing Support",
      description: "Our team monitors your application and handles all USPTO correspondence until registration.",
      features: ["Application monitoring", "Office action responses", "Publication for opposition", "Registration certificate"],
      duration: "8-12 months",
      color: "bg-purple-500"
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">Proven Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Register Your Trademark in <span className="text-blue-600">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process makes trademark registration simple and stress-free. 
            Join thousands of businesses who trust our expert legal team.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center h-1">
              <div className="w-1/3 h-0.5 bg-gradient-to-r from-blue-200 to-blue-400"></div>
              <div className="w-1/3 h-0.5 bg-gradient-to-r from-green-200 to-green-400"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="relative">
                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-8">
                      <ArrowDown className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                  
                  <Card className="relative bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                    <CardContent className="p-8">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-8">
                        <div className={`${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg`}>
                          {step.number}
                        </div>
                      </div>
                      
                      {/* Icon */}
                      <div className="mb-6 pt-4">
                        <div className="bg-gray-50 rounded-2xl p-4 w-20 h-20 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                          <IconComponent className="w-10 h-10 text-blue-600" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Duration */}
                      <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-blue-600 font-semibold">Timeline: {step.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Our expert team is standing by to help protect your brand. 
              Start your trademark registration today with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start My Application
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
}