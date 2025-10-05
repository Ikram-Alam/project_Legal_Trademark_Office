import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
  name: string
  role: string
  experience: string
  education: string
  description: string
}

interface TeamProps {
  title: string
  subtitle: string
  members: TeamMember[]
}

export default function TeamSection({ title, subtitle, members }: TeamProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-2xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2 text-center">
                  {member.role}
                </p>
                <div className="text-sm text-gray-600 mb-3 text-center">
                  <div>{member.experience}</div>
                  <div>{member.education}</div>
                </div>
                <p className="text-gray-600 text-center">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}