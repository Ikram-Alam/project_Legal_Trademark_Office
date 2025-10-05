import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Calendar, Clock, Shield, Lock, Star, Users, ArrowRight, CheckCircle, Award, Zap } from "lucide-react"
import Link from "next/link"
import PageHero from "@/components/shared/PageHero"
import PricingPackages from "@/components/services/PricingPackages"
import ProcessSteps from "@/components/services/ProcessSteps"
import { renewalPackages, renewalTimeline, renewalBenefits } from "@/data/renewal"

// Inline Badge component to avoid import issues
const Badge = ({ className = "", children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) => (
  <div className={`inline-flex items-center rounded-full border border-transparent bg-green-100 text-green-700 px-4 py-2 text-sm font-medium ${className}`} {...props}>
    {children}
  </div>
)

const iconMap = {
  calendar: Calendar,
  document: Clock,
  upload: ArrowRight,
  refresh: Shield,
  shield: Shield,
  lock: Lock,
  star: Star,
  users: Users
}

export default function TrademarkRenewalPage() {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Trademark Renewal"
        subtitle="Don't lose your trademark rights. We handle all renewal filings to keep your trademark protection active."
        bgGradient="from-green-900 to-green-700"
      />

      {/* Enhanced Important Notice */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-orange-300 to-red-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-orange-200 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="border-2 border-yellow-300 bg-white/90 backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    ⚠️ Critical Renewal Deadlines
                  </h3>
                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl mb-6">
                    <p className="text-lg text-gray-800 font-medium mb-4">
                      Trademark renewals must be filed at specific times or your trademark will be abandoned. 
                      Don&apos;t risk losing years of brand building and legal protection.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-2"></div>
                          <strong className="text-gray-900">5th-6th Year</strong>
                        </div>
                        <p className="text-sm text-gray-700">Section 8 & 15 filings required</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-2"></div>
                          <strong className="text-gray-900">Every 10 Years</strong>
                        </div>
                        <p className="text-sm text-gray-700">Section 8 & 9 renewal filings</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-2"></div>
                          <strong className="text-gray-900">Grace Period</strong>
                        </div>
                        <p className="text-sm text-gray-700">6-month grace period with additional fees</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="inline-block">
                      <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                        <Clock className="mr-2 h-5 w-5" />
                        Check My Renewal Date
                      </Button>
                    </Link>
                    <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-green-700 font-medium">Free Deadline Check</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-green-200 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-10 w-32 h-32 bg-emerald-200 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-teal-200 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700">
              Trademark Protection
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Renew Your Trademark?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trademark renewal maintains your exclusive rights and strengthens your legal protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renewalBenefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap] || Shield
              const colors = [
                'from-green-500 to-emerald-500',
                'from-emerald-500 to-teal-500', 
                'from-teal-500 to-cyan-500',
                'from-cyan-500 to-blue-500'
              ]
              return (
                <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className={`bg-gradient-to-br ${colors[index % colors.length]} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <ProcessSteps 
        steps={renewalTimeline} 
        title="Renewal Process Timeline"
        subtitle="We handle every aspect of your trademark renewal process"
      />

      {/* Enhanced Renewal Requirements */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-36 h-36 bg-blue-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-indigo-200 rounded-full animate-bounce"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-blue-100 text-blue-700">
                Requirements Guide
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Renewal Requirements
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                To successfully renew your trademark, you must demonstrate continued use 
                in commerce and meet all USPTO requirements.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Proof of Use",
                    description: "Current specimens showing how the trademark is used in commerce",
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    title: "Declaration of Use",
                    description: "Section 8 affidavit confirming continued use of the trademark",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Renewal Application",
                    description: "Section 9 application to renew registration (10-year renewals)",
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    title: "Incontestability",
                    description: "Section 15 declaration for enhanced protection (5-6 year filing)",
                    color: "from-orange-500 to-red-500"
                  }
                ].map((requirement, index) => (
                  <div key={index} className="group flex items-start transform hover:scale-105 transition-all duration-300">
                    <div className={`bg-gradient-to-br ${requirement.color} w-12 h-12 rounded-full flex items-center justify-center mr-6 mt-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {requirement.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{requirement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Floating Calculator Card */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Renewal Deadline Calculator
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-center">
                  Don&apos;t miss your renewal deadline. Enter your registration date to see when 
                  your next filing is due.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Registration Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <Calendar className="mr-2 w-5 h-5" />
                    Calculate Renewal Dates
                  </Button>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    We&apos;ll show you exactly when your Section 8, Section 15, and Section 9 filings are due.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingPackages 
        packages={renewalPackages}
        title="Renewal Service Packages"
        subtitle="Choose the renewal service that best fits your needs"
      />

      {/* Enhanced CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-300 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-10 left-1/3 w-28 h-28 bg-teal-300 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-white font-medium">Trademark Protection Service</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don&apos;t Risk Losing Your Trademark
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our renewal service ensures your trademark stays protected. Get started today and maintain your valuable brand rights.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-green-100 text-sm">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">24-48h</div>
              <div className="text-green-100 text-sm">Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">$99</div>
              <div className="text-green-100 text-sm">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-green-100 text-sm">Support</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/register" className="inline-block">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                <ArrowRight className="ml-2 w-5 h-5" />
                Start Renewal Process
              </Button>
            </Link>
            <Link href="/contact" className="inline-block">
              <Button size="lg" variant="outline" className="border-2 border-white text-green-300 hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl">
                <Clock className="mr-2 w-5 h-5" />
                Check Renewal Status
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-green-100">
            <p className="text-sm">
              ✓ No hidden fees • ✓ Money-back guarantee • ✓ Expert legal review included
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}