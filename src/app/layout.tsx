import type React from "react"
import "@/app/globals.css"
import { Outfit, Space_Grotesk } from "next/font/google"
import type { Metadata } from "next"

// Modern sans-serif for headings
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

// Unique font for body text
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Devopod - Flutter App Development",
  description: "Portfolio of beautiful and functional Flutter applications by Devopod",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable} `}>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}

