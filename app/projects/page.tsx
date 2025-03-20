import { Metadata } from "next"
import { ProjectsHero } from "@/components/sections/projects/hero"
import { ProjectsGrid } from "@/components/sections/projects/grid"

export const metadata: Metadata = {
  title: "Projects | Adams Engineering",
  description: "Explore our diverse portfolio of engineering projects across various sectors including commercial, residential, and infrastructure.",
}

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ProjectsHero />
      <ProjectsGrid />
    </main>
  )
} 