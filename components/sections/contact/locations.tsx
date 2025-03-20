import { MapPin, Phone, Mail } from "lucide-react"

const locations = [
  {
    city: "Melbourne",
    address: "Level 1, 171 Collins Street",
    suburb: "Melbourne VIC 3000",
    phone: "+61 3 9111 2222",
    email: "melbourne@adamseng.com.au"
  },
  {
    city: "Sydney",
    address: "Level 10, 50 Bridge Street",
    suburb: "Sydney NSW 2000",
    phone: "+61 2 9111 2222",
    email: "sydney@adamseng.com.au"
  },
  {
    city: "Geelong",
    address: "Level 2, 10 Moorabool Street",
    suburb: "Geelong VIC 3220",
    phone: "+61 3 5222 1111",
    email: "geelong@adamseng.com.au"
  },
  {
    city: "Ballarat",
    address: "15 Lydiard Street North",
    suburb: "Ballarat VIC 3350",
    phone: "+61 3 5333 1111",
    email: "ballarat@adamseng.com.au"
  }
]

export function ContactLocations() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
          <p className="text-xl text-gray-600">
            Find us at any of our offices across Australia
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location) => (
            <div 
              key={location.city}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                <h3 className="text-xl font-bold">{location.city}</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  {location.address}<br />
                  {location.suburb}
                </p>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href={`tel:${location.phone}`} className="hover:text-orange-500">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href={`mailto:${location.email}`} className="hover:text-orange-500">
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