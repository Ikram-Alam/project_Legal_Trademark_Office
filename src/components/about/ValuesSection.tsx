import { Card, CardContent } from "@/components/ui/card"

interface Value {
  title: string
  description: string
  icon: string
}

interface ValuesProps {
  title: string
  subtitle: string
  values: Value[]
}

export default function ValuesSection({ title, subtitle, values }: ValuesProps) {
  const iconMap = {
    shield: "🛡️",
    users: "👥", 
    award: "🏆",
    clock: "⏰"
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">
                  {iconMap[value.icon as keyof typeof iconMap] || "⭐"}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}