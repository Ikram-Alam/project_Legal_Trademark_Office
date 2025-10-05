export const renewalTimeline = [
  {
    step: 1,
    title: "5th-6th Year Filing",
    description: "File Section 8 Declaration of Use and Section 15 Declaration of Incontestability between the 5th and 6th year after registration.",
    duration: "Required",
    icon: "calendar"
  },
  {
    step: 2,
    title: "Document Review",
    description: "Our attorneys review your current trademark usage and prepare the necessary renewal documentation with proof of continued use.",
    duration: "2-3 days",
    icon: "document"
  },
  {
    step: 3,
    title: "USPTO Filing",
    description: "We file your renewal documents with the USPTO and monitor the status throughout the process.",
    duration: "Same day",
    icon: "upload"
  },
  {
    step: 4,
    title: "10-Year Renewal",
    description: "File Section 8 and Section 9 renewal every 10 years thereafter to maintain your trademark protection.",
    duration: "Every 10 years",
    icon: "refresh"
  }
]

export const renewalPackages = [
  {
    id: "basic-renewal",
    name: "Basic Renewal",
    price: 199,
    description: "Essential renewal filing service",
    popular: false,
    features: [
      "Section 8 Declaration filing",
      "Section 15 Declaration (if eligible)",
      "USPTO filing and monitoring",
      "Email notifications",
      "Basic support"
    ],
    governmentFee: 525,
    totalPrice: 724
  },
  {
    id: "standard-renewal",
    name: "Standard Renewal",
    price: 299,
    description: "Complete renewal with attorney review",
    popular: true,
    features: [
      "Everything in Basic",
      "Attorney review of usage",
      "Specimen preparation assistance",
      "Priority customer support",
      "Status tracking",
      "Reminder notifications"
    ],
    governmentFee: 525,
    totalPrice: 824
  },
  {
    id: "premium-renewal",
    name: "Premium Renewal",
    price: 399,
    description: "Full-service renewal with monitoring",
    popular: false,
    features: [
      "Everything in Standard",
      "Trademark monitoring (1 year)",
      "Dedicated attorney support",
      "Phone consultation",
      "Expedited processing",
      "Compliance audit"
    ],
    governmentFee: 525,
    totalPrice: 924
  }
]

export const renewalBenefits = [
  {
    title: "Avoid Abandonment",
    description: "Missing renewal deadlines can result in loss of trademark rights. We ensure timely filing.",
    icon: "shield"
  },
  {
    title: "Maintain Protection",
    description: "Continue your exclusive rights and prevent competitors from using your mark.",
    icon: "lock"
  },
  {
    title: "Strengthen Rights",
    description: "Section 15 filing makes your trademark incontestable after 5 years.",
    icon: "star"
  },
  {
    title: "Professional Service",
    description: "Our attorneys handle all documentation and USPTO correspondence.",
    icon: "users"
  }
]