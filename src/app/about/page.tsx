import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Shield, Award, Clock, CheckCircle, Star, ArrowRight, Target, Zap } from "lucide-react"
import Link from "next/link"

// Inline Badge component to avoid import issues
const Badge = ({ className = "", children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) => (
  <div className={`inline-flex items-center rounded-full border border-transparent bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium ${className}`} {...props}>
    {children}
  </div>
)

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-32 h-32 bg-white rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-blue-200 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white backdrop-blur-sm">
              Trusted Since 2010
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Protecting Brands Since 2010
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We&apos;re the leading trademark registration service trusted by over 50,000 businesses worldwide.
            </p>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "50,000+", label: "Trademarks Filed", icon: Target },
                { number: "98%", label: "Success Rate", icon: Award },
                { number: "24/7", label: "Support", icon: Clock }
              ].map((stat, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/20">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Our Story */}
      <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-10 w-32 h-32 bg-indigo-200 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-blue-100 text-blue-700">
                Our Journey
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010 by a team of experienced trademark attorneys, our mission was simple: 
                  make trademark registration accessible, affordable, and efficient for businesses of all sizes.
                </p>
                <p>
                  What started as a small law firm has grown into the nation&apos;s most trusted trademark 
                  registration service, helping entrepreneurs and established businesses protect their 
                  most valuable assets – their brands.
                </p>
                <p>
                  Today, we combine cutting-edge technology with expert legal knowledge to deliver 
                  unmatched trademark services at a fraction of traditional legal costs.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/register" className="inline-block">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <ArrowRight className="ml-2 w-5 h-5" />
                    Start Your Registration
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              {/* Enhanced Why Choose Us Card */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-full animate-pulse"></div>
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { text: "Licensed trademark attorneys on staff", color: "from-blue-500 to-cyan-500" },
                    { text: "Comprehensive trademark search included", color: "from-green-500 to-blue-500" },
                    { text: "USPTO correspondence handling", color: "from-purple-500 to-pink-500" },
                    { text: "30-day money-back guarantee", color: "from-orange-500 to-red-500" },
                    { text: "24/7 customer support", color: "from-teal-500 to-green-500" },
                    { text: "Transparent pricing with no hidden fees", color: "from-indigo-500 to-purple-500" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center group transform hover:scale-105 transition-all duration-200">
                      <div className={`w-6 h-6 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Our Values */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-36 h-36 bg-blue-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-indigo-200 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-purple-200 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-700">
              Core Principles
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These core principles guide everything we do and define who we are as a company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trust & Security",
                description: "Your data and intellectual property are protected with bank-level security.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Client-Focused",
                description: "Every decision we make puts our clients' success and satisfaction first.",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We maintain the highest standards in legal expertise and service quality.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Clock,
                title: "Efficiency",
                description: "Fast, streamlined processes that save you time and money.",
                color: "from-orange-500 to-red-500"
              }
            ].map((value, index) => (
              <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-br ${value.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gray-200 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-10 w-32 h-32 bg-blue-200 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-700">
              Expert Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced team of attorneys and trademark specialists are here to help protect your brand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founding Partner & Lead Attorney",
                experience: "15+ years trademark law",
                education: "Harvard Law School",
                description: "Specializes in complex trademark disputes and international filings.",
                color: "from-blue-500 to-purple-500"
              },
              {
                name: "Michael Chen",
                role: "Senior Trademark Attorney",
                experience: "12+ years IP law",
                education: "Stanford Law School",
                description: "Expert in technology and software trademark registrations.",
                color: "from-green-500 to-blue-500"
              },
              {
                name: "Emily Rodriguez",
                role: "Client Relations Director",
                experience: "10+ years customer service",
                education: "Georgetown University",
                description: "Ensures every client receives personalized, exceptional service.",
                color: "from-orange-500 to-pink-500"
              }
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className={`bg-gradient-to-br ${member.color} w-24 h-24 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl mb-4">
                    <div className="text-sm text-gray-700 space-y-1">
                      <div className="flex items-center justify-center">
                        <Award className="w-4 h-4 mr-2 text-blue-500" />
                        {member.experience}
                      </div>
                      <div className="flex items-center justify-center">
                        <Target className="w-4 h-4 mr-2 text-green-500" />
                        {member.education}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Awards & Recognition */}
      <section className="relative py-24 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-36 h-36 bg-yellow-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-200 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-red-200 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-yellow-100 text-yellow-700">
              Industry Recognition
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Industry recognition for our excellence in trademark services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                year: "2024",
                award: "Best Trademark Service",
                organization: "Legal Industry Awards",
                color: "from-yellow-500 to-orange-500"
              },
              {
                year: "2023",
                award: "Client Choice Award",
                organization: "American Bar Association",
                color: "from-orange-500 to-red-500"
              },
              {
                year: "2022",
                award: "Innovation in Legal Tech",
                organization: "LegalTech Breakthrough",
                color: "from-red-500 to-pink-500"
              },
              {
                year: "2021",
                award: "Top 50 Law Firms",
                organization: "National Law Journal",
                color: "from-pink-500 to-purple-500"
              }
            ].map((award, index) => (
              <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-br ${award.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <div className={`text-3xl font-bold mb-4 bg-gradient-to-r ${award.color} bg-clip-text text-transparent`}>
                    {award.year}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {award.award}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {award.organization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-indigo-300 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-10 left-1/3 w-28 h-28 bg-blue-400 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-white font-medium">Trusted Legal Service</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Protect Your Brand?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied clients who trust us with their trademark needs and secure your brand today.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-blue-100 text-sm">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-blue-100 text-sm">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-blue-100 text-sm">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-white">14</div>
              <div className="text-blue-100 text-sm">Years Experience</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/register" className="inline-block">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                <ArrowRight className="ml-2 w-5 h-5" />
                Start Registration Now
              </Button>
            </Link>
            <Link href="/contact" className="inline-block">
              <Button size="lg" variant="outline" className="border-2 border-white text-blue-300 hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl">
                <Users className="mr-2 w-5 h-5" />
                Contact Our Team
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-blue-100">
            <p className="text-sm">
              ✓ No hidden fees • ✓ Money-back guarantee • ✓ Expert legal review included
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}