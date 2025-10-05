interface PageHeroProps {
  title: string
  subtitle: string
  bgGradient?: string
}

export default function PageHero({ 
  title, 
  subtitle, 
  bgGradient = "from-blue-900 to-blue-700" 
}: PageHeroProps) {
  return (
    <section className={`bg-gradient-to-r ${bgGradient} text-white py-20`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}