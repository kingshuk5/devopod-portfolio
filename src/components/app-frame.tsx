"use client"

import { useState } from "react"
// import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"

interface AppFrameProps {
  screenshots: string[]
}

export function AppFrame({ screenshots }: AppFrameProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative w-[300px] mx-auto">
      {/* Mobile Frame */}
      <div className="relative w-[300px] h-[600px] rounded-[3rem] border-8 border-gray-800 overflow-hidden shadow-xl">
        {/* Screen Content */}
        <div className="relative w-full h-full overflow-hidden bg-white">
          <img
            src={screenshots[currentIndex] || "/placeholder.svg"}
            alt="App screenshot"
            width={300}
            height={600}
            className="object-cover"
            // priority
          />
        </div>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl" />
      </div>

      {/* Navigation Buttons */}
      {screenshots.length > 1 && (
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
          <button 
            // variant="secondary" 
            // size="icon" 
            className="rounded-full" onClick={prevSlide}>
            <ChevronLeft className="h-5 w-5 text-black bg-white/40 rounded-full" />
          </button>
          <button 
            // variant="secondary" 
            // size="icon" 
            className="rounded-full" onClick={nextSlide}>
            <ChevronRight className="h-5 w-5 text-black bg-white/40 rounded-full" />
          </button>
        </div>
      )}

      {/* Dots */}
      {screenshots.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

