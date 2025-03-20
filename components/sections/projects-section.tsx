import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { featuredProjects } from "@/config/site"
import { ProjectCard } from "@/components/ui/project-card"

export function ProjectsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Featured Projects</h2>
            <p className="text-slate-600 max-w-2xl text-sm md:text-base">
              Explore our portfolio of successful engineering projects across various sectors.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 mt-4 md:mt-0 text-sm md:text-base"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

