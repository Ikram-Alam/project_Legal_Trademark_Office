import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { Package } from "@/data/services"
import Link from "next/link"

interface PricingPackagesProps {
  packages: Package[]
  title?: string
  subtitle?: string
}

export default function PricingPackages({ 
  packages, 
  title = "Choose Your Package",
  subtitle = "Select the trademark registration package that best fits your needs"
}: PricingPackagesProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="relative">
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card className={`h-full ${pkg.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''}`}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {pkg.name}
                  </CardTitle>
                  <div className="mt-4">
                    <div className="text-4xl font-bold text-gray-900">
                      ${pkg.price}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      + ${pkg.governmentFee} USPTO fees
                    </div>
                    <div className="text-2xl font-semibold text-blue-600 mt-2">
                      Total: ${pkg.totalPrice}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">{pkg.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/register" className="block">
                    <Button 
                      className={`w-full ${
                        pkg.popular 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}