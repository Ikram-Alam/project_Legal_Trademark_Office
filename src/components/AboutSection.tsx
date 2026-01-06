import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Clock, Shield } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose USPTO Legal Trademark Office?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We have been helping businesses protect their intellectual property for over 15 years. 
            Our experienced team of attorneys and specialists are committed to providing exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Expert Attorneys</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Licensed attorneys with years of experience in intellectual property law.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">120,000+ Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Trusted by over 120,000 businesses worldwide for their trademark needs.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Fast Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Quick turnaround times with processing as fast as 24-48 hours.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-xl">100% Guarantee</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We stand behind our work with a 100% satisfaction guarantee.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}