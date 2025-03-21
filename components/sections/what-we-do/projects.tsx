import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Commercial Building Design",
    description: "Structural engineering and design for a modern office complex",
    image: "/images/projects/commercial-building.jpg",
    category: "Structural",
  },
  {
    title: "Bridge Construction",
    description: "Civil engineering and project management for a major bridge project",
    image: "/images/projects/bridge.jpg",
    category: "Civil",
  },
  {
    title: "Industrial Facility",
    description: "Complete engineering solutions for an industrial manufacturing facility",
    image: "/images/projects/industrial.jpg",
    category: "Industrial",
  },
]

export function ProjectsSection() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful engineering projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary-dark text-white transition-colors"
            asChild
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 