import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Weaver</h3>
            <p className="text-sm text-slate-300 mb-4">STRUCTURAL AND CIVIL ENGINEERING</p>
            <p className="text-slate-400">
              Professional engineering services delivering innovative and sustainable solutions for projects of all
              sizes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-orange-400 transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/structural" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Structural Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/civil" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/project-management"
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                >
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Design Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                <span className="text-slate-400">
                  Unit 7/40D Wallace Ave
                  <br />
                  Point Cook VIC 3030
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3" />
                <span className="text-slate-400">03 9959 8890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3" />
                <a href="mailto:info@weaverdesigns.com.au" className="text-slate-400 hover:text-orange-400 transition-colors">
                  info@weaverdesigns.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Weaver Design Consulting Engineers. All rights reserved.</p>
            <span className="hidden md:inline text-slate-600">•</span>
            <a href="https://www.buzzingbeetech.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent text-sm transition-colors">
              Website by Buzzing Bee Tech
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

