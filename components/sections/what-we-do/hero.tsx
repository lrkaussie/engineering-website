import Image from "next/image"

export function WhatWeDoHero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/what-we-do-hero.jpg"
          alt="Modern commercial development with integrated amenities"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Engineering Excellence
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Comprehensive engineering solutions for your projects
          </p>
        </div>
      </div>
    </section>
  )
} 