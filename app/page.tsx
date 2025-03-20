import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProjectsSection } from "@/components/sections/projects-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Animation */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Preview Section */}
      <ProjectsSection />
    </main>
  )
}

