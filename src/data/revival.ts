export const revivalTimeline = [
  {
    step: 1,
    title: "Case Assessment",
    description: "Our attorneys review your abandoned trademark and assess the viability of revival based on your specific circumstances.",
    duration: "1-2 days",
    icon: "search"
  },
  {
    step: 2,
    title: "Petition Preparation",
    description: "We prepare a detailed petition to revive your trademark with supporting evidence and legal arguments.",
    duration: "3-5 days",
    icon: "document"
  },
  {
    step: 3,
    title: "USPTO Filing",
    description: "File the petition to revive with the USPTO along with all required fees and documentation.",
    duration: "Same day",
    icon: "upload"
  },
  {
    step: 4,
    title: "USPTO Review",
    description: "The USPTO examines your petition and supporting evidence. We handle any requests for additional information.",
    duration: "2-4 months",
    icon: "clock"
  },
  {
    step: 5,
    title: "Revival Decision",
    description: "If approved, your trademark is revived. If rejected, we can file an appeal or explore alternative options.",
    duration: "30 days",
    icon: "certificate"
  }
]

export const revivalPackages = [
  {
    id: "basic-revival",
    name: "Basic Revival",
    price: 899,
    description: "Essential revival petition service",
    popular: false,
    features: [
      "Case assessment and review",
      "Petition to revive preparation",
      "USPTO filing and monitoring",
      "Basic legal research",
      "Email support"
    ],
    governmentFee: 1600,
    totalPrice: 2499
  },
  {
    id: "standard-revival",
    name: "Standard Revival",
    price: 1299,
    description: "Comprehensive revival with attorney support",
    popular: true,
    features: [
      "Everything in Basic",
      "Detailed legal analysis",
      "Evidence gathering assistance",
      "USPTO response handling",
      "Priority attorney support",
      "Status tracking and updates"
    ],
    governmentFee: 1600,
    totalPrice: 2899
  },
  {
    id: "premium-revival",
    name: "Premium Revival",
    price: 1699,
    description: "Full-service revival with appeal option",
    popular: false,
    features: [
      "Everything in Standard",
      "Dedicated senior attorney",
      "Comprehensive evidence package",
      "Appeal preparation (if needed)",
      "Phone consultations",
      "Expedited processing"
    ],
    governmentFee: 1600,
    totalPrice: 3299
  }
]

export const revivalReasons = [
  {
    title: "Unintentional Delay",
    description: "Failed to file renewal documents due to circumstances beyond your control.",
    eligible: true
  },
  {
    title: "Non-Receipt of Notice",
    description: "Did not receive USPTO notices due to address changes or postal issues.",
    eligible: true
  },
  {
    title: "Attorney Error",
    description: "Your attorney failed to file required documents or missed deadlines.",
    eligible: true
  },
  {
    title: "Excusable Neglect",
    description: "Missed deadlines due to extraordinary circumstances like illness or natural disasters.",
    eligible: true
  },
  {
    title: "Willful Abandonment",
    description: "Deliberately chose not to renew or maintain the trademark.",
    eligible: false
  },
  {
    title: "Lack of Use",
    description: "Stopped using the trademark in commerce without intent to resume.",
    eligible: false
  }
]