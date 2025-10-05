"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, RefreshCw, MessageCircle } from "lucide-react"
import PageHero from "@/components/shared/PageHero"
import FAQSearch from "@/components/faq/FAQSearch"
import FAQItem from "@/components/faq/FAQItem"
import { faqsData, faqCategories } from "@/data/faq"

// Inline Badge component to avoid import issues
const Badge = ({ className = "", children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) => (
  <div className={`inline-flex items-center rounded-full border border-transparent bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium ${className}`} {...props}>
    {children}
  </div>
)

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredFAQs = useMemo(() => {
    return faqsData.filter(faq => {
      const matchesSearch = searchTerm === "" || 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="min-h-screen">
      <PageHero 
        title="Frequently Asked Questions"
        subtitle="Find answers to common trademark questions. Can't find what you're looking for? Contact our experts."
      />

      <FAQSearch
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        categories={faqCategories}
        resultsCount={filteredFAQs.length}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
      />

      {/* Enhanced FAQ Content */}
      <section className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-10 w-32 h-32 bg-indigo-200 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-purple-200 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredFAQs.length === 0 ? (
            <Card className="text-center p-12 bg-white/80 backdrop-blur-sm shadow-2xl border-0 transform hover:scale-105 transition-all duration-300">
              <CardContent>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No results found
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Try adjusting your search terms or category filter, or reach out to our experts directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => {setSearchTerm(""); setSelectedCategory("all")}}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Clear Filters
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Ask an Expert
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div>
              {/* Results Header */}
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-blue-100 text-blue-700">
                  {filteredFAQs.length} Results Found
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Browse through our comprehensive collection of trademark-related questions and answers
                </p>
              </div>

              {/* Enhanced FAQ Items */}
              <div className="space-y-6">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="transform hover:scale-105 transition-all duration-300">
                    <FAQItem faq={faq} />
                  </div>
                ))}
              </div>

              {/* Helpful Links */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Still have questions?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our expert team is here to help with personalized answers to your trademark questions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact Support
                    </Button>
                    <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}