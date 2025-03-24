import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { featuredProjects } from "@/config/site"

type Props = {
  params: { slug: string }
}

// Get all projects from both featured and main projects
const allProjects = [
  ...featuredProjects,
  {
    title: "Commercial Tower Development",
    description: "A 40-story commercial tower featuring state-of-the-art structural design and sustainable engineering solutions.",
    image: "https://images.unsplash.com/photo-1577587230708-187fdbef4d91?auto=format&fit=crop&q=80&w=1200&h=800",
    slug: "commercial-tower-development",
    location: "Sydney CBD",
    category: "Commercial",
  },
  {
    title: "Residential Complex",
    description: "Modern residential development with innovative structural solutions and sustainable design features.",
    image: "https://images.unsplash.com/photo-1545917992-dea2d782ef46?auto=format&fit=crop&q=80&w=1200&h=800",
    slug: "residential-complex-melbourne",
    location: "Melbourne",
    category: "Residential",
  },
  {
    title: "Infrastructure Bridge Project",
    description: "Major bridge infrastructure project connecting communities with cutting-edge engineering.",
    image: "https://images.unsplash.com/photo-1473615695634-d284ec918736?auto=format&fit=crop&q=80&w=1200&h=800",
    slug: "infrastructure-bridge-brisbane",
    location: "Brisbane",
    category: "Infrastructure",
  },
  {
    title: "Healthcare Facility",
    description: "State-of-the-art healthcare facility designed with advanced engineering solutions.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200&h=800",
    slug: "healthcare-facility-perth",
    location: "Perth",
    category: "Healthcare",
  },
]

export function generateMetadata({ params }: Props): Metadata {
  const project = allProjects.find(p => p.slug === params.slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Weaver Design Consulting Engineers`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = allProjects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              {project.title}
            </h1>
            <p className="text-xl text-white/90">
              {project.location}
            </p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-gray-600 mb-8">
              {project.description}
            </p>
            <Button asChild>
              <a href="/contact-us">Discuss Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 