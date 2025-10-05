import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, Users, BookOpen, Scale, ArrowRight } from "lucide-react"
import Link from "next/link"

// Inline Badge component to avoid import issues
const Badge = ({ className = "", children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) => (
  <div className={`inline-flex items-center rounded-full border border-transparent bg-purple-100 text-purple-700 px-2.5 py-0.5 text-xs font-semibold ${className}`} {...props}>
    {children}
  </div>
)

export default function AttorneysSection() {
  const attorneys = [
    {
      name: "Ksean Williams",
      title: "Senior IP Attorney & Managing Partner",
      experience: "15+ years",
      education: "Harvard Law School, J.D.",
      specialization: "Trademark Law & IP Strategy",
      achievements: ["Top 40 Under 40 IP Lawyers", "USPTO Registered Attorney"],
      cases: "5000+",
      rating: 5,
      bio: "Ksean leads our trademark practice with expertise spanning from startup guidance to Fortune 500 IP strategy. His innovative approach has helped thousands of businesses secure their intellectual property rights.",
      avatar: "👨‍💼"
    },
    {
      name: "James Clarke", 
      title: "Senior Trademark Attorney",
      experience: "12+ years",
      education: "Stanford Law School, J.D.",
      specialization: "International Trademark Law",
      achievements: ["International Bar Association Member", "Trademark Prosecution Leader"],
      cases: "3500+",
      rating: 5,
      bio: "James specializes in complex international trademark portfolios and has successfully navigated challenging opposition proceedings for clients across 40+ countries.",
      avatar: "👨‍⚖️"
    },
    {
      name: "Sophia Green",
      title: "IP Attorney & Startup Specialist", 
      experience: "10+ years",
      education: "UCLA Law School, J.D.",
      specialization: "Startup & Tech Trademarks",
      achievements: ["TechCrunch Legal Expert", "Startup Advisor"],
      cases: "2800+",
      rating: 5,
      bio: "Sophia focuses on helping startups and tech companies build strong trademark foundations from day one. Her proactive approach prevents costly legal issues down the road.",
      avatar: "👩‍💼"
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Scale className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">Expert Legal Team</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Licensed Attorneys</span> with You Every Step
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Our experienced legal team has successfully represented thousands of businesses, 
            from innovative startups to established corporations, protecting their most valuable assets.
          </p>
          
          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">11K+</div>
              <div className="text-sm text-gray-600">Cases Handled</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">40+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                {/* Avatar & Header */}
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                    {attorney.avatar}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{attorney.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{attorney.title}</p>
                  
                  {/* Rating */}
                  <div className="flex justify-center items-center gap-1 mb-4">
                    {[...Array(attorney.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">5.0 (200+ reviews)</span>
                  </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="font-bold text-blue-600">{attorney.experience}</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="font-bold text-green-600">{attorney.cases}</div>
                    <div className="text-xs text-gray-600">Cases Won</div>
                  </div>
                </div>

                {/* Education & Specialization */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <BookOpen className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{attorney.education}</div>
                      <div className="text-xs text-gray-600">{attorney.specialization}</div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {attorney.achievements.map((achievement, achievementIndex) => (
                      <Badge key={achievementIndex} variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                        <Award className="w-3 h-3 mr-1" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {attorney.bio}
                </p>

                {/* CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      Available for consultation
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Work with Our Expert Team?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get personalized guidance from our licensed attorneys. We&apos;ll review your case 
              and provide expert recommendations for your trademark protection strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </Link>
              <Link href="/register">
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Application
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}