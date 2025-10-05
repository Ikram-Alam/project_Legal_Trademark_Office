import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Clock, Users, ArrowRight, Star, Award, Search, Zap, FileCheck } from "lucide-react"
import Link from "next/link"
import PageHero from "@/components/shared/PageHero"
import PricingPackages from "@/components/services/PricingPackages"
import ProcessSteps from "@/components/services/ProcessSteps"
import Testimonials from "@/components/services/Testimonials"
import { trademarkPackages, registrationProcess, testimonials } from "@/data/services"

// Inline Badge component to avoid import issues
const Badge = ({ className = "", children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) => (
  <div className={`inline-flex items-center rounded-full border border-transparent bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium ${className}`} {...props}>
    {children}
  </div>
)

export default function TrademarkRegistrationPage() {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Trademark Registration"
        subtitle="Protect your brand with professional trademark registration services. Fast, affordable, and backed by experienced attorneys."
      />

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <Award className="w-4 h-4 mr-2" />
              Legal Protection Benefits
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Register Your <span className="text-blue-600">Trademark?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trademark registration provides exclusive legal protection and builds lasting value for your business brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Legal Protection",
                description: "Exclusive nationwide rights to use your trademark in your business category.",
                color: "blue"
              },
              {
                icon: CheckCircle,
                title: "Brand Security",
                description: "Prevent competitors from using confusingly similar marks that could damage your brand.",
                color: "green"
              },
              {
                icon: Users,
                title: "Customer Trust",
                description: "Build consumer confidence with a federally registered trademark symbol ®.",
                color: "purple"
              },
              {
                icon: Clock,
                title: "Long-term Value",
                description: "Trademarks can last forever with proper maintenance and renewal filings.",
                color: "orange"
              }
            ].map((benefit, index) => (
              <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className={`bg-${benefit.color}-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className={`w-10 h-10 text-${benefit.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={registrationProcess} />

      {/* What You Can Trademark */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge className="bg-green-100 text-green-700">
                  <FileCheck className="w-4 h-4 mr-2" />
                  Eligible Trademarks
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Can You <span className="text-green-600">Trademark?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Almost any distinctive element that identifies your business can be trademarked, 
                provided it meets USPTO requirements and isn&apos;t already in use.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Business names",
                  "Product names", 
                  "Logos & designs",
                  "Slogans & taglines",
                  "Domain names",
                  "App names",
                  "Unique colors",
                  "Distinctive sounds"
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tip</h4>
                <p className="text-blue-800">
                  The more distinctive and unique your mark, the stronger your trademark protection will be.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-white shadow-2xl border-0 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                      <Search className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Trademark Search</h3>
                    <p className="text-gray-600">
                      Before filing, we&apos;ll search existing trademarks to ensure your mark is available. 
                      This comprehensive search is included with all our packages.
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      "USPTO database search",
                      "Common law trademark search", 
                      "Domain name availability",
                      "Social media handle check"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-blue-900 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/register">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      <Search className="mr-2 w-5 h-5" />
                      Start Free Search
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  
                  <div className="mt-6 text-center">
                    <div className="flex justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">Trusted by 120,000+ businesses</p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-lg animate-bounce">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 rounded-full p-3 shadow-lg animate-pulse">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingPackages packages={trademarkPackages} />

      <Testimonials testimonials={testimonials} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-green-500 text-white mb-6">
            <Star className="w-4 h-4 mr-2" />
            Join 120,000+ Protected Businesses
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-green-300">Protect Your Brand?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses who trust us with their trademark registration. 
            Start your protection journey today.
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-300">98%</div>
              <div className="text-blue-200 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-300">24-48h</div>
              <div className="text-blue-200 text-sm">Fast Filing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-300">$49</div>
              <div className="text-blue-200 text-sm">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-300">24/7</div>
              <div className="text-blue-200 text-sm">Support</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Zap className="mr-2 w-5 h-5" />
                Start Registration Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-blue-300 hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 text-lg">
                Speak with an Attorney
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-blue-200 mt-6">
            🔒 Secure process • No hidden fees • 100% money-back guarantee
          </p>
        </div>
      </section>
    </div>
  )
}