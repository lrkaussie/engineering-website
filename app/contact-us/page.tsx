import { Metadata } from "next"
import { ContactHero } from "@/components/sections/contact/hero"
import { ContactForm } from "@/components/sections/contact/form"
import { ContactLocations } from "@/components/sections/contact/locations"

export const metadata: Metadata = {
  title: "Contact Us | Adams Engineering",
  description: "Get in touch with Adams Engineering. Find our office locations and contact details, or send us a message.",
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContactHero />
      <ContactForm />
      <ContactLocations />
    </main>
  )
} 