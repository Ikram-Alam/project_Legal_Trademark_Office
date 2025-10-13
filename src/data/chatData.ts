/**
 * Chatbot Dataset for USPTO Legal Trademark Office
 * Contains questions, keywords, and responses for automated customer support
 */

export interface ChatDataEntry {
  category: string
  keywords: string[]
  responses: string[]
}

export const chatData: ChatDataEntry[] = [
  // Greetings & Basic
  {
    category: "greeting",
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greetings"],
    responses: [
      "Hello! Welcome to USPTO Legal Trademark Office. How can I help you today?",
      "Hi there! I'm here to answer your trademark questions. What would you like to know?",
      "Greetings! How may I assist you with your trademark needs today?",
      "Hello! I'm your USPTO trademark assistant. Feel free to ask me anything about trademarks!"
    ]
  },
  {
    category: "thanks",
    keywords: ["thank", "thanks", "appreciate", "grateful"],
    responses: [
      "You're welcome! Feel free to ask if you have any other questions.",
      "Happy to help! Let me know if there's anything else you'd like to know.",
      "My pleasure! Don't hesitate to reach out if you need more assistance.",
      "Glad I could help! We're here whenever you need trademark guidance."
    ]
  },

  // Pricing & Packages
  {
    category: "pricing",
    keywords: ["price", "cost", "fee", "how much", "expensive", "cheap", "payment", "pay"],
    responses: [
      "We offer three trademark registration packages:\n• Essential: $49 + $325 USPTO fees ($374 total)\n• Professional: $149 + $325 USPTO fees ($474 total) - Most Popular\n• Enterprise: $249 + $325 USPTO fees ($574 total)\n\nAll packages include USPTO filing and comprehensive support!",
      "Our trademark registration starts at $374 total (includes $49 service fee + $325 government fees). We also offer Professional ($474) and Enterprise ($574) packages with additional features like attorney review and monitoring.",
      "Pricing varies by package:\n- Basic service starts at $49 + USPTO fees\n- Most clients choose our Professional package at $149 + fees\n- Premium service with dedicated attorney is $249 + fees\n\nWould you like to know what's included in each package?"
    ]
  },
  {
    category: "packages",
    keywords: ["package", "plan", "options", "what's included", "features", "difference between"],
    responses: [
      "Our packages include:\n\n✓ ESSENTIAL ($374): Basic filing, trademark search, email support\n\n✓ PROFESSIONAL ($474): Everything in Essential + attorney review, priority support, 6-month monitoring, money-back guarantee\n\n✓ ENTERPRISE ($574): Everything in Professional + dedicated attorney, unlimited consultations, 1-year monitoring, cease & desist templates\n\nWhich package interests you?",
      "All packages include USPTO filing, but here's what makes them different:\n\nEssential = Self-service basics\nProfessional = Attorney review + priority support (⭐ Most Popular)\nEnterprise = Full-service with dedicated legal team\n\nNeed help choosing the right one?"
    ]
  },

  // Trademark Basics
  {
    category: "what_is_trademark",
    keywords: ["what is trademark", "what's a trademark", "trademark definition", "define trademark", "what does trademark mean"],
    responses: [
      "A trademark is a unique symbol, word, phrase, design, or combination that identifies and distinguishes your products or services from others. It's your brand's legal protection! ®",
      "Think of a trademark as your brand's fingerprint - it's the name, logo, or slogan that makes your business uniquely yours. Registering it gives you exclusive legal rights to use it nationwide.",
      "A trademark protects your brand identity. It can be:\n• Business name\n• Logo/design\n• Slogan or tagline\n• Product names\n• Even sounds or colors!\n\nRegistration gives you legal ownership and nationwide protection."
    ]
  },
  {
    category: "why_register",
    keywords: ["why register", "benefits", "why trademark", "need trademark", "advantages", "worth it"],
    responses: [
      "Registering your trademark gives you:\n✓ Nationwide exclusive rights\n✓ Legal protection against copycats\n✓ Ability to sue infringers\n✓ Use of ® symbol\n✓ Higher business valuation\n✓ Deterrent to competitors\n\nIt's essential for protecting your brand!",
      "A registered trademark protects your brand legally. Without it, someone could copy your name or logo, and you'd have limited options to stop them. Registration gives you powerful legal tools and exclusive rights across the entire US!",
      "Think of trademark registration as insurance for your brand. It prevents others from stealing your identity, increases your company's value, and gives you the legal right to protect what you've built."
    ]
  },
  {
    category: "how_long",
    keywords: ["how long", "timeline", "time", "duration", "when", "process time", "how many months"],
    responses: [
      "The trademark registration process typically takes 8-12 months from filing to approval. Our team reviews your application within 2-3 business days before filing with the USPTO. You'll receive updates at every milestone!",
      "Timeline breakdown:\n• Our review: 2-3 business days\n• USPTO filing: 5-7 days\n• USPTO examination: 8-12 months\n• Final registration: After examination approval\n\nWe keep you informed throughout the entire process!",
      "From application to registration, expect 8-12 months. However, our Professional and Enterprise packages offer expedited initial review (24-48 hours) to get your application filed faster!"
    ]
  },

  // Trademark Types
  {
    category: "types",
    keywords: ["types of trademark", "kinds", "what can I trademark", "trademark types", "categories"],
    responses: [
      "You can register three main types of trademarks:\n\n1️⃣ TRADEMARK NAME: Your business or product name\n2️⃣ LOGO: Your visual brand identity/design\n3️⃣ SLOGAN: Your tagline or catchphrase\n\nMost businesses register their name and logo together for complete protection!",
      "We help you protect:\n• Word marks (business names)\n• Design marks (logos, symbols)\n• Combined marks (name + logo)\n• Slogans and taglines\n\nYou can register multiple types for comprehensive brand protection.",
      "Trademarks protect your brand elements:\n- Names identify your business\n- Logos provide visual recognition\n- Slogans communicate your message\n\nMany clients register all three for maximum protection!"
    ]
  },
  {
    category: "logo_vs_name",
    keywords: ["logo or name", "logo vs name", "name vs logo", "both", "should I register", "which one"],
    responses: [
      "Great question! We recommend registering BOTH:\n\n🔤 Name = Protects your business name regardless of design\n🎨 Logo = Protects your specific visual design\n\nRegistering both gives you complete protection. Many businesses do this to secure their full brand identity!",
      "If you can only choose one, register your NAME first - it's harder to change and more fundamental to your brand. But ideally, protect both your name and logo for comprehensive coverage!"
    ]
  },

  // Application Process
  {
    category: "process",
    keywords: ["process", "steps", "how to", "procedure", "how does it work", "what happens"],
    responses: [
      "Our trademark registration process:\n\n1️⃣ Fill out our online application (10 minutes)\n2️⃣ Our attorneys review your submission (2-3 days)\n3️⃣ We file with the USPTO (5-7 days)\n4️⃣ USPTO examines your application (8-12 months)\n5️⃣ Registration certificate issued! 🎉\n\nWe handle all the legal work and keep you updated!",
      "Here's how it works:\n\nYOU: Complete our simple 3-step form\nUS: Review, file, and monitor your application\nUSPTO: Examines and approves\nYOU: Receive your official registration!\n\nWe guide you through every step with expert support.",
      "The process is simple:\n• Step 1: Tell us about your trademark\n• Step 2: Provide your contact information  \n• Step 3: Choose your package & pay securely\n\nThen we handle everything else - filing, correspondence, tracking, and more!"
    ]
  },
  {
    category: "documents_needed",
    keywords: ["documents", "what do I need", "required", "information needed", "paperwork", "forms"],
    responses: [
      "All you need:\n✓ Trademark name/logo\n✓ Business description\n✓ Goods/services you offer\n✓ Contact information\n✓ Date you started using the trademark\n\nOur online form guides you through everything - no confusing paperwork!",
      "We make it easy! Just provide:\n• Your trademark (name, logo, or slogan)\n• What you sell/offer\n• Your business details\n• When you first used the trademark\n\nIf you have a logo, upload the image file. That's it!",
      "Required information:\n1. Trademark details (name/logo/slogan)\n2. Business category/industry\n3. First use date in commerce\n4. Your contact information\n\nNo legal jargon - our form is designed for business owners!"
    ]
  },

  // Search & Availability
  {
    category: "search",
    keywords: ["search", "check", "available", "availability", "taken", "already registered", "can I use"],
    responses: [
      "We include a comprehensive trademark search with all our packages! Our system checks the USPTO database for conflicts before you file. This helps ensure your trademark is available and reduces the risk of rejection.",
      "Want to check if your trademark is available? Our Professional and Enterprise packages include detailed trademark searches and analysis. We'll identify any potential conflicts and give you a clear recommendation!",
      "Every application includes a basic search. For thorough analysis, our Professional package ($474) includes a comprehensive search with attorney review to identify any potential issues before filing."
    ]
  },
  {
    category: "conflicts",
    keywords: ["conflict", "similar", "rejection", "denied", "refused", "already exists", "same name"],
    responses: [
      "If your trademark is too similar to an existing one, the USPTO may refuse registration. That's why we conduct searches first! Our Professional package includes attorney analysis to prevent this. If issues arise, we'll guide you on next steps or modifications.",
      "Don't worry - our comprehensive search helps avoid conflicts. If we find similar trademarks, our attorneys will advise on:\n• Modifications to make it unique\n• Alternative approaches\n• Likelihood of approval\n\nWe prevent problems before they happen!",
      "Similar trademarks can cause issues, but we help you navigate this:\n\n✓ Pre-filing search identifies conflicts\n✓ Attorney analysis suggests modifications\n✓ Strategic filing increases success\n✓ Opposition handling if challenges arise\n\nOur success rate is 99%!"
    ]
  },

  // International & Classes
  {
    category: "international",
    keywords: ["international", "other countries", "worldwide", "global", "foreign", "outside us"],
    responses: [
      "US trademark registration only protects you in the United States. For international protection, you'll need to file in each country separately. However, we can guide you on international trademark strategies! Contact us for international filing assistance.",
      "Great question! A US trademark covers only the USA. If you do business internationally, you'll need:\n• EU trademark (covers 27 countries)\n• Individual country filings\n• Madrid Protocol (file in multiple countries at once)\n\nWe offer guidance on international trademark protection!",
      "US registration = US protection only. For global coverage:\n1. File in the US first (establishes priority)\n2. Consider international treaties like Madrid Protocol\n3. File in key markets for your business\n\nNeed help with international trademarks? We can connect you with international partners!"
    ]
  },
  {
    category: "classes",
    keywords: ["class", "category", "nice classification", "what class", "which category", "goods and services"],
    responses: [
      "Trademarks are organized into 45 international classes:\n• Classes 1-34: Goods (products)\n• Classes 35-45: Services\n\nDon't worry about choosing - our system helps you select the right class based on your business description!",
      "Classes categorize what you're protecting. For example:\n• Class 25: Clothing\n• Class 35: Retail services\n• Class 41: Education/entertainment\n\nOur application guides you to the correct class automatically!",
      "The USPTO uses the Nice Classification system (45 classes). Each class costs $325 in government fees. Most businesses need 1-2 classes. Our form helps identify which classes apply to your business - no classification expertise needed!"
    ]
  },

  // Legal & Protection
  {
    category: "protection",
    keywords: ["protect", "protection", "rights", "legal", "enforce", "stop", "infringement"],
    responses: [
      "A registered trademark gives you:\n✓ Exclusive nationwide rights to use your mark\n✓ Legal presumption of ownership\n✓ Right to use ® symbol\n✓ Ability to sue infringers in federal court\n✓ Basis for international registration\n✓ Deterrent against copycats\n\nIt's your brand's legal shield!",
      "Registration means you own it legally. If someone copies your trademark, you can:\n• Send cease and desist letters\n• File lawsuits for damages\n• Stop them from using it\n• Claim their profits\n\nWithout registration, enforcement is much harder!",
      "Think of registration as your brand's copyright. It gives you exclusive rights and legal tools to stop anyone from using your trademark without permission. It's essential for serious business owners!"
    ]
  },
  {
    category: "tm_vs_r",
    keywords: ["tm symbol", "r symbol", "®", "™", "difference between", "registered symbol"],
    responses: [
      "Great question!\n\n™ = Trademark claim (anyone can use, no registration needed)\n® = Registered trademark (ONLY after USPTO approval)\n\nUsing ® before registration is illegal! Use ™ until you're officially registered, then switch to ®",
      "The difference:\n• ™ means you're claiming trademark rights (no legal registration)\n• ® means officially registered with the USPTO (legal protection)\n\nYou can use ™ anytime, but ® only after your trademark is approved!",
      "™ shows you're claiming rights (informal)\n® shows you're legally registered (official)\n\nAfter registration, always use ® - it signals legal protection and deters infringement!"
    ]
  },

  // Renewal & Maintenance
  {
    category: "renewal",
    keywords: ["renew", "renewal", "expires", "how long valid", "maintain", "keep", "duration"],
    responses: [
      "Trademarks last indefinitely if maintained!\n\n📅 Required filings:\n• Years 5-6: Declaration of Use\n• Years 9-10: Renewal (every 10 years)\n\nAs long as you keep using your trademark and file renewals, it never expires! We offer renewal reminder services.",
      "Your trademark registration doesn't expire as long as you:\n1. Keep using the trademark in commerce\n2. File required maintenance documents\n3. Renew every 10 years\n\nOur Enterprise package includes automatic renewal reminders for 10 years!",
      "Trademark protection lasts forever with proper maintenance:\n✓ Use your trademark continuously\n✓ File at 5-6 years (Declaration of Use)\n✓ Renew every 10 years\n\nWe'll remind you when filings are due!"
    ]
  },

  // Payment & Support
  {
    category: "payment_methods",
    keywords: ["payment method", "how to pay", "credit card", "paypal", "payment options", "secure payment"],
    responses: [
      "We accept secure payments through PayPal, which means you can pay with:\n💳 Credit/Debit Cards (Visa, MasterCard, Amex)\n🏦 Bank Accounts\n💰 PayPal Balance\n📱 Pay Later options\n\nAll payments are PCI-compliant and 256-bit encrypted!",
      "Payment is safe and easy! We use PayPal's secure payment system. You can pay with any major credit card or your PayPal account. No PayPal account required - cards work directly!",
      "We offer flexible payment options:\n• Credit/Debit cards (all major brands)\n• PayPal account\n• Bank transfers (where available)\n\nAll transactions are encrypted and secure. We never store your payment information!"
    ]
  },
  {
    category: "refund",
    keywords: ["refund", "money back", "guarantee", "cancel", "cancellation"],
    responses: [
      "Our Professional and Enterprise packages include a 30-day money-back guarantee! If we can't file your application for any reason, you'll get a full refund (minus government fees already paid to USPTO).",
      "We offer a satisfaction guarantee:\n✓ Full refund if we can't file your application\n✓ 30-day money back guarantee (Professional/Enterprise)\n✓ No hidden fees\n\nNote: Government fees paid to USPTO are non-refundable per their policy.",
      "Your satisfaction is guaranteed! If you're not happy with our service within 30 days (Professional/Enterprise packages), we'll refund your service fee. USPTO government fees are non-refundable as they're paid directly to the government."
    ]
  },
  {
    category: "support",
    keywords: ["support", "help", "contact", "assistance", "question", "speak", "talk", "customer service"],
    responses: [
      "We're here to help! 24/7\n\n📧 Email: info@usptolegal.com\n📞 Phone: 1-800-TRADEMARK\n💬 Live Chat: Right here!\n⏱️ Response time: Within 2 hours\n\nOur Professional package includes priority support with even faster response times!",
      "Need human assistance? We offer:\n• Email support (all packages)\n• Phone support (24/7)\n• Priority support (Professional/Enterprise)\n• Dedicated account manager (Enterprise)\n\nJust ask - we're always here!",
      "Get help anytime:\n✓ Chat with me for instant answers\n✓ Email us at info@usptolegal.com\n✓ Call 1-800-TRADEMARK\n✓ Schedule a free consultation\n\nAverage response time: 2 hours!"
    ]
  },

  // Account & Tracking
  {
    category: "track",
    keywords: ["track", "status", "check status", "where is my", "tracking", "application status"],
    responses: [
      "After filing, you'll receive:\n📧 Email updates at every milestone\n🔔 Real-time tracking dashboard\n📱 SMS notifications (optional)\n\nYou can always log in to check your application status, or contact us anytime for updates!",
      "Track your application easily:\n1. Check your email for updates\n2. Log in to your dashboard\n3. Call/email us anytime\n\nWe notify you at every important step - filing, examination, approval, and more!",
      "Your application is tracked in real-time! You'll receive:\n✓ Confirmation when we receive your application\n✓ Update when filed with USPTO\n✓ Notifications of any USPTO actions\n✓ Alert when approved\n\nYour account manager keeps you informed!"
    ]
  },

  // Common Concerns
  {
    category: "rejection_concern",
    keywords: ["what if rejected", "if denied", "fail", "unsuccessful", "not approved"],
    responses: [
      "If the USPTO refuses your application, we'll help you:\n1. Review the refusal reasons\n2. Suggest modifications or alternatives\n3. File responses if possible\n4. Advise on best next steps\n\nOur Professional/Enterprise packages include attorney assistance with USPTO office actions at no extra charge!",
      "Don't worry - we have a 99% success rate! If issues arise:\n• We respond to USPTO objections\n• We suggest trademark modifications\n• We handle all correspondence\n• We fight for your approval\n\nYou're never alone in the process!",
      "Rejection is rare with our service because:\n✓ We pre-screen for conflicts\n✓ Attorneys review before filing\n✓ We handle USPTO communications\n✓ We fight for your approval\n\nIf issues arise, we work to resolve them - that's included in your package!"
    ]
  },
  {
    category: "diy_vs_service",
    keywords: ["do it myself", "diy", "why use you", "file myself", "worth paying"],
    responses: [
      "You CAN file yourself, but here's why clients choose us:\n\n❌ DIY: Complex legal forms, USPTO rejections common, no guidance\n✅ Us: Expert review, higher success rate, handle all paperwork, support throughout\n\nOne rejection costs you time and more fees. We get it right the first time!",
      "The USPTO fee is the same whether you use us or not ($325). Our service fee covers:\n✓ Expert application preparation\n✓ Trademark search & analysis\n✓ Attorney review\n✓ USPTO correspondence handling\n✓ Support & guidance\n\nWe're trademark specialists - you're not gambling with your brand!",
      "DIY filing has a ~30% rejection rate. Our service has a 99% success rate. For just $49-249 more, you get:\n• Expert preparation\n• Legal review\n• Error prevention\n• Professional support\n• Peace of mind\n\nYour brand deserves professional protection!"
    ]
  },

  // Urgency & Speed
  {
    category: "urgent",
    keywords: ["urgent", "fast", "quick", "rush", "expedite", "asap", "emergency"],
    responses: [
      "Need it fast? Our Enterprise package offers:\n⚡ Expedited review (24-48 hours)\n⚡ Priority USPTO filing\n⚡ Dedicated attorney\n⚡ Express processing\n\nNote: USPTO examination still takes 8-12 months (government timeline), but we get YOUR application filed as fast as possible!",
      "We can expedite our portion:\n• Normal: 2-3 business days review\n• Professional: Same-day review available\n• Enterprise: 24-48 hour guaranteed\n\nHowever, the USPTO examination timeline (8-12 months) is set by the government and cannot be rushed.",
      "We can speed up filing, but note:\n✓ Our review: Can be expedited to 24-48 hrs\n✓ USPTO filing: 5-7 days (expeditable)\n❌ USPTO examination: 8-12 months (cannot rush)\n\nWe file as fast as possible to get you in the queue!"
    ]
  },

  // Specific Scenarios
  {
    category: "already_using",
    keywords: ["already using", "been using", "used for years", "using without registration"],
    responses: [
      "That's great - you have \"common law\" rights! But registration gives you:\n✓ Nationwide protection (vs. local only)\n✓ Federal legal rights\n✓ Ability to stop others\n✓ ® symbol\n✓ Higher value\n\nRegister now to protect what you've built!",
      "Using a trademark gives you some rights, but REGISTRATION gives you:\n• Legal ownership\n• Nationwide exclusive rights\n• Federal court protection\n• Stronger enforcement power\n\nDon't wait - protect your brand before someone else tries to register it!",
      "Great! You can use your start date in the application. Registration will:\n1. Protect you nationwide\n2. Give you legal priority\n3. Stop copycats\n4. Increase your business value\n\nLet's make your existing rights official!"
    ]
  },
  {
    category: "multiple_trademarks",
    keywords: ["multiple", "more than one", "several", "different trademarks", "many"],
    responses: [
      "Yes, you can register multiple trademarks! Each application is separate:\n• One filing per trademark\n• Each has its own $325 USPTO fee\n• Bulk discounts available for 3+ applications\n\nMany businesses register:\n1. Company name\n2. Product names\n3. Logo\n4. Slogan\n\nContact us for multi-trademark packages!",
      "Absolutely! Businesses often register:\n✓ Business name\n✓ Product line names\n✓ Logo designs\n✓ Slogans\n\nEach requires a separate application. We offer discounts for multiple filings - contact us for a custom quote!",
      "You should register each important brand element:\n• Main business name\n• Logo\n• Key product names\n• Memorable slogans\n\nWe can handle multiple applications simultaneously. Bulk pricing available!"
    ]
  },

  // Technical Issues
  {
    category: "technical_help",
    keywords: ["website issue", "can't submit", "error", "not working", "broken", "bug"],
    responses: [
      "Sorry for the trouble! Try these quick fixes:\n1. Refresh the page (Ctrl+R / Cmd+R)\n2. Clear browser cache\n3. Try a different browser\n4. Check your internet connection\n\nStill stuck? Contact us immediately:\n📧 info@usptolegal.com\n📞 1-800-TRADEMARK\n\nWe'll get you sorted out!",
      "Technical issues? Let's fix it:\n• Try clearing your browser cache\n• Disable ad blockers temporarily\n• Use Chrome or Firefox\n• Check if JavaScript is enabled\n\nIf problems persist, email us at info@usptolegal.com with details and we'll help right away!"
    ]
  },

  // Bye/End
  {
    category: "goodbye",
    keywords: ["bye", "goodbye", "thanks bye", "see you", "later", "that's all"],
    responses: [
      "Thank you for chatting! If you have more questions later, I'm always here. Ready to start your trademark registration? Click the button above! 👆",
      "Goodbye! Remember - we're here 24/7 if you need anything else. Protect your brand today! 🛡️",
      "Thanks for visiting! Feel free to come back anytime. We look forward to helping you protect your brand! 🌟"
    ]
  },

  // Trademark Renewal & Maintenance
  {
    category: "trademark_renewal",
    keywords: ["renew trademark", "renewal process", "maintain trademark", "keep trademark active", "trademark expires", "maintenance filing"],
    responses: [
      "Trademark renewals keep your registration active:\n\n📅 Between years 5-6: Declaration of Continued Use\n📅 Between years 9-10: Combined Declaration & Renewal\n📅 Every 10 years thereafter: Renewal filing\n\nMiss a deadline? You may lose your trademark! We offer renewal reminder services.",
      "To maintain your trademark:\n✓ File Declaration of Use (years 5-6)\n✓ File renewal (years 9-10, then every 10 years)\n✓ Continue using your mark in commerce\n✓ Keep your address updated with USPTO\n\nOur Enterprise package includes automatic renewal reminders!",
      "Trademark maintenance timeline:\n• Year 5-6: Prove you're still using it ($525 filing fee)\n• Year 9-10: First renewal ($525)\n• Every 10 years: Subsequent renewals\n\nNeed help with renewals? We've got you covered!"
    ]
  },

  // Trademark Opposition
  {
    category: "trademark_opposition",
    keywords: ["oppose trademark", "opposition", "challenge trademark", "someone opposes", "trademark dispute", "contest"],
    responses: [
      "Trademark opposition happens when someone challenges your application:\n\n⚠️ 30-day window after publication\n⚠️ Opposition filed with USPTO\n⚠️ You must respond within deadlines\n⚠️ Can lead to settlement or cancellation\n\nFacing opposition? Our attorneys can represent you!",
      "If someone opposes your trademark:\n1. Don't panic - oppositions are common\n2. Review their grounds for opposition\n3. Respond within 40 days\n4. Consider settlement negotiations\n\nOur Enterprise package includes opposition defense support!",
      "Want to oppose someone else's trademark?\n• You have 30 days after publication\n• Must show you'll be harmed\n• File with Trademark Trial and Appeal Board\n• Legal representation recommended\n\nWe can help you file or defend oppositions!"
    ]
  },

  // International Trademark Protection
  {
    category: "international_trademark",
    keywords: ["international trademark", "foreign trademark", "global protection", "other countries", "madrid protocol", "worldwide trademark"],
    responses: [
      "Protect your trademark globally:\n\n🌍 Madrid Protocol: File in 130+ countries with one application\n🌎 Paris Convention: Direct filing in specific countries\n🌏 Regional systems: EU, OAPI, GCC, etc.\n\nWe can guide you on international trademark strategy!",
      "International trademark options:\n• Madrid System: Most cost-effective for multiple countries\n• Country-by-country: Direct filing (more control)\n• Regional filings: Cover multiple countries at once\n\nEach country has different costs and requirements. Let's discuss your needs!",
      "Going global? Consider:\n✓ US registration first (establishes priority date)\n✓ Madrid Protocol for efficiency\n✓ Key markets for your business\n✓ Local counsel in target countries\n\nWe partner with international trademark attorneys!"
    ]
  },

  // Trademark Search & Clearance
  {
    category: "trademark_clearance",
    keywords: ["trademark search", "clearance search", "comprehensive search", "check availability", "search database", "conflict check"],
    responses: [
      "Our trademark search includes:\n\n🔍 USPTO database search\n🔍 Common law trademark search\n🔍 Similar name analysis\n🔍 Phonetic similarity check\n🔍 Attorney evaluation\n\nProfessional package includes comprehensive search with detailed report!",
      "Why search before filing?\n• Avoid costly rejections\n• Identify potential conflicts\n• Save time and money\n• Increase approval chances\n\nOur search success rate: 99% approval! We find issues before USPTO does.",
      "Trademark search types:\n1. Knockout search (basic, included free)\n2. Comprehensive search (Professional package)\n3. Full clearance opinion (Enterprise package)\n\nDon't risk rejection - search first!"
    ]
  },

  // Trademark Assignment & Transfer
  {
    category: "trademark_transfer",
    keywords: ["transfer trademark", "sell trademark", "buy trademark", "assignment", "change ownership", "trademark sale"],
    responses: [
      "Transferring trademark ownership:\n\n📝 Assignment agreement required\n📝 Record with USPTO ($100 fee)\n📝 Update all business records\n📝 Maintain goodwill & quality\n\nWe handle the entire assignment process!",
      "Buying or selling a trademark?\n1. Due diligence on trademark status\n2. Draft assignment agreement\n3. Sign and notarize documents\n4. Record with USPTO\n5. Update licenses and contracts\n\nOur attorneys ensure smooth transfers!",
      "Trademark assignments involve:\n• Legal transfer documents\n• USPTO recordation\n• Goodwill transfer\n• Quality control requirements\n\nAssignment services starting at $399. Contact us!"
    ]
  },

  // Trademark Monitoring Services
  {
    category: "trademark_monitoring",
    keywords: ["monitor trademark", "watch service", "trademark watch", "monitoring", "alert service", "infringement watch"],
    responses: [
      "Trademark monitoring protects your investment:\n\n👁️ Watch for similar applications\n👁️ Detect potential infringements\n👁️ Alert you to conflicts\n👁️ Monthly reports\n👁️ Opposition recommendations\n\nIncluded FREE for 6 months with Professional package!",
      "Our monitoring service includes:\n✓ USPTO new filing alerts\n✓ Domain name monitoring\n✓ Social media monitoring\n✓ Marketplace monitoring (Amazon, eBay)\n✓ Infringement detection\n\nProtect your brand 24/7! Starting at $99/year.",
      "Why monitor your trademark?\n• Catch infringers early\n• Prevent brand confusion\n• Maintain trademark strength\n• Stop copycats before they grow\n\nEnterprise package includes 1-year monitoring FREE!"
    ]
  },

  // Trademark Cancellation
  {
    category: "trademark_cancellation",
    keywords: ["cancel trademark", "cancellation", "abandon trademark", "give up trademark", "stop trademark", "remove trademark"],
    responses: [
      "Canceling a trademark:\n\n⚠️ Usually permanent - cannot be reversed\n⚠️ Pending applications can be abandoned\n⚠️ Registered marks require cancellation filing\n⚠️ May owe maintenance fees\n\nThink carefully before canceling! Need advice?",
      "Reasons for trademark cancellation:\n• Business closure\n• No longer using the mark\n• Switching to new branding\n• Legal settlement requirement\n\nBefore canceling, consider:\n- Licensing opportunities\n- Asset sale value\n- Future use potential\n\nContact us to explore alternatives!",
      "Cancellation process:\n1. Review your trademark status\n2. Consider alternatives (licensing, sale)\n3. File appropriate forms with USPTO\n4. Update business records\n\nWe can advise on the best course of action!"
    ]
  },

  // Trademark Classes & Classification
  {
    category: "nice_classification",
    keywords: ["nice classification", "trademark class", "goods and services", "multiple classes", "class 25", "class 35", "which class"],
    responses: [
      "Trademark classes explained:\n\n📦 Classes 1-34: Goods (physical products)\n🔧 Classes 35-45: Services\n💰 $325 USPTO fee per class\n\nMost common classes:\n• Class 25: Clothing\n• Class 35: Retail/business services\n• Class 41: Entertainment/education\n• Class 42: Software/technology",
      "Need multiple classes?\n• Each class costs $325 (USPTO fee)\n• Same trademark, different goods/services\n• File all at once or add later\n• We help identify all relevant classes\n\nDon't pay for classes you don't need - we analyze your business!",
      "Class selection tips:\n✓ Be specific about your goods/services\n✓ Include current AND planned offerings\n✓ Don't over-claim (waste money)\n✓ Don't under-claim (miss protection)\n\nOur system recommends the right classes automatically!"
    ]
  },

  // Logo & Design Trademarks
  {
    category: "logo_trademark",
    keywords: ["logo trademark", "design mark", "logo protection", "trademark logo", "stylized mark", "graphic trademark"],
    responses: [
      "Logo trademark tips:\n\n🎨 Register the design exactly as used\n🎨 Color vs. black & white options\n🎨 Consider separate word mark registration\n🎨 Update if logo changes significantly\n\nMost businesses register both name AND logo!",
      "Logo vs. Word Mark:\n• Logo = specific design only\n• Word mark = text in any style\n• Combo mark = both together\n\nPro tip: Register word mark first (broader protection), then logo separately!",
      "Design trademark requirements:\n✓ High-quality image (JPG/PNG)\n✓ Clear and distinct design\n✓ No excessive detail\n✓ Meets USPTO specifications\n\nWe'll format your logo file correctly for USPTO!"
    ]
  },

  // Trademark Specimens & Proof of Use
  {
    category: "trademark_specimens",
    keywords: ["specimen", "proof of use", "evidence", "show usage", "use in commerce", "examples", "documentation"],
    responses: [
      "Trademark specimens (proof of use):\n\n📸 For goods: Labels, tags, packaging, product photos\n📸 For services: Websites, ads, brochures, signage\n📸 Must show mark with goods/services\n📸 Must be actual use (not mock-ups)\n\nWe review your specimens before filing!",
      "What makes a good specimen?\n✓ Shows trademark clearly\n✓ Associated with your goods/services\n✓ Dated evidence\n✓ Actual commercial use\n\n❌ Unacceptable: Mock-ups, business cards, invoices alone\n\nNeed help? We'll tell you exactly what to submit!",
      "Specimen requirements vary:\n• Products: Photo showing mark on item/packaging\n• Services: Website/ad showing mark with service description\n• Both: Must be dated, clear, professional\n\nOur attorneys verify specimens before USPTO submission!"
    ]
  },

  // Trademark Priority & First Use
  {
    category: "trademark_priority",
    keywords: ["priority date", "first use", "who owns trademark", "senior user", "prior use", "use date"],
    responses: [
      "Trademark priority matters:\n\n⚖️ First to use in commerce = common law rights\n⚖️ First to register = presumed owner\n⚖️ Intent-to-use = holds priority date\n⚖️ Earlier date wins disputes\n\nDocument your first use date carefully!",
      "Priority date determines ownership:\n• Senior user (first) has superior rights\n• Registration creates nationwide presumption\n• Keep proof of first use (ads, sales, invoices)\n• File application ASAP to secure priority\n\nWe help establish and prove your priority!",
      "What counts as 'first use'?\n1. Selling products with the mark\n2. Advertising services with the mark\n3. Distributing goods to customers\n4. Offering services to the public\n\nDate must be actual commercial use, not internal testing!"
    ]
  },

  // Trademark Symbols (TM, SM, ®)
  {
    category: "trademark_symbols",
    keywords: ["tm symbol", "sm symbol", "registered symbol", "® symbol", "™ symbol", "when to use r", "trademark symbol"],
    responses: [
      "Trademark symbols explained:\n\n™️ = Unregistered trademark (goods)\n℠ = Unregistered service mark (services)\n® = Registered trademark (USPTO approved ONLY)\n\n⚠️ Using ® without registration is illegal!",
      "Symbol usage rules:\n• ™ or ℠: Use anytime, even before filing\n• ®: ONLY after USPTO registration certificate\n• Placement: Superscript or next to mark\n• Not required but strongly recommended\n\nSymbols provide legal notice to potential infringers!",
      "When to switch from ™ to ®?\n✓ After receiving USPTO registration certificate\n✓ Not when application is approved (wait for certificate)\n✓ Use consistently on all materials\n✓ Update website, packaging, marketing\n\nWe'll notify you when it's time to use ®!"
    ]
  },

  // Trademark Disclaimer
  {
    category: "trademark_disclaimer",
    keywords: ["disclaimer", "generic term", "descriptive", "disclaim part", "can't claim"],
    responses: [
      "Trademark disclaimers:\n\n• Required for generic/descriptive terms\n• Doesn't weaken your overall mark\n• Common in combination marks\n• Example: Disclaim 'coffee' in 'BlueSky Coffee'\n\nWe identify if disclaimers are needed!",
      "When disclaimers are required:\n✓ Generic terms (computer, restaurant, store)\n✓ Geographic locations (New York, Miami)\n✓ Common descriptive words (fast, best, quality)\n✓ Industry standard terms\n\nProper disclaimers prevent USPTO rejections!",
      "Disclaimer examples:\n• 'No claim is made to the exclusive right to use COFFEE apart from the mark'\n• Affects only that word, not entire trademark\n• USPTO requires for certain terms\n• Our attorneys handle disclaimer wording\n\nDon't worry - we know what to disclaim!"
    ]
  },

  // Trademark Licensing
  {
    category: "trademark_licensing",
    keywords: ["license trademark", "licensing", "let others use", "franchise", "trademark license agreement"],
    responses: [
      "Trademark licensing:\n\n📄 License agreement required\n📄 Control quality standards\n📄 Royalty terms defined\n📄 Record major licenses with USPTO\n📄 Prevent trademark abandonment\n\nLicensing generates income from your brand!",
      "Licensing your trademark:\n✓ Written agreement essential\n✓ Quality control provisions required\n✓ Royalty rates negotiable\n✓ Exclusive vs. non-exclusive options\n✓ Territory and duration defined\n\nWe draft licensing agreements - starting at $599!",
      "Licensing considerations:\n• Maintain quality control (USPTO requirement)\n• Monitor licensee's use\n• Include termination clauses\n• Record major agreements\n• Protect against infringement\n\nLicensing can be lucrative - we'll help structure it!"
    ]
  },

  // Common Trademark Mistakes
  {
    category: "trademark_mistakes",
    keywords: ["common mistakes", "errors", "what to avoid", "mistakes", "wrong", "don't do"],
    responses: [
      "Common trademark mistakes:\n\n❌ Not searching before using\n❌ Waiting too long to file\n❌ Using ® before registration\n❌ Not monitoring for infringement\n❌ Letting registration lapse\n\nAvoid costly errors - work with experts!",
      "Trademark pitfalls to avoid:\n1. Choosing generic/descriptive names\n2. Using someone else's trademark\n3. Inconsistent use (changing design)\n4. Missing renewal deadlines\n5. Not enforcing your rights\n\nWe guide you away from these mistakes!",
      "Don't make these errors:\n• Assuming no one else uses it (SEARCH!)\n• Delaying filing (lose priority)\n• Improper use (not as trademark)\n• Ignoring infringers (weakens rights)\n• Poor specimen examples\n\nLet professionals handle it right from the start!"
    ]
  },

  // Trademark for Startups
  {
    category: "startup_trademark",
    keywords: ["startup", "new business", "just starting", "small business", "entrepreneur", "launching"],
    responses: [
      "Trademark protection for startups:\n\n🚀 File early - before public launch\n🚀 Intent-to-use application available\n🚀 Protects your brand from day one\n🚀 Prevents costly rebranding later\n🚀 Attracts investors (shows IP value)\n\nOur Essential package is perfect for startups!",
      "New business? Trademark is essential:\n✓ Protects your brand identity\n✓ Prevents copycat competitors\n✓ Increases company valuation\n✓ Shows professionalism to investors\n✓ Required before major marketing\n\nDon't launch without trademark protection!",
      "Startup trademark strategy:\n1. Choose unique, protectable name\n2. Search for conflicts\n3. File application early (intent-to-use OK)\n4. Begin using consistently\n5. Monitor and enforce\n\nWe offer startup-friendly pricing!"
    ]
  },

  // Trademark vs Copyright vs Patent
  {
    category: "ip_differences",
    keywords: ["trademark vs copyright", "trademark vs patent", "difference", "copyright or trademark", "which one", "types of IP"],
    responses: [
      "Intellectual Property differences:\n\n™️ TRADEMARK: Brands, names, logos (identifies source)\n©️ COPYRIGHT: Creative works, content, art (protects expression)\n🔧 PATENT: Inventions, technology (protects functionality)\n\nYou may need all three for complete protection!",
      "What protects what?\n• Trademark: Your business name & logo\n• Copyright: Website content, marketing materials\n• Patent: Product inventions, unique technology\n\nMost businesses need trademark + copyright. We focus on trademarks!",
      "IP protection guide:\n✓ Brand name → Trademark\n✓ Logo design → Trademark\n✓ Website content → Copyright\n✓ Invention/tech → Patent\n✓ Slogan → Trademark\n\nNeed trademark protection? That's what we do!"
    ]
  },

  // E-commerce & Amazon Brand Registry
  {
    category: "ecommerce_trademark",
    keywords: ["amazon", "ecommerce", "online store", "brand registry", "shopify", "etsy", "selling online"],
    responses: [
      "E-commerce trademark benefits:\n\n🛒 Amazon Brand Registry (requires trademark)\n🛒 Protect listings from hijackers\n🛒 Enhanced marketing tools\n🛒 Remove counterfeit sellers\n🛒 A+ Content and Stores access\n\nTrademark required for Amazon Brand Registry!",
      "Selling on Amazon/Shopify/Etsy?\n• Trademark enables Brand Registry\n• Stop unauthorized sellers\n• Control your product listings\n• Access premium features\n• Build customer trust\n\nE-commerce sellers NEED trademark protection!",
      "Online seller trademark benefits:\n✓ Amazon Brand Registry enrollment\n✓ Report infringers easily\n✓ Protect against copycats\n✓ Professional brand image\n✓ Increased buyer confidence\n\nWe specialize in e-commerce trademark services!"
    ]
  }
]

export default chatData
