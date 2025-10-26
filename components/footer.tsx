import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Logo variant="light" />
            </Link>
            <p className="text-sky-100 text-sm">
              Helping you defer capital gains taxes on real estate investments.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sky-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sky-100 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sky-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sky-100 space-y-2">
              <p>2108 N ST STE N</p>
              <p>Sacramento, CA 95816</p>
              <p>Tel: (818) 482-2707</p>
              <p>
                Email:{" "}
                <a href="mailto:info@maximize1031.com" className="hover:text-white transition-colors">
                  info@maximize1031.com
                </a>
              </p>
            </address>

            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-sky-100 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-sky-100 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-sky-100 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-sky-100 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-800 mt-12 pt-6 text-center text-sm text-sky-200">
          <p>&copy; {new Date().getFullYear()} Maximize 1031. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
