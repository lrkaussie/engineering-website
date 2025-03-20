import { MapPin, Phone, Mail } from "lucide-react"

const locations = [
  {
    city: "Melbourne",
    address: "Level 10, 620 Bourke Street",
    suburb: "Melbourne, Victoria, 3000",
    phone: "+61 3 8600 9700",
    email: "admin@adamseng.com.au"
  },
  {
    city: "Sydney",
    address: "4A1, 410 Elizabeth Street",
    suburb: "Surry Hills, NSW 2010",
    phone: "+61 2 9222 9970",
    email: "admin@adamseng.com.au"
  },
  {
    city: "Geelong",
    address: "Suite 6/ 18-20 Riversdale Road",
    suburb: "Newtown, VIC 3220",
    phone: "+61 3 5221 9088",
    email: "admin@adamseng.com.au"
  },
  {
    city: "Ballarat",
    address: "123 Doveton St N",
    suburb: "Ballarat Central VIC 3350",
    phone: "+61 421 673 073",
    email: "ballaratcollective@adamseng.com.au"
  }
]

export function ContactLocations() {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Locations</h2>
          <p className="text-xl text-secondary">
            Find us at any of our offices across Australia
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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