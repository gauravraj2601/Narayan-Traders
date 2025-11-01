"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-10 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <div className="fade-in-up">
            <Image
              src="/pvc-interior-wall-panels-installation.jpg"
              alt="Narayan Traders Interior Solutions"
              width={500}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div className="fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-6">About Narayan Traders</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Narayan Traders is your trusted interior design partner in Sitamarhi, offering premium-quality PVC boards
              for interior walls, ceilings, modular furniture, and decorative solutions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our products combine durability, elegance, and affordability to make your spaces truly inspiring. With
              years of experience in the interior design industry, we understand your vision and bring it to life with
              precision and quality.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1a3a52]">
                <h3 className="font-bold text-[#1a3a52] mb-2">Premium Quality</h3>
                <p className="text-sm text-gray-600">Durable and long-lasting materials</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1a3a52]">
                <h3 className="font-bold text-[#1a3a52] mb-2">Affordable Pricing</h3>
                <p className="text-sm text-gray-600">Best value for your investment</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1a3a52]">
                <h3 className="font-bold text-[#1a3a52] mb-2">Expert Design</h3>
                <p className="text-sm text-gray-600">Professional interior solutions</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#1a3a52]">
                <h3 className="font-bold text-[#1a3a52] mb-2">Custom Solutions</h3>
                <p className="text-sm text-gray-600">Tailored to your needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
