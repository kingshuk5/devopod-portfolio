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
                <button
                  key={tech}
                  className=" px-4 py-2 mx-3 overflow-hidden group rounded-xl bg-gradient-to-r from-gray-700 to-black relative hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300"
                >
                  <span
                    className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"
                  ></span>
                  <span className="relative text-xl font-semibold text-slate-400">{tech}</span>
                </button>


                // <div key={tech} className="px-4 py-1 text-sm rounded-full">
                //   {tech}
                // </div>
              ))}
            </div>
            <button 
                // asChild
                className="rounded-xl p-2 group/button relative overflow-hidden">
              <Link href={project.playStoreLink} target="_blank">
              <div className="flex flex-col">
                <span className="relative z-10">View on Play Store</span>
                <span className="text-xs text-slate-200/40">Coming Soon</span>
              </div>
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

