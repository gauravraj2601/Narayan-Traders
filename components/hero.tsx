"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/homeImg.png?height=1080&width=1920&query=modern%20interior%20PVC%20wall%20panels%20design)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-3xl mx-auto fade-in-up ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          We make your imagination true
        </h2>
        <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
          High-quality PVC boards and wall panels for modern interiors. Transform your spaces with premium decorative
          solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block bg-[#1a3a52] hover:bg-[#2d5a7b] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover-lift"
          >
            Contact Us
          </a>
          <a
            href="#products"
            className="inline-block bg-white hover:bg-gray-100 text-[#1a3a52] font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover-lift"
          >
            Explore Products
          </a>
        </div>
      </div>
    </section>
  )
}
