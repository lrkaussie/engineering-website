import { Metadata } from "next"
import { ContactHero } from "@/components/sections/contact/hero"
import { ContactForm } from "@/components/sections/contact/form"
import { ContactLocations } from "@/components/sections/contact/locations"

export const metadata: Metadata = {
  title: "Contact Us | Weaver Design Consulting Engineers",
  description: "Get in touch with Weaver Design Consulting Engineers for your engineering needs.",
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