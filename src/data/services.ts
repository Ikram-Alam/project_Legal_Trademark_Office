export interface Package {
  id: string
  name: string
  price: number
  description: string
  popular: boolean
  features: string[]
  governmentFee: number
  totalPrice: number
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  duration: string
  icon: string
}

export const trademarkPackages: Package[] = [
  {
    id: "basic",
    name: "Basic",
    price: 49,
    description: "Essential trademark registration",
    popular: false,
    features: [
      "Trademark name/logo registration",
      "USPTO filing (government fees extra)",
      "Basic trademark search",
      "Application preparation",
      "Email support",
      "Standard processing"
    ],
    governmentFee: 325,
    totalPrice: 374
  },
  {
    id: "standard",
    name: "Standard",
    price: 149,
    description: "Most popular choice with attorney review",
    popular: true,
    features: [
      "Everything in Basic",
      "Attorney review before filing",
      "Comprehensive trademark search",
      "Priority customer support",
      "Application tracking",
      "USPTO correspondence handling",
      "30-day money back guarantee"
    ],
    governmentFee: 325,
    totalPrice: 474
  },
  {
    id: "premium",
    name: "Premium",
    price: 249,
    description: "Full-service with legal protection",
    popular: false,
    features: [
      "Everything in Standard",
      "Dedicated attorney assigned",
      "Cease & desist letter template",
      "Trademark monitoring (1 year)",
      "Priority USPTO filing",
      "Phone consultation",
      "Expedited processing",
      "Legal protection package"
    ],
    governmentFee: 325,
    totalPrice: 574
  }
]

export const registrationProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Trademark Search",
    description: "We conduct a comprehensive search of existing trademarks to ensure your mark is available and won't conflict with existing registrations.",
    duration: "1-2 days",
    icon: "search"
  },
  {
    step: 2,
    title: "Application Preparation",
    description: "Our attorneys prepare your trademark application with proper classification, description, and supporting documentation.",
    duration: "2-3 days",
    icon: "document"
  },
  {
    step: 3,
    title: "USPTO Filing",
    description: "We file your application with the United States Patent and Trademark Office and provide you with your filing receipt.",
    duration: "Same day",
    icon: "upload"
  },
  {
    step: 4,
    title: "Examination Period",
    description: "USPTO examines your application for compliance with trademark law. We handle any office actions or objections.",
    duration: "3-6 months",
    icon: "clock"
  },
  {
    step: 5,
    title: "Publication",
    description: "If approved, your trademark is published for opposition. Third parties have 30 days to oppose your registration.",
    duration: "30 days",
    icon: "megaphone"
  },
  {
    step: 6,
    title: "Registration",
    description: "If no opposition is filed, your trademark is registered and you receive your official registration certificate.",
    duration: "2-3 months",
    icon: "certificate"
  }
]

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Tech Startup Inc.",
    role: "CEO",
    content: "The process was seamless and professional. They handled everything from search to registration, and I received my trademark certificate in 8 months.",
    rating: 5,
    image: "/testimonial1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Chen's Restaurant",
    role: "Owner",
    content: "Excellent service! They found a potential conflict during the search that saved me from legal issues later. Highly recommend their comprehensive approach.",
    rating: 5,
    image: "/testimonial2.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Fashion Forward LLC",
    role: "Founder",
    content: "Their attorney review caught issues I never would have noticed. The Premium package was worth every penny for the peace of mind.",
    rating: 5,
    image: "/testimonial3.jpg"
  }
]