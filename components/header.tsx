"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Core Ambiental"
              width={180}
              height={60}
              className="h-12 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`relative pb-1 transition-all ${
                isActive("/") ? "gradient-text font-semibold after:scale-x-100" : "text-foreground hover:gradient-text"
              } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-[#A4D500] after:via-[#5FBD5D] after:to-[#4DD0E1] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className={`relative pb-1 transition-all ${
                isActive("/sobre") ? "gradient-text font-semibold after:scale-x-100" : "text-foreground hover:gradient-text"
              } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-[#A4D500] after:via-[#5FBD5D] after:to-[#4DD0E1] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}
            >
              Sobre Nós
            </Link>
            <Link
              href="/servicos"
              className={`relative pb-1 transition-all ${
                isActive("/servicos") ? "gradient-text font-semibold after:scale-x-100" : "text-foreground hover:gradient-text"
              } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-[#A4D500] after:via-[#5FBD5D] after:to-[#4DD0E1] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}
            >
              Serviços
            </Link>
            <Link
              href="/artigos"
              className={`relative pb-1 transition-all ${
                isActive("/artigos") || pathname?.startsWith("/artigos/")
                  ? "gradient-text font-semibold after:scale-x-100"
                  : "text-foreground hover:gradient-text"
              } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-[#A4D500] after:via-[#5FBD5D] after:to-[#4DD0E1] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}
            >
              Artigos
            </Link>
            <Link
              href="/informacoes"
              className={`relative pb-1 transition-all ${
                isActive("/informacoes")
                  ? "gradient-text font-semibold after:scale-x-100"
                  : "text-foreground hover:gradient-text"
              } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-[#A4D500] after:via-[#5FBD5D] after:to-[#4DD0E1] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300`}
            >
              Informações
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.facebook.com/people/Core-Ambiental/61563403049674/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A4D500] hover:text-[#8DB800] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/coreambiental/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A4D500] hover:text-[#8DB800] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/core-ambiental/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A4D500] hover:text-[#8DB800] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className={`transition-all py-2 ${
                  isActive("/") ? "gradient-text font-semibold border-b-2 border-[#5FBD5D]" : "text-foreground hover:gradient-text"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/sobre"
                className={`transition-all py-2 ${
                  isActive("/sobre") ? "gradient-text font-semibold border-b-2 border-[#5FBD5D]" : "text-foreground hover:gradient-text"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="/servicos"
                className={`transition-all py-2 ${
                  isActive("/servicos")
                    ? "gradient-text font-semibold border-b-2 border-[#5FBD5D]"
                    : "text-foreground hover:gradient-text"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/artigos"
                className={`transition-all py-2 ${
                  isActive("/artigos") || pathname?.startsWith("/artigos/")
                    ? "gradient-text font-semibold border-b-2 border-[#5FBD5D]"
                    : "text-foreground hover:gradient-text"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Artigos
              </Link>
              <Link
                href="/informacoes"
                className={`transition-all py-2 ${
                  isActive("/informacoes")
                    ? "gradient-text font-semibold border-b-2 border-[#5FBD5D]"
                    : "text-foreground hover:gradient-text"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Informações
              </Link>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a
                  href="https://www.facebook.com/people/Core-Ambiental/61563403049674/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A4D500] hover:text-[#8DB800] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/coreambiental/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A4D500] hover:text-[#8DB800] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/core-ambiental/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A4D500] hover:text-[#8DB800] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
