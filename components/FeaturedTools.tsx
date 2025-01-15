import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredTools = [
  {
    name: "TripPlanner Pro",
    description: "AI-powered itinerary creation and optimization",
    image: "/trip-plan.jpg?height=300&width=400",
    category: "Planning"
  },
  {
   
    name: "LinguaTravel",
    description: "Real-time translation and language learning for travelers",
    image: "/linguatravel.jpg?height=300&width=400",
    category: "Communication"
  },
  {
    name: "EcoStay",
    description: "Find and book eco-friendly accommodations worldwide",
    image: "/ecostay.jpg?height=300&width=400",
    category: "Accommodation"
  },
  {
    name: "LocalEats Explorer",
    description: "Discover authentic local cuisine and hidden gem restaurants",
    image: "/localeats.jpg?height=300&width=400",
    category: "Food & Dining"
  },
  {
    name: "AdventureBuddy",
    description: "Connect with fellow travelers and join group activities",
    image: "/adventure.jpg?height=300&width=400",
    category: "Social"
  },
  {
    name: "SafeJourney",
    description: "Real-time safety alerts and emergency assistance for travelers",
    image: "/safejourney.jpg?height=300&width=400",
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
              width={400}
              height={300}
              className="rounded-lg mx-auto"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

