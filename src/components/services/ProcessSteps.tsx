import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Upload, Clock, Megaphone, Award, ArrowRight, CheckCircle } from "lucide-react"
import { ProcessStep } from "@/data/services"

const iconMap = {
  search: Search,
  document: FileText,
  upload: Upload,
  clock: Clock,
  megaphone: Megaphone,
  certificate: Award
}

interface ProcessStepsProps {
  steps: ProcessStep[]
  title?: string
  subtitle?: string
}

export default function ProcessSteps({ 
  steps, 
  title = "Our Registration Process",
  subtitle = "We handle every step of the trademark registration process for you"
}: ProcessStepsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">Step-by-Step Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Horizontal Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1">
            <div className="flex items-center h-full max-w-5xl mx-auto px-24">
              {steps.map((_, index) => (
                index < steps.length - 1 && (
                  <div key={index} className="flex-1 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-green-400 mx-4"></div>
                )
              ))}
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap] || FileText
              const colors = [
                { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
                { bg: "bg-green-500", light: "bg-green-50", text: "text-green-600", border: "border-green-200" },
                { bg: "bg-purple-500", light: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
                { bg: "bg-orange-500", light: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" }
              ]
              const color = colors[index % colors.length]
              
              return (
                <div key={step.step} className="relative group">
                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-8">
                      <ArrowRight className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                  
                  <Card className={`relative bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group ${color.border} border-2`}>
                    <CardContent className="p-8 text-center">
                      {/* Step Number Circle */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className={`${color.bg} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {step.step}
                        </div>
                      </div>
                      
                      {/* Icon */}
                      <div className="mb-6 pt-6">
                        <div className={`${color.light} rounded-2xl p-4 w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-10 h-10 ${color.text}`} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {step.description}
                      </p>
                      
                      {/* Duration Badge */}
                      <div className={`${color.light} ${color.border} border rounded-full px-4 py-2 inline-flex items-center`}>
                        <Clock className={`w-4 h-4 ${color.text} mr-2`} />
                        <span className={`${color.text} font-semibold text-sm`}>
                          {step.duration}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 ${color.light} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 scale-110`}></div>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Bottom Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15K+</div>
                <div className="text-gray-600 font-medium">Trademarks Filed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Expert Support</div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-700 font-medium">
                🎯 From search to registration, we handle everything so you can focus on growing your business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}