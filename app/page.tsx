import { Navbar } from "@/components/Navbar"
import { SearchBar } from "@/components/Searchbar"
import { FeaturedTools } from "@/components/FeaturedTools"
import { Button } from "@/components/ui/button"
import { AllTools } from "@/components/AllTools"
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to Travel-Assist</h1>
        <p className="text-lg mb-4">
          Your one-stop directory for travel software and tools.
        </p>
        <div className="mb-8">
          <SearchBar />
        </div>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Tools</h2>
          <FeaturedTools />
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">All Travel Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['AI-powered tools for itinerary creation and optimization', 'Real-time translation and language learning for travelers', 'Find and book eco-friendly accommodations worldwide', 'Discover authentic local cuisine and hidden gem restaurants', '', ].map((item) => (
              <div key={item} className="bg-card text-card-foreground rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                <p className="text-muted-foreground mb-4">
                  Description of travel tool or software. This is a placeholder.
                </p>
                <Button variant="outline">Learn More</Button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-muted mt-auto py-4">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          © 2023 Travel-Assist. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

