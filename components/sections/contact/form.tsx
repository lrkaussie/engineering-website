"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  return (
    <section className="py-24 bg-base-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Send Us a Message</h2>
            <p className="text-xl text-secondary">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-primary">First Name</Label>
                <Input id="firstName" placeholder="Enter your first name" required className="border-secondary focus:border-primary" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-primary">Last Name</Label>
                <Input id="lastName" placeholder="Enter your last name" required className="border-secondary focus:border-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email address" required className="border-secondary focus:border-primary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-primary">Phone</Label>
              <Input id="phone" type="tel" placeholder="Enter your phone number" required className="border-secondary focus:border-primary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-primary">Subject</Label>
              <Input id="subject" placeholder="What is your message about?" required className="border-secondary focus:border-primary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-primary">Message</Label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                rows={6}
                required
                className="border-secondary focus:border-primary"
              />
            </div>
            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-accent hover:bg-secondary text-primary"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
} 