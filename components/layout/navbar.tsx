"use client"

import Link from "next/link"
import { navLinks } from "@/config/site"
import { MobileMenu } from "@/components/layout/mobile-menu"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <Link href="/" className="flex items-center">
          <div className="text-accent font-bold text-2xl md:text-3xl lg:text-4xl">Adams</div>
          <span className="sr-only">Adams Engineering</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-accent hover:text-base-light transition-colors text-sm lg:text-base font-medium"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <MobileMenu />
      </div>
    </header>
  )
}

