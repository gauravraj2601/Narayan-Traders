import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Narayan Traders - Premium PVC Boards & Interior Design Solutions",
  description:
    "Premium quality PVC boards, wall panels, false ceilings, and modular furniture for modern interiors in Sitamarhi, Bihar. We make your imagination true.",
  keywords:
    "PVC boards Sitamarhi, interior wall panels, false ceiling materials, modular furniture, decorative boards, interior design solutions",
  generator: "v0.app",
  openGraph: {
    title: "Narayan Traders - Premium PVC Boards & Interior Design",
    description: "Transform your spaces with premium PVC boards and interior solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
