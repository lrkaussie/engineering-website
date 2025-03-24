"use client"
import Link from "next/link"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-slate-900 flex flex-col">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white">
          <X className="h-6 w-6" />
          <span className="sr-only">Close menu</span>
        </button>
      </div>
      <nav className="flex-1 flex flex-col justify-center items-center space-y-8 p-4">
        <Link href="/about" className="text-white text-2xl hover:text-orange-400 transition-colors" onClick={onClose}>
          About Us
        </Link>
        <Link
          href="/services"
          className="text-white text-2xl hover:text-orange-400 transition-colors"
          onClick={onClose}
        >
          What We Do
        </Link>
        <Link href="/team" className="text-white text-2xl hover:text-orange-400 transition-colors" onClick={onClose}>
          Our Team
        </Link>
        <Link href="/career" className="text-white text-2xl hover:text-orange-400 transition-colors" onClick={onClose}>
          Career
        </Link>
        <Link
          href="/projects"
          className="text-white text-2xl hover:text-orange-400 transition-colors"
          onClick={onClose}
        >
          Projects
        </Link>
        <Link href="/contact-us" className="text-white text-2xl hover:text-orange-400 transition-colors" onClick={onClose}>
          Contact Us
        </Link>
      </nav>
    </div>
  )
}

