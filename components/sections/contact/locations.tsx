import { MapPin, Phone, Mail } from "lucide-react"

const locations = [
  {
    city: "Melbourne",
    address: "Unit 7/40D Wallace Ave",
    suburb: "Point Cook VIC 3030",
    phone: "03 9959 8890",
    email: "info@weaverdesigns.com.au"
  }
]

export function ContactLocations() {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Location</h2>
          <p className="text-xl text-secondary">
            Visit us at our office
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 max-w-lg mx-auto">
          {locations.map((location) => (
            <div 
              key={location.city}
              className="bg-base-light p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-primary mr-2" />
                <h3 className="text-xl font-bold text-primary">{location.city}</h3>
              </div>
              <div className="space-y-4">
                <p className="text-secondary">
                  {location.address}<br />
                  {location.suburb}
                </p>
                <div className="flex items-center text-secondary">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href={`tel:${location.phone}`} className="hover:text-primary">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center text-secondary">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href={`mailto:${location.email}`} className="hover:text-primary">
                    {location.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 