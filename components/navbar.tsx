"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Logo from "./logo"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors">
              Learn About 1031 Exchanges
            </Link>
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white ml-4">
              <Link href="/#contact">CONTACT</Link>
            </Button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="block text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn About 1031 Exchanges
            </Link>
            <Button asChild className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                CONTACT
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
