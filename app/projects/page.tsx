import { Metadata } from "next"
import { ProjectsHero } from "@/components/sections/projects/hero"
import { ProjectsGrid } from "@/components/sections/projects/grid"

export const metadata: Metadata = {
  title: "Projects | Weaver Design Consulting Engineers",
  description: "Explore the innovative projects completed by Weaver Design Consulting Engineers.",
}

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ProjectsHero />
      <ProjectsGrid />
    </main>
  )
} 