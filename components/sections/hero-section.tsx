"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTextAnimation } from "@/hooks/use-text-animation"
import { useMediaQuery } from "@/hooks/use-media-query"
import styles from "@/styles/text-animation.module.css"

const animatedPhrases = [
  "Structural Engineers",
  "Civil Engineers",
  "Designing the Future",
]

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const { text: animatedText, isTyping } = useTextAnimation(animatedPhrases, {
    typingSpeed: 80,
    deletingSpeed: 40,
    delayAfterPhrase: 2500,
    delayAfterDelete: 400,
  })

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="relative h-[100svh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/home-hero.jpg"
          alt="Modern architectural masterpiece showcasing engineering excellence with geometric patterns and innovative design"
          fill
          className="object-cover"
          priority
          style={{
            transform: "scale(1.05)",
            transition: "transform 0.2s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Hero Content */}
        <div className="container mx-auto flex-1 flex flex-col justify-center px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="text-accent text-base sm:text-lg md:text-xl mb-3 md:mb-4 opacity-0 animate-fadeIn font-medium tracking-wider"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              WEAVER DESIGN CONSULTING ENGINEERS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-accent">Weaver Design</span>
              <br />
              <span 
                className="relative inline-block"
                style={{
                  minHeight: '1.2em',
                  width: isMobile ? '100%' : 'auto',
                  minWidth: isMobile ? 'auto' : '16ch',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <span 
                  className={`${styles.animatedText} ${isTyping ? styles.cursor : ''}`}
                  style={{
                    opacity: animatedText.length === 0 ? 0 : 1,
                    minWidth: '2px'  // Ensures there's always at least cursor width
                  }}
                >
                  {animatedText || '\u00A0'}
                </span>
              </span>
            </h1>
            <p
              className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl opacity-0 animate-fadeIn mx-auto"
              style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
            >
              At Weaver Design Consulting Engineers, we use our engineering expertise, collaborative abilities, and advanced
              industry technology to bring designs to life, from small residential developments to large commercial,
              retail, and health projects.
            </p>
            <div
              className="mt-6 md:mt-8 opacity-0 animate-fadeIn"
              style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
            >
              <Button asChild size="lg">
                <Link href="/contact-us">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

