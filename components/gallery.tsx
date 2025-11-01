"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    title: "Modern Wall Design",
    image: "/modern-pvc-wall-interior-design.jpg",
  },
  {
    id: 2,
    title: "False Ceiling Installation",
    image: "/false-ceiling-installation-modern.jpg",
  },
  {
    id: 3,
    title: "Decorative Panel Setup",
    image: "/decorative-panel-interior-setup.jpg",
  },
  {
    id: 4,
    title: "Modular Furniture Design",
    image: "/modular-furniture-interior-design.jpg",
  },
  {
    id: 5,
    title: "Contemporary Interior",
    image: "/contemporary-interior-design-modern.jpg",
  },
  {
    id: 6,
    title: "Premium Laminate Finish",
    image: "/premium-laminate-interior-finish.jpg",
  },
]

export default function Gallery() {
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
    <section id="gallery" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">Our Gallery</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our completed projects and interior installations
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              className="fade-in-up relative group overflow-hidden rounded-lg shadow-md hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
