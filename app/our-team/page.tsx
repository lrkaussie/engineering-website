import { Metadata } from "next"
import { TeamHero } from "@/components/sections/team/hero"
import { TeamGrid } from "@/components/sections/team/team-grid"

export const metadata: Metadata = {
  title: "Our Team | Weaver Design Consulting Engineers",
  description: "Meet the talented professionals at Weaver Design Consulting Engineers.",
}

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <TeamHero />
      <TeamGrid />
    </main>
  )
} 