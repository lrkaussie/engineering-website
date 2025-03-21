import { Button } from "@/components/ui/button"
import { GraduationCap, CheckCircle } from "lucide-react"

const benefits = [
  "Structured mentoring program",
  "Hands-on project experience",
  "Professional development opportunities",
  "Career progression pathways",
  "Competitive salary package",
  "Work-life balance",
]

export function GraduateSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Graduate Program</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Launch your engineering career with our comprehensive graduate program. We provide the perfect environment for fresh graduates to develop their skills and grow into industry leaders.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <Button 
              size="lg" 
              asChild
            >
              <a href="#apply">Apply Now</a>
            </Button>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">2024 Graduate Program</h3>
                <p className="text-xl text-white">Applications Now Open</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 