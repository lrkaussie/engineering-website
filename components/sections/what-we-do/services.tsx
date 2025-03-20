import { Building, Map, Settings, Shield, Users, Zap, Globe } from "lucide-react"
import { getIconByName } from "@/lib/utils"

const services = [
  {
    title: "Structural Engineering",
    description: "Comprehensive structural analysis and design services for buildings and infrastructure projects.",
    icon: "building",
  },
  {
    title: "Civil Engineering",
    description: "Expert civil engineering solutions for infrastructure, transportation, and development projects.",
    icon: "map",
  },
  {
    title: "Project Management",
    description: "Professional project management services ensuring successful delivery of engineering projects.",
    icon: "settings",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control and assurance processes to maintain the highest standards.",
    icon: "shield",
  },
  {
    title: "Team Collaboration",
    description: "Effective collaboration with clients and stakeholders throughout project lifecycle.",
    icon: "users",
  },
  {
    title: "Innovation",
    description: "Cutting-edge engineering solutions using the latest technologies and methodologies.",
    icon: "zap",
  },
  {
    title: "Global Expertise",
    description: "International engineering experience and knowledge across diverse projects.",
    icon: "globe",
  },
]

export function ServicesSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive engineering solutions tailored to meet your project requirements
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = getIconByName(service.icon)
            return (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 