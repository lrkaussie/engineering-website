"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"
import { navLinks } from "@/config/site"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className="relative md:hidden text-white bg-black/60 backdrop-blur-md p-2.5 rounded-lg hover:bg-black/70 transition-all shadow-lg border border-white/10 active:scale-95" 
        onClick={() => setIsOpen(true)} 
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999]" 
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-x-0 top-4 flex justify-center z-[1000]">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl">
              <div className="flex justify-end p-4">
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-black bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-all active:scale-95" 
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col py-4 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-gray-900 hover:text-orange-600 transition-colors px-4 py-3.5 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}

