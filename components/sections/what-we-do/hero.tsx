import { cn } from "@/lib/utils"

export function WhatWeDoHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Engineering Excellence
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Comprehensive engineering solutions for your projects
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/50" />
    </section>
  )
} 