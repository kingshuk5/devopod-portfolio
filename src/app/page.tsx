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
      title: "CricEureka",
      description:
        "A live cricket and news app with email authentication, featuring live scores, commentary, and past match records.",
      technologies: ["Flutter", "Firebase", "MongoDb"],
      color: "from-blue-600 to-cyan-400",
      screenshots: [
        "/criceurekaapp1.jpg",
        "/criceurekaapp2.jpg",
        "/criceurekaapp3.jpg",
        "/criceurekaapp4.jpg",
      ],
      playStoreLink: "https://play.google.com/store",
    },
    {
      id: 2,
      title: "Go Travels",
      description: "Sustainable travel planning app with carbon footprint tracking and hotel recommendations.",
      technologies: ["React Native", "Node.js", "MongoDB"],
      color: "from-green-500 to-emerald-300",
      screenshots: [
        "/gotravels1.jpg",
        "/gotravels2.jpg",
        "/gotravels3.jpg",
        "/gotravels4.jpg",
      ],
      playStoreLink: "https://play.google.com/store",
    },
    {
      id: 3,
      title: "Neon Vault",
      description: "Real-time cryptocurrency tracking with portfolio management and predictive analytics.",
      technologies: ["React Native", "FireBase", "WebSocket"],
      color: "from-purple-600 to-pink-400",
      screenshots: [
        "/neonvault1.jpg",
        "/neonvault2.jpg",
        "/neonvault3.jpg",
        "/neonvault4.jpg",
      ],
      playStoreLink: "https://play.google.com/store",
    },
    {
      id: 4,
      title: "Zulu App",
      description: "An IoT-based application designed to receive, store, and automatically share real-time data from a Potential Emitter device installed on oil pipelines. The app monitors and reports erosion levels, enabling proactive maintenance and enhancing pipeline safety.",
      technologies: ["Flutter", "Firebase", "WebSocket"],
      color: "from-yellow-500 to-orange-400",
      screenshots: [
        "/zulu1.jpg",
        "/zulu2.jpg",
        "/zulu3.jpg",
        "/zulu4.jpg",
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
                <img src="/DEVOPOD.png" alt="devopod" className="bg-white/60 mb-10 md:w-1/2 w-3/4 h-fit rounded-md p-4"/>
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
                We craft exceptional Flutter, Artificial Intelligence and Mern Stack applications that redefine mobile experiences. 
                From concept to deployment, we bring your vision to life with cutting-edge technology.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  // size="lg"
                  onClick={()=> window.open("#projects")}
                  className="flex felx-row rounded-full text-lg p-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition-all duration-300"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  // variant="outline" 
                  // size="lg" 
                  onClick={() => window.open("https://devopod.co.in/contact.php", "_blank")}
                  className="rounded-full flex flex-row text-lg px-8">
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
                  screenshots={["/criceurekaapp1.jpg"]}
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
                  screenshots={["/neonvault3.jpg"]}
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
      <section id="projects" className="py-32 container  px-4 relative">
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
            Discover our portfolio of innovative  projects.
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
      <section className="py-16 md:py-28 relative">
        <a href="https://devopod.co.in/get-a-quote.php">
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
        </a>
      </section>
      <footer className="flex  justify-center pb-10 " >
      <div className="flex flex-col">
      <div className="flex items-center gap-4 ">
        <div className="social-button">
          <button className="relative w-12 h-12 rounded-full group">
            <a href="https://www.instagram.com/devopod_digital/">
            <div
              className="floater w-full h-full absolute top-0 left-0 bg-violet-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
            ></div>
            <div
              className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-violet-400 rounded-full"
            >
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  className="group-hover:fill-[#171543] fill-white duration-300"
                  d="M21.94 6.46809C21.8884 5.2991 21.6994 4.49551 21.4285 3.79911C21.1492 3.05994 20.7194 2.39818 20.1564 1.84802C19.6062 1.28932 18.9401 0.855163 18.2094 0.580194C17.5091 0.309437 16.7096 0.120336 15.5407 0.0688497C14.363 0.0128932 13.9891 0 11.0022 0C8.01527 0 7.64141 0.0128932 6.46808 0.064466C5.29914 0.116039 4.49551 0.305225 3.79932 0.57581C3.05994 0.855163 2.39818 1.28494 1.84802 1.84802C1.28932 2.39813 0.855377 3.06428 0.580193 3.7949C0.309437 4.49551 0.120379 5.2948 0.0688496 6.4637C0.0129362 7.64141 0 8.01527 0 11.0022C0 13.9891 0.0129362 14.363 0.0644659 15.5363C0.116039 16.7053 0.305225 17.5089 0.576025 18.2053C0.855377 18.9444 1.28932 19.6062 1.84802 20.1564C2.39818 20.7151 3.06432 21.1492 3.79494 21.4242C4.49547 21.6949 5.29476 21.884 6.46391 21.9355C7.63702 21.9873 8.0111 22 10.998 22C13.9849 22 14.3588 21.9873 15.5321 21.9355C16.7011 21.884 17.5047 21.695 18.2009 21.4242C18.9321 21.1415 19.5961 20.7091 20.1505 20.1548C20.7048 19.6005 21.1373 18.9365 21.42 18.2053C21.6906 17.5047 21.8798 16.7052 21.9314 15.5363C21.9829 14.363 21.9958 13.9891 21.9958 11.0022C21.9958 8.01527 21.9914 7.64137 21.94 6.46809ZM19.9588 15.4503C19.9114 16.5248 19.731 17.105 19.5805 17.4918C19.2109 18.4502 18.4502 19.2109 17.4918 19.5805C17.105 19.731 16.5206 19.9114 15.4503 19.9586C14.29 20.0103 13.942 20.023 11.0066 20.023C8.07118 20.023 7.71881 20.0103 6.56259 19.9586C5.48816 19.9114 4.90796 19.731 4.52117 19.5805C4.04425 19.4043 3.61014 19.1249 3.25772 18.7596C2.89242 18.4029 2.61306 17.9731 2.43677 17.4961C2.28635 17.1094 2.10589 16.5248 2.05874 15.4547C2.007 14.2943 1.99428 13.9461 1.99428 11.0107C1.99428 8.07535 2.007 7.72298 2.05874 6.56698C2.10589 5.49254 2.28635 4.91235 2.43677 4.52555C2.61306 4.04842 2.89241 3.61439 3.26211 3.26189C3.61865 2.89658 4.04842 2.61723 4.52555 2.44115C4.91235 2.29073 5.49692 2.11023 6.56697 2.06291C7.72736 2.01134 8.07556 1.99844 11.0107 1.99844C13.9505 1.99844 14.2985 2.01134 15.4547 2.06291C16.5292 2.11027 17.1093 2.29069 17.4961 2.44111C17.9731 2.61723 18.4072 2.89658 18.7596 3.26189C19.1249 3.61865 19.4042 4.04842 19.5805 4.52555C19.731 4.91235 19.9114 5.49671 19.9587 6.56698C20.0103 7.72736 20.0232 8.07535 20.0232 11.0107C20.0232 13.9461 20.0104 14.29 19.9588 15.4503Z"
                ></path>
                <path
                  className="group-hover:fill-[#171543] fill-white duration-300"
                  d="M11.0026 5.35054C7.88252 5.35054 5.35107 7.88182 5.35107 11.0021C5.35107 14.1223 7.88252 16.6536 11.0026 16.6536C14.1227 16.6536 16.6541 14.1223 16.6541 11.0021C16.6541 7.88182 14.1227 5.35054 11.0026 5.35054ZM11.0026 14.668C8.97844 14.668 7.33654 13.0264 7.33654 11.0021C7.33654 8.97774 8.97844 7.33609 11.0025 7.33609C13.0269 7.33609 14.6685 8.97774 14.6685 11.0021C14.6685 13.0264 13.0268 14.668 11.0026 14.668ZM18.1971 5.12706C18.1971 5.85569 17.6063 6.44646 16.8775 6.44646C16.1489 6.44646 15.5581 5.85569 15.5581 5.12706C15.5581 4.39833 16.1489 3.80774 16.8775 3.80774C17.6063 3.80774 18.1971 4.39829 18.1971 5.12706Z"
                ></path>
              </svg>
            </div>
            </a>
          </button>
        </div>
        <div className="social-button">
          <a href="https://github.com/Devopod">
          <button className="relative w-12 h-12 rounded-full group">
            <div
              className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
            ></div>
            <div
              className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full"
            >
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-[#171543] fill-white duration-300"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </div>
          </button>
          </a>
        </div>
        <div className="social-button">
        <a href="https://www.linkedin.com/company/devopod/">
          <button className="relative w-12 h-12 rounded-full group">
            <div
              className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
            ></div>
            <div
              className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full"
            >
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-[#171543] fill-white duration-300"
                  d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </div>
          </button>
          </a>
        </div>
        <div className="social-button">
          <button 
            onClick={() => window.location.href = "mailto:requirement@devopod.co.in"}
            className="relative w-12 h-12 rounded-full group">
            <div
              className="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
            ></div>
            <div
              className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full"
            >
              <svg
                height="32"
                width="32"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-[#171543] fill-white duration-300"
                  d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="mt-8 text-xs text-gray-400">
            <p>© 2025 Devopod. All rights reserved.</p>
            <p>Bringing vision to life with cutting-edge technology .</p>
      </div>
      </div>
      </footer>


    </main>
  )
}

