import { services } from "@/config/site"
import { ServiceCard } from "@/components/ui/service-card"

export function ServicesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Engineering Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            We provide comprehensive engineering solutions across various sectors, delivering innovative and sustainable
            designs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

