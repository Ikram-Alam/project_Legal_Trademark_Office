"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { FAQ } from "@/data/faq"

interface FAQItemProps {
  faq: FAQ
}

export default function FAQItem({ faq }: FAQItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 pr-4">
              {faq.question}
            </h3>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
            )}
          </div>
        </button>
        
        {isExpanded && (
          <div className="px-6 pb-6">
            <div className="border-t pt-4">
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {faq.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}