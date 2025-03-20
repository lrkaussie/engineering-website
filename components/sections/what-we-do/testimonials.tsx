import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Their expertise in structural engineering helped us achieve our project goals while maintaining the highest safety standards.",
    author: "John Smith",
    role: "Project Manager, Construction Co.",
    rating: 5,
  },
  {
    quote: "The team's attention to detail and professional approach made our project a great success.",
    author: "Sarah Johnson",
    role: "Director, Development Corp.",
    rating: 5,
  },
  {
    quote: "Outstanding civil engineering solutions that exceeded our expectations.",
    author: "Michael Brown",
    role: "CEO, Infrastructure Ltd.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What our clients say about our engineering services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 