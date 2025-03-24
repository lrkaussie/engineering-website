"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import TypewriterText from "./typewriter-text"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/layout/mobile-menu"

export default function AnimatedHero() {
  const [loaded, setLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Engineering specialties for the typewriter effect
  const engineeringPhrases = ["Civil Engineers", "Structural Engineers", "Consulting Engineers", "Design Engineers"]

  useEffect(() => {
    setLoaded(true)

    // Add staggered animation to panels
    const panels = document.querySelectorAll(".hero-panel")
    panels.forEach((panel, index) => {
      setTimeout(() => {
        panel.classList.add("panel-active")
      }, 100 * index)
    })
  }, [])

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return

    const { clientX, clientY } = e
    const { width, height } = heroRef.current.getBoundingClientRect()

    // Calculate mouse position as percentage of container
    const x = (clientX / width) * 100
    const y = (clientY / height) * 100

    setMousePosition({ x, y })
  }

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Building construction"
          fill
          className="object-cover"
          priority
          style={{
            transform: `scale(1.05) translate(${(mousePosition.x - 50) * -0.02}%, ${(mousePosition.y - 50) * -0.02}%)`,
            transition: "transform 0.2s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Animated Panels */}
      <div className="absolute inset-0 z-10 flex">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className={`hero-panel flex-1 bg-slate-800/80 transform translate-y-full transition-transform duration-1000 ease-out ${loaded ? "panel-active" : ""}`}
            style={{
              transitionDelay: `${index * 100}ms`,
              opacity: 0.7 + (index % 3) * 0.1, // Varying opacity for visual interest
              transform: loaded
                ? `translateY(0) translateX(${((mousePosition.x - 50) * 0.03 * (index - 6)) / 3}px)`
                : "translateY(100%)",
            }}
          />
        ))}
      </div>

      {/* Large "5" Graphic Element */}
      <div
        className="absolute right-0 bottom-0 text-slate-700/20 text-[40rem] font-bold leading-none z-10 select-none overflow-hidden"
        style={{
          transform: `translate(${(mousePosition.x - 50) * 0.05}px, ${(mousePosition.y - 50) * 0.05}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        5
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Navigation */}
        <header className="w-full py-6 px-4 md:px-8">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="text-orange-500 font-bold text-3xl md:text-4xl">Weaver Design Consulting Engineers</div>
              <span className="sr-only">Weaver Design Consulting Engineers</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/about" className="text-white hover:text-orange-400 transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-white hover:text-orange-400 transition-colors">
                What We Do
              </Link>
              <Link href="/team" className="text-white hover:text-orange-400 transition-colors">
                Our Team
              </Link>
              <Link href="/career" className="text-white hover:text-orange-400 transition-colors">
                Career
              </Link>
              <Link href="/projects" className="text-white hover:text-orange-400 transition-colors">
                Projects
              </Link>
              <Link href="/contact-us" className="text-white hover:text-orange-400 transition-colors">
                Contact Us
              </Link>
            </nav>
            <MobileMenu />
          </div>
        </header>

        {/* Hero Content */}
        <div className="container mx-auto flex-1 flex flex-col justify-center px-4 md:px-8">
          <div className="max-w-3xl">
            <div
              className="text-white text-lg md:text-xl mb-4 opacity-0 animate-fadeIn"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              WEAVER DESIGN CONSULTING ENGINEERS
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span
                className="block opacity-0 animate-slideUp"
                style={{ animationDelay: "1s", animationFillMode: "forwards" }}
              >
                We are
              </span>
              <div
                className="flex items-center opacity-0 animate-fadeIn"
                style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
              >
                <div className="text-orange-500 min-h-[3rem] md:min-h-[4.5rem]">
                  <TypewriterText
                    phrases={engineeringPhrases}
                    typingSpeed={100}
                    deletingSpeed={50}
                    delayAfterPhrase={3000}
                    delayAfterDelete={500}
                  />
                </div>
                <span className="text-orange-500 ml-4 inline-block">|</span>
              </div>
            </h1>
            <p
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl opacity-0 animate-fadeIn"
              style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
            >
              At Weaver Design Consulting Engineers, we use our engineering expertise, collaborative abilities, and advanced
              industry technology to bring designs to life, from small residential developments to large commercial,
              retail, and health projects.
            </p>
            <div
              className="mt-8 opacity-0 animate-fadeIn"
              style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
            >
              <Button asChild>
                <Link href="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

