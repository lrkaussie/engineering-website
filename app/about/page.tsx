import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AboutHero } from "@/components/sections/about/hero"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Company</h2>
              <p className="text-slate-700 mb-4">
                Weaver Design Consulting Engineers is a leading structural and civil engineering consultancy with over 20 years of
                experience in the industry. We specialize in providing innovative engineering solutions for projects of
                all sizes, from residential developments to large commercial and healthcare facilities.
              </p>
              <p className="text-slate-700 mb-4">
                Our team of highly qualified engineers and technical staff are committed to delivering excellence in
                every project we undertake. We pride ourselves on our collaborative approach, working closely with
                clients, architects, and contractors to ensure successful project outcomes.
              </p>
              <p className="text-slate-700">
                With a focus on sustainability and cutting-edge technology, we strive to create designs that are not
                only structurally sound but also environmentally responsible and cost-effective.
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/images/sections/company.jpg"
                alt="Engineering team collaborating on project designs"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These core principles guide our approach to every project and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-500 rounded-md flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-slate-600">
                We are committed to delivering the highest quality engineering solutions that exceed expectations.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-500 rounded-md flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-slate-600">
                We believe in working closely with clients and project teams to achieve the best possible outcomes.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-500 rounded-md flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-slate-600">
                We embrace new technologies and methodologies to deliver innovative solutions to complex engineering
                challenges.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-500 rounded-md flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-slate-600">
                We are committed to environmentally responsible design practices that minimize ecological impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] lg:h-[500px]">
              <Image
                src="/images/sections/approach.jpg"
                alt="Engineering team collaborating on design process and planning"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-slate-700 mb-4">
                At Weaver Design Consulting Engineers, we follow a comprehensive approach to every project, ensuring that all aspects of
                the design process are carefully considered and executed. Our methodology combines technical expertise
                with creative problem-solving to deliver solutions that are both practical and innovative.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Understand</h3>
                    <p className="text-slate-600">
                      We begin by thoroughly understanding the client's requirements and project objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Analyze</h3>
                    <p className="text-slate-600">
                      Our team conducts detailed analysis and feasibility studies to identify optimal solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Design</h3>
                    <p className="text-slate-600">
                      We create comprehensive designs using advanced modeling and simulation tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Deliver</h3>
                    <p className="text-slate-600">
                      We provide ongoing support throughout the construction and implementation phases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Contact our team today to discuss your project requirements and discover how our engineering expertise can
            help bring your vision to life.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

export const metadata = {
  title: "About | Weaver Design Consulting Engineers",
  description: "Learn about Weaver Design Consulting Engineers and our commitment to excellence in engineering solutions.",
};

