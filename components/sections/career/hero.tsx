import { Button } from "@/components/ui/button"

export function CareerHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Be part of a dynamic team that shapes the future of engineering
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/50" />
    </section>
  )
} 