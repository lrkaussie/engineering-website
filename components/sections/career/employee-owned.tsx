import Image from "next/image"

export function EmployeeOwnedSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/images/sections/employee-owned-blurred.jpg"
              alt="Diverse team collaborating in modern office environment, showcasing our employee-owned culture"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Employee-Owned Company
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                At Weaver Design Consulting Engineers, we believe in empowering our employees through ownership. As an employee-owned company, we foster a culture of innovation, collaboration, and shared success.
              </p>
              <p>
                When you join Weaver Design Consulting Engineers, you become part of a team that values your contributions and invests in your growth. Our employee-ownership model ensures that everyone has a stake in our success and is motivated to deliver excellence in every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 