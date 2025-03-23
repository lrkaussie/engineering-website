"use client"

import Link from "next/link"
import Image from "next/image"
import { navLinks } from "@/config/site"
import { MobileMenu } from "@/components/layout/mobile-menu"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Weaver Design Consulting Engineers"
            width={500}
            height={250}
            className="h-16 md:h-20 lg:h-24 w-auto"
            priority
          />
          <span className="sr-only">Weaver Design Consulting Engineers</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-900 hover:text-gray-600 transition-colors text-sm lg:text-base font-medium"
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

