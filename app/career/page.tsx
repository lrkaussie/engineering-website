import { Metadata } from "next"
import { CareerHero } from "@/components/sections/career/hero"
import { ValuesSection } from "@/components/sections/career/values"
import { EmployeeOwnedSection } from "@/components/sections/career/employee-owned"
import { GraduateSection } from "@/components/sections/career/graduate"
import { OpportunitiesSection } from "@/components/sections/career/opportunities"
import { JoinTeamSection } from "@/components/sections/career/join-team"

export const metadata: Metadata = {
  title: "Careers | Weaver Design Consulting Engineers",
  description: "Join our team at Weaver Design Consulting Engineers and be part of innovative engineering solutions.",
}

export default function CareerPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <CareerHero />
      <ValuesSection />
      <EmployeeOwnedSection />
      <GraduateSection />
      <OpportunitiesSection />
      <JoinTeamSection />
    </main>
  )
} 