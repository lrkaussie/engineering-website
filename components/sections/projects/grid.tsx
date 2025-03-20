"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type Project = {
  id: number
  title: string
  category: string
  location: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Commercial Tower Development",
    category: "Commercial",
    location: "Sydney CBD",
    description: "A 40-story commercial tower featuring state-of-the-art structural design and sustainable engineering solutions.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Residential Complex",
    category: "Residential",
    location: "Melbourne",
    description: "Modern residential development with innovative structural solutions and sustainable design features.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Infrastructure Bridge Project",
    category: "Infrastructure",
    location: "Brisbane",
    description: "Major bridge infrastructure project connecting communities with cutting-edge engineering.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Healthcare Facility",
    category: "Healthcare",
    location: "Perth",
    description: "State-of-the-art healthcare facility designed with advanced engineering solutions.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const categories = ["All", "Commercial", "Residential", "Infrastructure", "Healthcare"]

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-orange-500 hover:bg-orange-600" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{project.location}</p>
                <p className="text-gray-700">{project.description}</p>
                <Button 
                  className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white"
                  asChild
                >
                  <a href={`/projects/${project.id}`}>View Project</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 