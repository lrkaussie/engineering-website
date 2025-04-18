import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "John Smith",
    role: "Principal Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1000",
    qualifications: "BE (Civil), MIEAust CPEng NER APEC",
    description: "John has over 20 years of experience in structural and civil engineering, leading complex projects across commercial, residential, and infrastructure sectors.",
    linkedin: "https://linkedin.com/in/johnsmith",
    email: "john.smith@weaverdesigns.com.au",
  },
  {
    name: "Sarah Johnson",
    role: "Senior Structural Engineer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000",
    qualifications: "BE (Structural), PhD, MIEAust",
    description: "Sarah specializes in advanced structural analysis and has led numerous high-rise and complex building projects.",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    email: "sarah.johnson@weaverdesigns.com.au",
  },
  {
    name: "Michael Chen",
    role: "Civil Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=1000",
    qualifications: "BE (Civil), ME (Geotechnical), CPEng",
    description: "Michael brings extensive experience in civil and geotechnical engineering, specializing in infrastructure projects.",
    linkedin: "https://linkedin.com/in/michaelchen",
    email: "michael.chen@weaverdesigns.com.au",
  },
  {
    name: "Emma Wilson",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800&h=1000",
    qualifications: "BE (Civil & Structural)",
    description: "Emma focuses on delivering innovative solutions for commercial and residential projects, with expertise in sustainable design.",
    linkedin: "https://linkedin.com/in/emmawilson",
    email: "emma.wilson@weaverdesigns.com.au",
  },
]

export function TeamGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.qualifications}</p>
                <p className="text-gray-700 mb-6">{member.description}</p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center"
                    asChild
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 