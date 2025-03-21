import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function JoinTeamSection() {
  return (
    <section className="py-24 bg-white" id="apply">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg text-gray-600">
              Take the next step in your career with Weaver Design Consulting Engineers
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="Enter your phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Input id="position" placeholder="Position you're applying for" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Cover Letter</Label>
              <Textarea
                id="message"
                placeholder="Tell us about yourself and why you'd like to join our team"
                rows={6}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume">Resume/CV</Label>
              <Input id="resume" type="file" className="cursor-pointer" />
            </div>
            <Button 
              type="submit" 
              size="lg"
              className="w-full"
            >
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
} 