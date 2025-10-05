import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Achievement {
  number: string
  label: string
  description: string
}

interface AchievementsProps {
  title: string
  subtitle: string
  achievements: Achievement[]
  ctaText: string
  ctaButtonText: string
}

export default function AchievementsSection({ 
  title, 
  subtitle, 
  achievements, 
  ctaText,
  ctaButtonText 
}: AchievementsProps) {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {achievement.label}
                </h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            {ctaText}
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            {ctaButtonText}
          </Button>
        </div>
      </div>
    </section>
  )
}