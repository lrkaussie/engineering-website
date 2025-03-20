import Image from "next/image"

export function EmployeeOwnedSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Team collaboration"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Life at Adams Engineering
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                At Adams Engineering, we believe in fostering a collaborative and innovative environment where every team member can thrive and make a meaningful impact.
              </p>
              <p>
                Our employee-owned culture means that every team member has a stake in our success and contributes to our shared vision of excellence in engineering.
              </p>
              <p>
                We invest in our people through continuous professional development, mentoring programs, and opportunities to work on diverse and challenging projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 