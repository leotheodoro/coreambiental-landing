"use client"

import { IconBrandWhatsapp } from "@tabler/icons-react"

export function WhatsAppButton() {
  const phoneNumber = "5514998851685" // Format: country code + number without + or spaces
  const message = "Olá! Gostaria de saber mais sobre os serviços da Core Ambiental."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-9999 flex items-center justify-center w-16 h-16 gradient-bg text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      aria-label="Contato via WhatsApp"
    >
      <IconBrandWhatsapp className="w-9 h-9" stroke={1.5} />
    </a>
  )
}

