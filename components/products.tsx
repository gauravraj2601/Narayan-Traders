"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "PVC Wall Panels",
    description: "Modern wall panels for stunning interior aesthetics",
    image: "/pvc-wall-panels-interior-design.jpg",
  },
  {
    id: 2,
    name: "False Ceiling Panels",
    description: "Elegant false ceiling solutions for modern spaces",
    image: "/false-ceiling-pvc-panels.jpg",
  },
  {
    id: 3,
    name: "Decorative Boards",
    description: "Artistic decorative boards for unique interiors",
    image: "/decorative-pvc-boards-design.jpg",
  },
  {
    id: 4,
    name: "Modular Furniture Panels",
    description: "Versatile modular solutions for flexible spaces",
    image: "/modular-furniture-pvc-panels.jpg",
  },
  {
    id: 5,
    name: "Designer Laminates",
    description: "Premium laminates with contemporary designs",
    image: "/designer-laminates-interior.jpg",
  },
  {
    id: 6,
    name: "Custom Interior Solutions",
    description: "Bespoke designs tailored to your vision",
    image: "/custom-interior-design-solutions.jpg",
  },
]

export default function Products() {
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
    <section id="products" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">Our Products</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of premium PVC boards and interior solutions
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="fade-in-up hover-lift bg-white rounded-lg overflow-hidden shadow-md border border-gray-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a3a52] mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="inline-flex items-center gap-2 text-[#1a3a52] font-semibold hover:gap-3 transition-all duration-200">
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
