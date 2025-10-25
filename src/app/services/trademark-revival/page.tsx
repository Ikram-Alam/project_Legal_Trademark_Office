import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, X, Clock, Shield, ArrowRight, AlertTriangle, Zap, Target, Timer, Award } from "lucide-react"
import Link from "next/link"
import PageHero from "@/components/shared/PageHero"
import PricingPackages from "@/components/services/PricingPackages"
import ProcessSteps from "@/components/services/ProcessSteps"
import { revivalPackages, revivalTimeline, revivalReasons } from "@/data/revival"

// Inline Badge component to avoid import issues
const Badge = ({ className = "", children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) => (
  <div className={`inline-flex items-center rounded-full border border-transparent bg-orange-100 text-orange-700 px-4 py-2 text-sm font-medium ${className}`} {...props}>
    {children}
  </div>
)

export default function TrademarkRevivalPage() {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Trademark Revival"
        subtitle="Lost your trademark due to missed deadlines? Our experienced attorneys can help revive abandoned trademarks through proper legal channels."
        bgGradient="from-orange-900 to-orange-700"
      />

      {/* Enhanced Urgency Notice */}
      <section className="relative py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-red-200 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="border-2 border-red-300 bg-white/90 backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                    <AlertCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    🚨 Time-Sensitive: Revival Windows Are Limited
                  </h3>
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-xl mb-6">
                    <p className="text-lg text-gray-800 font-medium mb-4">
                      Trademark revival becomes more difficult and expensive over time. Act quickly to 
                      maximize your chances of successful revival.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                        <div className="flex items-center mb-2">
                          <Timer className="w-5 h-5 text-green-600 mr-2" />
                          <strong className="text-gray-900">Within 6 months</strong>
                        </div>
                        <p className="text-sm text-gray-700">Petition to revive with reasonable explanation</p>
                        <div className="mt-2 text-xs text-green-600 font-medium">Higher Success Rate</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                        <div className="flex items-center mb-2">
                          <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                          <strong className="text-gray-900">After 6 months</strong>
                        </div>
                        <p className="text-sm text-gray-700">Must prove unintentional delay or extraordinary circumstances</p>
                        <div className="mt-2 text-xs text-red-600 font-medium">More Complex Process</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="inline-block">
                      <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                        <Zap className="mr-2 h-5 w-5" />
                        Get Urgent Assessment
                      </Button>
                    </Link>
                    <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-green-700 font-medium">Free Case Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced What is Trademark Revival */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-orange-200 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-10 w-32 h-32 bg-red-200 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-yellow-200 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-orange-100 text-orange-700">
                Revival Process
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What is Trademark Revival?
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Trademark revival is the legal process of restoring an abandoned trademark registration. 
                If you missed renewal deadlines or failed to respond to USPTO actions, your trademark 
                may have been abandoned.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our experienced attorneys can petition the USPTO to revive your trademark if you meet 
                specific legal requirements and can demonstrate valid reasons for the abandonment.
              </p>
              
              <div className="space-y-4">
                {[
                  { text: "Restore exclusive trademark rights", color: "from-green-500 to-emerald-500" },
                  { text: "Prevent competitors from using your mark", color: "from-blue-500 to-cyan-500" },
                  { text: "Maintain brand recognition and value", color: "from-purple-500 to-pink-500" },
                  { text: "Avoid starting registration from scratch", color: "from-orange-500 to-red-500" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center transform hover:scale-105 transition-all duration-300">
                    <div className={`w-6 h-6 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mr-4 shadow-lg`}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Enhanced Success Factors Card */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full animate-pulse"></div>
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Revival Success Factors
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      factor: "Time Since Abandonment",
                      impact: "Critical - Earlier is better",
                      color: "from-red-500 to-orange-500",
                      urgency: "high"
                    },
                    {
                      factor: "Reason for Abandonment", 
                      impact: "Must be unintentional",
                      color: "from-orange-500 to-yellow-500",
                      urgency: "medium"
                    },
                    {
                      factor: "Continued Use",
                      impact: "Ongoing commercial use helps",
                      color: "from-yellow-500 to-green-500",
                      urgency: "medium"
                    },
                    {
                      factor: "Documentation",
                      impact: "Strong evidence required",
                      color: "from-green-500 to-blue-500",
                      urgency: "low"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`border-l-4 bg-gradient-to-r ${item.color} border-transparent pl-4 py-3 rounded-r-lg transform hover:scale-105 transition-all duration-200`}>
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded">
                        <div className="font-bold text-gray-900 flex items-center">
                          {item.urgency === 'high' && <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />}
                          {item.urgency === 'medium' && <Clock className="w-4 h-4 text-orange-500 mr-2" />}
                          {item.urgency === 'low' && <CheckCircle className="w-4 h-4 text-green-500 mr-2" />}
                          {item.factor}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{item.impact}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Eligible Reasons */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-36 h-36 bg-orange-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-green-200 rounded-full animate-bounce"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-orange-100 text-orange-700">
              Eligibility Criteria
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Eligible Revival Reasons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The USPTO will only revive trademarks under specific circumstances. Review these 
              criteria to understand if your case qualifies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {revivalReasons.map((reason, index) => (
              <Card 
                key={index} 
                className={`group transform hover:scale-105 transition-all duration-300 border-0 shadow-lg ${
                  reason.eligible 
                    ? 'bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-green-200' 
                    : 'bg-gradient-to-br from-red-50 to-pink-50 hover:shadow-red-200'
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 mr-6 w-12 h-12 rounded-full flex items-center justify-center ${
                      reason.eligible 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
                        : 'bg-gradient-to-br from-red-500 to-pink-500'
                    } shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {reason.eligible ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <X className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-3 ${
                        reason.eligible ? 'text-green-800' : 'text-red-800'
                      } group-hover:scale-105 transition-transform duration-300`}>
                        {reason.title}
                      </h3>
                      <p className={`mb-4 leading-relaxed ${
                        reason.eligible ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {reason.description}
                      </p>
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${
                        reason.eligible 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {reason.eligible ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Eligible for Revival
                          </>
                        ) : (
                          <>
                            <X className="w-4 h-4 mr-2" />
                            Not Eligible
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps 
        steps={revivalTimeline} 
        title="Revival Process"
        subtitle="Our systematic approach to trademark revival"
      />

      {/* Enhanced Costs and Timeline */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-orange-200 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-10 w-32 h-32 bg-yellow-200 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-red-200 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-orange-100 text-orange-700">
              Investment & Timeline
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revival Costs & Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding the investment required for trademark revival
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Timeline",
                highlight: "3-5 months",
                details: [
                  "Initial Review: 1-2 days",
                  "Petition Filing: 3-5 days", 
                  "USPTO Review: 2-4 months",
                  "Total Process: 3-5 months"
                ],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Award,
                title: "Success Rate",
                highlight: "75%",
                details: [
                  "Average success rate for",
                  "qualified revival cases",
                  "(varies by circumstances)",
                  "Higher success within 6 months"
                ],
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Shield,
                title: "Investment",
                highlight: "$2,499-$3,299",
                details: [
                  "Attorney Fees: $899-$1,699",
                  "USPTO Fees: $1,600",
                  "Total: $2,499-$3,299",
                  "(Much less than new registration)"
                ],
                color: "from-orange-500 to-red-500"
              }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="group text-center transform hover:scale-105 transition-all duration-300 bg-white shadow-2xl border-0 hover:shadow-orange-200">
                  <CardContent className="p-8 relative">
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full animate-bounce opacity-20"></div>
                    <div className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>
                      {item.highlight}
                    </div>
                    <div className="space-y-2 text-gray-600">
                      {item.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="text-sm leading-relaxed">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <PricingPackages 
        packages={revivalPackages}
        title="Revival Service Packages"
        subtitle="Professional legal services to restore your abandoned trademark"
      />

      {/* Enhanced Warning Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-300 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Card className="border-2 border-yellow-400 bg-white/90 backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-10 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  ⚡ Act Now - Time is Critical
                </h3>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl mb-8">
                <p className="text-xl text-gray-800 font-medium mb-4 leading-relaxed">
                  The longer you wait, the harder it becomes to revive your trademark. 
                  Third parties may file for your abandoned mark, making revival impossible.
                </p>
                
                {/* Urgency Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-red-600">6 months</div>
                    <div className="text-sm text-gray-700">Optimal revival window</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-orange-600">24-48h</div>
                    <div className="text-sm text-gray-700">Our response time</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-green-600">Free</div>
                    <div className="text-sm text-gray-700">Case assessment</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="inline-block">
                  <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl">
                    <Zap className="mr-2 w-5 h-5" />
                    Get Free Case Assessment
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-orange-600 text-orange-700 hover:bg-orange-100 px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <Timer className="mr-2 w-5 h-5" />
                  Call (806) 302-1211
                </Button>
              </div>
              
              <div className="mt-6 text-gray-600">
                <p className="text-sm">
                  ✓ No obligation consultation • ✓ Same-day response • ✓ Expert legal advice
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-yellow-300 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-10 left-1/3 w-28 h-28 bg-red-300 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-white font-medium">Trademark Revival Experts</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don&apos;t Give Up on Your Trademark
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our revival experts have successfully restored hundreds of abandoned trademarks. 
              Let us evaluate your case today and fight for your brand rights.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">75%</div>
              <div className="text-orange-100 text-sm">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-orange-100 text-sm">Revivals Filed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-orange-100 text-sm">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">Free</div>
              <div className="text-orange-100 text-sm">Assessment</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="inline-block">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                <ArrowRight className="ml-2 w-5 h-5" />
                Start Revival Process
              </Button>
            </Link>
            <Link href="/contact" className="inline-block">
              <Button size="lg" variant="outline" className="border-2 border-white text-orange-300 hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl">
                <Clock className="mr-2 w-5 h-5" />
                Speak with Attorney
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-orange-100">
            <p className="text-sm">
              ✓ No hidden fees • ✓ Money-back guarantee • ✓ Expert legal review included
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}