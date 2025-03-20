import { Metadata } from "next"
import { WhatWeDoHero } from "@/components/sections/what-we-do/hero"
import { ServicesSection } from "@/components/sections/what-we-do/services"
import { ProjectsSection } from "@/components/sections/what-we-do/projects"
import { TestimonialsSection } from "@/components/sections/what-we-do/testimonials"

export const metadata: Metadata = {
  title: "What We Do | Engineering Services",
  description: "Explore our comprehensive engineering services including structural engineering, civil engineering, and project management solutions.",
}

export default function WhatWeDoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <WhatWeDoHero />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
    </main>
  )
} 