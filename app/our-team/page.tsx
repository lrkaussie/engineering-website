import { Metadata } from "next"
import { TeamHero } from "@/components/sections/team/hero"
import { TeamGrid } from "@/components/sections/team/team-grid"

export const metadata: Metadata = {
  title: "Our Team | Adams Engineering",
  description: "Meet our expert team of engineers, designers, and professionals at Adams Engineering.",
}

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <TeamHero />
      <TeamGrid />
    </main>
  )
} 