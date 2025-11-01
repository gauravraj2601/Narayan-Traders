"use client"

import Image from "next/image"

export default function WhatsAppButton() {
  const phoneNumber = "916206950933"
  const message = "Hello! I am interested in your PVC boards and interior solutions."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover-lift z-40 transition-all duration-300"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <Image
        src="../../whatsapp.png"  
        alt="Narayan Traders Interior Solutions"
        width={40}
        height={40}
        className="w-12 h-12" 
      />
    </button>
  )
}
