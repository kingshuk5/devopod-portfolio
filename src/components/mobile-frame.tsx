"use client"

import { useState } from "react"
import Image from "next/image"
// import { cn } from "@/lib/utils"

interface MobileFrameProps {
  screenshots: string[]
  className?: string
}

export function MobileFrame({ screenshots, className }: MobileFrameProps) {
  const [currentIndex] = useState(0)

  return (
    <div className={`relative w-full max-w-[375px] mx-auto ${className}`}>
      {/* Phone Frame */}
      <div className="relative w-full aspect-[9/19] rounded-[3rem] border-[14px] border-gray-900 overflow-hidden  shadow-xl">
        {/* Status Bar */}
        <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-black rounded-full" />
        </div>

        {/* Screen Content */}
        <div className="relative w-full h-full overflow-hidden bg-black">
          <Image
            src={screenshots[currentIndex] || "/placeholder.svg"}
            alt="App screenshot"
            fill
            className="object-cover "
            priority
          />
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-900 rounded-full" />
      </div>

      {/* Reflections */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
    </div>
  )
}

