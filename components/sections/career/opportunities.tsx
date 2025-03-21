import { Button } from "@/components/ui/button"
import { MapPin, Building, Clock } from "lucide-react"

const opportunities = [
  {
    title: "Senior Structural Engineer",
    location: "Sydney, NSW",
    type: "Full Time",
    experience: "5+ years",
    description: "We are seeking an experienced Structural Engineer to join our Sydney team, working on complex commercial and residential projects.",
  },
  {
    title: "Civil Engineer",
    location: "Melbourne, VIC",
    type: "Full Time",
    experience: "3+ years",
    description: "Join our Melbourne office as a Civil Engineer, focusing on infrastructure and development projects across Victoria.",
  },
  {
    title: "Graduate Engineer",
    location: "Multiple Locations",
    type: "Full Time",
    experience: "Graduate",
    description: "Exciting opportunity for recent graduates to join our graduate program and kickstart their engineering career.",
  },
]

export function OpportunitiesSection() {
  return (
    <section className="py-24 bg-gray-50" id="opportunities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our team and be part of exciting projects that shape communities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{job.title}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Building className="w-5 h-5 mr-2" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{job.experience}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{job.description}</p>
              <Button asChild className="w-full">
                <a href="#apply">Apply Now</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 