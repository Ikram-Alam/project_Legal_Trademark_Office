import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface FAQSearchProps {
  searchTerm: string
  selectedCategory: string
  categories: Array<{ id: string; name: string }>
  resultsCount: number
  onSearchChange: (value: string) => void
  onCategoryChange: (value: string) => void
}

export default function FAQSearch({
  searchTerm,
  selectedCategory,
  categories,
  resultsCount,
  onSearchChange,
  onCategoryChange
}: FAQSearchProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-sm p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search questions, answers, or topics..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-full h-12 border border-gray-300 rounded-md px-3 bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {searchTerm && (
            <div className="mt-4 text-sm text-gray-600">
              Found {resultsCount} result{resultsCount !== 1 ? 's' : ''} for &quot;{searchTerm}&quot;
            </div>
          )}
        </Card>
      </div>
    </section>
  )
}