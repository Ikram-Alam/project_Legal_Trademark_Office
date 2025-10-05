export interface FAQ {
  id: number
  question: string
  answer: string
  category: string
  tags: string[]
}

export const faqCategories = [
  { id: "all", name: "All Categories" },
  { id: "basics", name: "Trademark Basics" },
  { id: "process", name: "Registration Process" },
  { id: "pricing", name: "Pricing & Fees" },
  { id: "legal", name: "Legal Questions" },
  { id: "search", name: "Trademark Search" },
  { id: "renewal", name: "Renewal & Maintenance" },
  { id: "digital", name: "Digital & Online" },
  { id: "enforcement", name: "Enforcement" },
  { id: "international", name: "International" },
  { id: "maintenance", name: "Maintenance" }
]

export const faqsData: FAQ[] = [
  {
    id: 1,
    question: "What is a trademark?",
    answer: "A trademark is a word, phrase, symbol, design, or combination that identifies and distinguishes the source of goods or services. It helps consumers identify your brand and prevents others from using confusingly similar marks.",
    category: "basics",
    tags: ["definition", "basics", "trademark"]
  },
  {
    id: 2,
    question: "How long does trademark registration take?",
    answer: "The trademark registration process typically takes 6-12 months from filing to approval. This includes USPTO examination, publication for opposition, and final registration. Our service streamlines this process and handles all communications with the USPTO.",
    category: "process",
    tags: ["timeline", "process", "registration"]
  },
  {
    id: 3,
    question: "How much does trademark registration cost?",
    answer: "Our packages range from $374 (Basic) to $574 (Premium), which includes both our service fees and USPTO government fees. The government fee alone is $325 per class. Our pricing is transparent with no hidden fees.",
    category: "pricing",
    tags: ["cost", "pricing", "fees"]
  },
  {
    id: 4,
    question: "What can I trademark?",
    answer: "You can trademark business names, product names, logos, slogans, domain names, and even sounds or colors if they identify your brand. The mark must be distinctive and used in commerce to qualify for protection.",
    category: "basics",
    tags: ["eligibility", "types", "requirements"]
  },
  {
    id: 5,
    question: "Do I need a lawyer to file a trademark?",
    answer: "While not required, having legal expertise significantly increases your chances of success. Our service includes attorney review and preparation, ensuring your application meets all USPTO requirements and has the best chance of approval.",
    category: "legal",
    tags: ["attorney", "legal", "professional"]
  },
  {
    id: 6,
    question: "What happens if my trademark is rejected?",
    answer: "If the USPTO issues an office action or rejection, our attorneys will analyze the response and prepare a professional reply at no additional cost. We handle all USPTO correspondence throughout the process.",
    category: "process",
    tags: ["rejection", "office action", "response"]
  },
  {
    id: 7,
    question: "How do I search for existing trademarks?",
    answer: "We perform comprehensive trademark searches using the USPTO database and common law sources. This search identifies potential conflicts before filing and is included in all our service packages.",
    category: "search",
    tags: ["search", "conflict", "database"]
  },
  {
    id: 8,
    question: "Can I trademark something that&apos;s already being used?",
    answer: "You cannot trademark something identical or confusingly similar to an existing registered trademark in the same class. Our comprehensive search helps identify potential conflicts before filing.",
    category: "legal",
    tags: ["existing", "conflict", "similar"]
  },
  {
    id: 9,
    question: "What are trademark classes?",
    answer: "Trademark classes organize goods and services into 45 categories. You must identify the appropriate class(es) for your trademark. Our attorneys help determine the correct classes for your application.",
    category: "basics",
    tags: ["classes", "categories", "goods", "services"]
  },
  {
    id: 10,
    question: "How long does trademark protection last?",
    answer: "Trademarks can last forever if properly maintained. You must file renewal documents between the 5th-6th year and every 10 years thereafter. We offer renewal services to help maintain your protection.",
    category: "renewal",
    tags: ["duration", "renewal", "maintenance"]
  },
  {
    id: 11,
    question: "What&apos;s the difference between ™ and ®?",
    answer: "™ can be used with any trademark claim, while ® is reserved for federally registered trademarks. Using ® without federal registration is illegal and can result in penalties.",
    category: "basics",
    tags: ["symbols", "registration", "legal"]
  },
  {
    id: 12,
    question: "Can I trademark a domain name?",
    answer: "You can trademark a domain name if it functions as a trademark by identifying and distinguishing goods or services. The domain must be more than just a web address—it must serve as a brand identifier.",
    category: "digital",
    tags: ["domain", "website", "internet"]
  },
  {
    id: 13,
    question: "What if someone is using my trademark?",
    answer: "If someone is infringing your trademark, you have legal options including cease and desist letters, opposition proceedings, and federal court litigation. Our Premium package includes cease and desist letter templates.",
    category: "enforcement",
    tags: ["infringement", "enforcement", "legal action"]
  },
  {
    id: 14,
    question: "Do I need to use my trademark to maintain it?",
    answer: "Yes, trademarks must be used in commerce to maintain protection. You must also file periodic maintenance documents with the USPTO. Abandonment can occur if the mark is not used for extended periods.",
    category: "maintenance",
    tags: ["use", "maintenance", "abandonment"]
  },
  {
    id: 15,
    question: "Can I file internationally?",
    answer: "Yes, we can help with international trademark filings through the Madrid Protocol system, which allows filing in multiple countries with a single application. International protection requires separate applications in each desired country.",
    category: "international",
    tags: ["international", "madrid protocol", "global"]
  }
]