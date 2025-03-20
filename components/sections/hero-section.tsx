"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useMouseParallax } from "@/hooks/use-mouse-parallax"
import { useTypewriter } from "@/hooks/use-typewriter"
import { useMediaQuery } from "@/hooks/use-media-query"
import { engineeringSpecialties } from "@/config/site"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [containerRef, mousePosition] = useMouseParallax<HTMLDivElement>()
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Use the typewriter hook
  const displayText = useTypewriter({
    phrases: engineeringSpecialties,
    typingSpeed: 100,
    deletingSpeed: 50,
    delayAfterPhrase: 3000,
    delayAfterDelete: 500,
  })

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

  return (
    <div ref={containerRef} className="relative h-[100svh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Building construction"
          fill
          className="object-cover"
          priority
          style={{
            transform: isMobile
              ? "scale(1.05)"
              : `scale(1.05) translate(${(mousePosition.x - 50) * -0.02}%, ${(mousePosition.y - 50) * -0.02}%)`,
            transition: "transform 0.2s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Animated Panels */}
      <div className="absolute inset-0 z-10 flex">
        {Array.from({ length: isMobile ? 6 : 12 }).map((_, index) => (
          <div
            key={index}
            className={`hero-panel flex-1 bg-slate-800/80 transform translate-y-full transition-transform duration-1000 ease-out ${loaded ? "panel-active" : ""}`}
            style={{
              transitionDelay: `${index * 100}ms`,
              opacity: 0.7 + (index % 3) * 0.1, // Varying opacity for visual interest
              transform: loaded
                ? `translateY(0) ${!isMobile ? `translateX(${((mousePosition.x - 50) * 0.03 * (index - (isMobile ? 3 : 6))) / 3}px)` : ""}`
                : "translateY(100%)",
            }}
          />
        ))}
      </div>

      {/* Large "5" Graphic Element */}
      <div
        className="absolute right-0 bottom-0 text-slate-700/20 text-[20rem] md:text-[30rem] lg:text-[40rem] font-bold leading-none z-10 select-none overflow-hidden"
        style={{
          transform: isMobile
            ? "none"
            : `translate(${(mousePosition.x - 50) * 0.05}px, ${(mousePosition.y - 50) * 0.05}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        5
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Hero Content */}
        <div className="container mx-auto flex-1 flex flex-col justify-center px-4 md:px-8">
          <div className="max-w-3xl">
            <div
              className="text-white text-base sm:text-lg md:text-xl mb-3 md:mb-4 opacity-0 animate-fadeIn"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              ADAMS ENGINEERING
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
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
                <div className="text-orange-500 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] lg:min-h-[4.5rem]">
                  <span className="whitespace-nowrap">{displayText}</span>
                </div>
                <span className="text-orange-500 ml-2 md:ml-4 inline-block">|</span>
              </div>
            </h1>
            <p
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl opacity-0 animate-fadeIn"
              style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
            >
              At Adams Consulting Engineers, we use our engineering expertise, collaborative abilities, and advanced
              industry technology to bring designs to life, from small residential developments to large commercial,
              retail, and health projects.
            </p>
            <div
              className="mt-6 md:mt-8 opacity-0 animate-fadeIn"
              style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
            >
              <Link
                href="/services"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md transition-colors text-sm md:text-base"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

