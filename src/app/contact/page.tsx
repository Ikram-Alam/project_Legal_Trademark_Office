"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Shield, Zap } from "lucide-react"

// Inline Badge component to avoid import issues
const Badge = ({ className = "", children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) => (
  <div className={`inline-flex items-center rounded-full border border-transparent bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium ${className}`} {...props}>
    {children}
  </div>
)

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general"
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general"
      })
    }, 3000)
  }

  const isFormValid = () => {
    return formData.name && formData.email && formData.subject && formData.message
  }

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
              Expert Legal Support
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Contact Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get expert trademark advice from our licensed attorneys. We&apos;re here to help protect your brand.
            </p>
            
            {/* Quick Contact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { icon: Zap, label: "2 Hour Response", subtext: "During business hours" },
                { icon: Shield, label: "Licensed Attorneys", subtext: "Expert legal advice" },
                { icon: Clock, label: "24/7 Support", subtext: "Always available" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="text-lg font-bold text-white mb-1">{stat.label}</div>
                  <div className="text-blue-200 text-sm">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Methods */}
      <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-10 w-32 h-32 bg-green-200 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-purple-200 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-700">
              Multiple Ways to Connect
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose your preferred method to get in touch with our expert team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                primary: "(555) 123-4567",
                secondary: "Mon-Fri 8AM-8PM EST",
                color: "from-blue-500 to-cyan-500",
                bgColor: "blue"
              },
              {
                icon: Mail,
                title: "Email Us",
                primary: "hello@trademarkoffice.com",
                secondary: "Response within 2 hours",
                color: "from-green-500 to-emerald-500",
                bgColor: "green"
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                primary: "Chat with an expert",
                secondary: "Available 24/7",
                color: "from-purple-500 to-pink-500",
                bgColor: "purple"
              }
            ].map((method, index) => (
              <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-br ${method.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <method.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    {method.primary}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {method.secondary}
                  </p>
                  <div className="mt-4">
                    <Button className={`bg-gradient-to-r ${method.color} hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-medium transform hover:scale-105 transition-all duration-300`}>
                      Contact Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <div>
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Fill out the form below and we&apos;ll get back to you within 2 hours during business hours.
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for contacting us. We&apos;ll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="inquiryType" className="text-gray-700 font-medium">Type of Inquiry</Label>
                        <select
                          id="inquiryType"
                          className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-3 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          value={formData.inquiryType}
                          onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                        >
                          <option value="general">General Question</option>
                          <option value="trademark">Trademark Registration</option>
                          <option value="renewal">Trademark Renewal</option>
                          <option value="revival">Trademark Revival</option>
                          <option value="consultation">Legal Consultation</option>
                          <option value="support">Customer Support</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="mt-2 border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="mt-2 border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="mt-2 border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                        <div>
                          <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                          <Input
                            id="subject"
                            placeholder="Brief subject line"
                            value={formData.subject}
                            onChange={(e) => handleInputChange('subject', e.target.value)}
                            className="mt-2 border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Please describe your question or how we can help you..."
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="mt-2 h-32 border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                        disabled={!isFormValid()}
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Office Information */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0 bg-white">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-t-lg">
                  <CardTitle className="text-xl flex items-center text-gray-900">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-3">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    Office Locations
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {[
                    {
                      name: "Headquarters",
                      address: "123 Legal Plaza, Suite 500",
                      city: "New York, NY 10001",
                      phone: "(555) 123-4567",
                      hours: "Mon-Fri 8AM-8PM EST",
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      name: "West Coast Office",
                      address: "456 Innovation Drive, Floor 10",
                      city: "San Francisco, CA 94105",
                      phone: "(555) 987-6543",
                      hours: "Mon-Fri 8AM-6PM PST",
                      color: "from-green-500 to-teal-500"
                    }
                  ].map((office, index) => (
                    <div key={index} className="group border-l-4 border-transparent hover:border-blue-500 pl-6 py-4 rounded-r-lg bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                      <div className="flex items-start">
                        <div className={`w-3 h-3 bg-gradient-to-br ${office.color} rounded-full mr-3 mt-2`}></div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{office.name}</h4>
                          <div className="space-y-2 text-sm text-gray-600">
                            <p className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                              {office.address}, {office.city}
                            </p>
                            <p className="flex items-center">
                              <Phone className="w-4 h-4 mr-2 text-green-500" />
                              {office.phone}
                            </p>
                            <p className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-orange-500" />
                              {office.hours}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-white">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-lg">
                  <CardTitle className="text-xl text-gray-900">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      {
                        question: "How long does trademark registration take?",
                        answer: "Typically 6-12 months from filing to approval.",
                        color: "from-blue-500 to-cyan-500"
                      },
                      {
                        question: "Do you offer free consultations?",
                        answer: "Yes, we offer 15-minute free consultations for new clients.",
                        color: "from-green-500 to-emerald-500"
                      },
                      {
                        question: "What if my trademark is rejected?",
                        answer: "We handle all USPTO correspondence and rejections at no extra cost.",
                        color: "from-purple-500 to-pink-500"
                      }
                    ].map((faq, index) => (
                      <div key={index} className="group p-4 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
                        <div className="flex items-start">
                          <div className={`w-6 h-6 bg-gradient-to-br ${faq.color} rounded-full flex items-center justify-center mr-3 mt-1 group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white text-xs font-bold">?</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{faq.question}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      Have more questions? Check our{" "}
                      <a href="/faq" className="text-blue-600 hover:underline font-medium">
                        comprehensive FAQ page
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-gradient-to-br from-red-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center text-gray-900">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    Emergency Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Need urgent trademark assistance? Our emergency hotline is available 24/7 for existing clients.
                  </p>
                  <div className="bg-white border-2 border-red-200 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center text-red-700 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-lg">Emergency: (555) 911-MARK</span>
                    </div>
                    <p className="text-sm text-red-600 ml-11">
                      For urgent trademark matters only
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}