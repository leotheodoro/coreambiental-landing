import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#A4D500] via-[#8DB800] to-[#5FBD5D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo_branca_vertical.svg"
                alt="Core Ambiental"
                width={200}
                height={80}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Especialistas em soluções ambientais integradas, oferecendo serviços de consultoria com excelência técnica
              e compromisso com a sustentabilidade.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Bauru & Região</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+5514998851685" className="hover:text-white/80 transition-colors">
                  (14) 99885-1685
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:ambientalcore@gmail.com" className="hover:text-white/80 transition-colors break-all">
                  ambientalcore@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
              <Link href="/sobre" className="hover:text-white/80 transition-colors">
                Sobre Nós
              </Link>
              <Link href="/servicos" className="hover:text-white/80 transition-colors">
                Serviços
              </Link>
              <Link href="/informacoes" className="hover:text-white/80 transition-colors">
                Informações
              </Link>
            </nav>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.facebook.com/people/Core-Ambiental/61563403049674/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/coreambiental/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/core-ambiental/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>
            © {currentYear}. Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/leonardo-theodoro/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-medium"
            >
              Leonardo Theodoro
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
