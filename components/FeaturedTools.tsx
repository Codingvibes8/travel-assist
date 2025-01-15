import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredTools = [
  {
    name: "TripPlanner Pro",
    description: "AI-powered itinerary creation and optimization",
    image: "/placeholder.svg?height=100&width=100",
    category: "Planning"
  },
  {
    name: "LinguaTravel",
    description: "Real-time translation and language learning for travelers",
    image: "/placeholder.svg?height=100&width=100",
    category: "Communication"
  },
  {
    name: "EcoStay",
    description: "Find and book eco-friendly accommodations worldwide",
    image: "/placeholder.svg?height=100&width=100",
    category: "Accommodation"
  },
  {
    name: "LocalEats Explorer",
    description: "Discover authentic local cuisine and hidden gem restaurants",
    image: "/placeholder.svg?height=100&width=100",
    category: "Food & Dining"
  },
  {
    name: "AdventureBuddy",
    description: "Connect with fellow travelers and join group activities",
    image: "/placeholder.svg?height=100&width=100",
    category: "Social"
  },
  {
    name: "SafeJourney",
    description: "Real-time safety alerts and emergency assistance for travelers",
    image: "/placeholder.svg?height=100&width=100",
    category: "Safety"
  }
]

export function FeaturedTools() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredTools.map((tool) => (
        <Card key={tool.name}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {tool.name}
              <Badge variant="secondary">{tool.category}</Badge>
            </CardTitle>
            <CardDescription>{tool.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={tool.image || "/placeholder.svg"}
              alt={tool.name}
              width={100}
              height={100}
              className="rounded-lg mx-auto"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

