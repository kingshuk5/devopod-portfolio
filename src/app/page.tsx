"use client"

import { MobileFrame } from "@/components/mobile-frame"
import { ProjectCard } from "@/components/project-card"
// import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { motion } from "framer-motion"

export default function Page() {
  const projects = [
    {
      id: 1,
      title: "TaskMaster Pro",
      description:
        "A sophisticated task management app with AI-powered prioritization, custom categories, and real-time collaboration features.",
      technologies: ["Flutter", "Firebase", "TensorFlow Lite"],
      color: "from-blue-600 to-cyan-400",
      screenshots: [
        "/criceurekaapp.jpg",
        "/placeholder.svg?height=400&width=400",
        "/placeholder.svg?height=400&width=400",
      ],
      playStoreLink: "https://play.google.com/store",
    },
    {
      id: 2,
      title: "FitFlow",
      description: "Personalized fitness tracking app with workout plans, nutrition guidance, and progress analytics.",
      technologies: ["Flutter", "Node.js", "MongoDB"],
      color: "from-green-500 to-emerald-300",
      screenshots: [
        "/placeholder.svg?height=800&width=400",
        "/placeholder.svg?height=800&width=400",
        "/placeholder.svg?height=800&width=400",
      ],
      playStoreLink: "https://play.google.com/store",
    },
    {
      id: 3,
      title: "SocialSync",
      description: "Next-gen social networking platform with AR filters, story sharing, and encrypted messaging.",
      technologies: ["Flutter", "AWS", "WebRTC"],
      color: "from-purple-600 to-pink-400",
      screenshots: [
        "/placeholder.svg?height=800&width=400",
        "/placeholder.svg?height=800&width=400",
        "/placeholder.svg?height=800&width=400",
      ],
      playStoreLink: "https://play.google.com/store",
    },
    {
      id: 4,
      title: "CryptoTracker Elite",
      description: "Real-time cryptocurrency tracking with portfolio management and predictive analytics.",
      technologies: ["Flutter", "Blockchain API", "WebSocket"],
      color: "from-yellow-500 to-orange-400",
      screenshots: [
        "/placeholder.svg?height=800&width=400",
        "/placeholder.svg?height=800&width=400",
        "/placeholder.svg?height=800&width=400",
      ],
      playStoreLink: "https://play.google.com/store",
    },
    {
      id: 5,
      title: "MediMinder",
      description:
        "Healthcare companion app for medication tracking, appointment scheduling, and health metrics monitoring.",
      technologies: ["Flutter", "HealthKit", "Google Fit"],
      color: "from-red-500 to-rose-400",
      screenshots: [
        "/placeholder.svg?height=800&width=400",
        "/placeholder.svg?height=800&width=400",
        "/placeholder.svg?height=800&width=400",
      ],
      playStoreLink: "https://play.google.com/store",
    },
    {
      id: 6,
      title: "EcoTravel",
      description: "Sustainable travel planning app with carbon footprint tracking and eco-friendly recommendations.",
      technologies: ["Flutter", "Google Maps API", "GraphQL"],
      color: "from-teal-500 to-green-400",
      screenshots: [
        "/placeholder.svg?height=800&width=400",
        "/placeholder.svg?height=800&width=400",
        "/placeholder.svg?height=800&width=400",
      ],
      playStoreLink: "https://play.google.com/store",
    },
    {
      id: 7,
      title: "StudyHub",
      description: "Collaborative learning platform with virtual study rooms, flashcards, and progress tracking.",
      technologies: ["Flutter", "Socket.io", "Redis"],
      color: "from-indigo-600 to-blue-400",
      screenshots: [
        "/placeholder.svg?height=800&width=400",
        "/placeholder.svg?height=800&width=400",
        "/placeholder.svg?height=800&width=400",
      ],
      playStoreLink: "https://play.google.com/store",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-r from-slate-950 via-indigo-900  to-violet-800 overflow-hidden ">
      {/* Gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1e1b4b,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#4c1d95,transparent_50%)]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20  overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              > 
                <img src="/DEVOPOD.png" alt="devopod" className="bg-white/60 mb-10 w-full h-fit rounded-md p-4"/>
                <span className="px-3 py-1 rounded-full text-xl sm:text-4xl   font-medium bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-violet-500/20 inline-block">
                  {/* <span className="text-red-700">De</span>
                  <span className="text-yellow-500">vo</span>
                  <span className="text-violet-400">Po</span>
                  <span className="text-blue-500">d</span> */}
                  software Development Agency
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-display"
              >
                <span className="bg-gradient-to-r from-violet-500 to-indigo-500 text-transparent bg-clip-text">
                  Transforming Ideas
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                  Into Digital Reality
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-[600px] mb-8 leading-relaxed"
              >
                We craft exceptional Flutter applications that redefine mobile experiences. From concept to deployment,
                we bring your vision to life with cutting-edge technology.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  // size="lg"
                  className="flex felx-row rounded-full text-lg p-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  // variant="outline" 
                  // size="lg" 
                  className="rounded-full text-lg px-8">
                  Contact Us
                  <Download className="ml-2 h-5 w-5" />
                </button>
              </motion.div>
            </motion.div>

            {/* Floating Phones */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative h-[520px] md:h-[600px]  lg:block"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 md:mx-16 w-[220px] md:w-[280px]"
              >
                <MobileFrame
                  screenshots={["/placeholder.svg?height=800&width=400"]}
                  className="transform rotate-6 translate-x-8"
                />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute  top-20 right-32 w-[220px] md:w-[280px]"
              >
                <MobileFrame
                  screenshots={["/placeholder.svg?height=800&width=400"]}
                  className="transform -rotate-6 -translate-x-8 "
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-r from-violet-500/10 to-transparent blur-2xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-indigo-500/10 to-transparent blur-2xl" />
        </div> */}
      </section>

      {/* Projects Section */}
      <section className="py-32 container  px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-display bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Discover our portfolio of innovative Flutter applications
          </p>
        </motion.div>
        <div className="grid gap-32">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2,  }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container px-4 text-center relative"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-display bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Let&apos;s Create Together
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-[600px] mx-auto">
            Ready to bring your app idea to life? Get in touch with our team of Flutter experts.
          </p>
          <button
            // size="lg"
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-lg px-8"
          >
            Start Your Project
          </button>
        </motion.div>
      </section>
    </main>
  )
}

