"use client"

import Link from "next/link"
// import { MobileFrame } from "@/components/mobile-frame"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { AppFrame } from "./app-frame"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    technologies: string[]
    screenshots: string[]
    playStoreLink: string
    color: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white/5 relative rounded-3xl p-8 hover:bg-muted/50 transition-colors">
      <div
        className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl"
        style={{
          backgroundImage: `linear-gradient(to right, ${project.color})`,
        }}
      />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3
              className={`text-3xl font-bold mb-4 font-display bg-gradient-to-r ${project.color} text-transparent bg-clip-text`}
            >
              {project.title}
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <div key={tech} className="px-4 py-1 text-sm rounded-full">
                  {tech}
                </div>
              ))}
            </div>
            <button 
                // asChild
                className="rounded-full group/button relative overflow-hidden">
              <Link href={project.playStoreLink} target="_blank">
                <span className="relative z-10">View on Play Store</span>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover/button:opacity-100 transition-opacity`}
                />
              </Link>
            </button>
          </motion.div>
        </div>
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <AppFrame screenshots={project.screenshots} />
        </motion.div>
      </div>
    </div>
  )
}

