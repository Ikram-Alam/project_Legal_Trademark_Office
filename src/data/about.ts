export interface TeamMember {
  name: string
  role: string
  experience: string
  education: string
  description: string
}

export interface Achievement {
  number: string
  label: string
  description: string
}

export interface AboutStats {
  value: string
  label: string
}

export interface AboutValue {
  title: string
  description: string
  icon: string
}

export interface AboutFeature {
  title: string
  description: string
}

export const aboutStats: AboutStats[] = [
  {
    value: "10+",
    label: "Years of Experience"
  },
  {
    value: "5000+",
    label: "Trademarks Registered"
  },
  {
    value: "98%",
    label: "Success Rate"
  },
  {
    value: "24/7",
    label: "Client Support"
  }
]

export const aboutValues: AboutValue[] = [
  {
    title: "Expertise",
    description: "Our team consists of experienced intellectual property attorneys and legal professionals.",
    icon: "⚖️"
  },
  {
    title: "Transparency",
    description: "We provide clear pricing and keep you informed throughout the entire process.",
    icon: "🔍"
  },
  {
    title: "Efficiency",
    description: "Our streamlined process ensures quick and accurate trademark registration.",
    icon: "⚡"
  },
  {
    title: "Support",
    description: "Our dedicated support team is available to assist you every step of the way.",
    icon: "🤝"
  }
]

export const aboutFeatures: AboutFeature[] = [
  {
    title: "Comprehensive Search",
    description: "We conduct thorough trademark searches to ensure your mark is available for registration."
  },
  {
    title: "Expert Guidance",
    description: "Our attorneys provide personalized advice based on your specific business needs."
  },
  {
    title: "Full Protection",
    description: "We help protect your intellectual property rights across multiple jurisdictions."
  },
  {
    title: "Ongoing Support",
    description: "From application to renewal, we provide continuous support for your trademark portfolio."
  }
]

export const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Senior IP Attorney",
    experience: "15+ years experience",
    education: "Harvard Law School",
    description: "Specializes in trademark law and intellectual property strategy for businesses of all sizes."
  },
  {
    name: "Michael Chen",
    role: "Patent Attorney",
    experience: "12+ years experience", 
    education: "Stanford Law School",
    description: "Expert in patent prosecution and trademark portfolio management for tech companies."
  },
  {
    name: "Emily Rodriguez",
    role: "Trademark Specialist",
    experience: "8+ years experience",
    education: "UCLA Law School", 
    description: "Focuses on trademark registration and brand protection strategies for startups and SMEs."
  }
]

export const achievements: Achievement[] = [
  {
    number: "5000+",
    label: "Trademarks Registered",
    description: "Successfully registered thousands of trademarks for clients worldwide"
  },
  {
    number: "98%",
    label: "Success Rate",
    description: "Exceptional approval rate for trademark applications we handle"
  },
  {
    number: "24/7",
    label: "Client Support",
    description: "Round-the-clock assistance for all your trademark needs"
  }
]

export const heroContent = {
  title: "About USPTO Legal",
  subtitle: "Your Trusted Partner in Intellectual Property Protection",
  description: "With over a decade of experience in trademark law, we help businesses protect their brands and intellectual property. Our team of expert attorneys and legal professionals is dedicated to providing comprehensive trademark services with a focus on excellence and client satisfaction."
}

export const storyContent = {
  title: "Our Story",
  subtitle: "Building Trust Through Excellence",
  description: "Founded in 2014, USPTO Legal has grown from a small law firm to one of the most trusted names in trademark registration and intellectual property protection. Our journey began with a simple mission: to make trademark registration accessible, affordable, and reliable for businesses of all sizes.",
  additionalText: "Today, we continue to uphold the highest standards of legal excellence while embracing innovative technologies to serve our clients better. Our commitment to transparency, efficiency, and personalized service has earned us the trust of thousands of clients worldwide."
}

export const valuesContent = {
  title: "Our Values",
  subtitle: "The principles that guide everything we do"
}

export const teamContent = {
  title: "Meet Our Team",
  subtitle: "Experienced professionals dedicated to protecting your intellectual property"
}

export const achievementsContent = {
  title: "Our Achievements",
  subtitle: "Proven track record of success in trademark registration and IP protection",
  ctaText: "Ready to protect your brand? Join thousands of satisfied clients who trust us with their intellectual property.",
  ctaButtonText: "Start Your Application"
}