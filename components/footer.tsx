import Image from "next/image"
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a3a52] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-15 h-15">
                <Image
                  src={"../../smallLogo.png"}
                  alt="Narayan Traders Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Narayan Traders</h3>
                <p className="text-xs text-gray-300">Interior Design</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              We make your imagination true. Premium PVC boards and interior solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-gray-300" />
                <a href="tel:+916206950933" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 6206950933 (Jitendra Kumar)
                </a>
              </div>
              <div className="flex gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-gray-300" />
                <a
                  href="mailto:info@narayantraders.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  info@narayantraders.com
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 text-gray-300" />
                <p className="text-gray-300 text-sm">
                  Bazar Samiti Main Gate
                  <br />
                  Sitamarhi – 843302, Bihar
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-300 text-sm">
            © {currentYear} Narayan Traders. All rights reserved. | Premium PVC Boards & Interior Design Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
