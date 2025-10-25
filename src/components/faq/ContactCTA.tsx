import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "(806) 302-1211",
    action: "Call Now"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    detail: "Available 24/7",
    action: "Start Chat"
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "usptolegaltrademarkoffice@gmail.com",
    action: "Send Email"
  }
]

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Still Have Questions?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Our trademark experts are here to help. Contact us for personalized assistance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contactMethods.map((contact, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{contact.title}</h3>
                <p className="text-gray-600 mb-4">{contact.detail}</p>
                <Button variant="outline" size="sm">
                  {contact.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Link href="/register">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Your Trademark Registration
          </Button>
        </Link>
      </div>
    </section>
  )
}