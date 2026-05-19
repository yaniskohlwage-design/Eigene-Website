import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

interface Project {
  id: string
  title: string
  industry: string
  description: string
  liveUrl: string
  desktopVideo: string
  videoScale?: number
}

const projects: Project[] = [
  {
    id: "steinbach-bau",
    title: "Steinbach Bau",
    industry: "Handwerk & Bau",
    description:
      "Professioneller Webauftritt für ein Hamburger Handwerksunternehmen. Klare Leistungsübersicht, Referenzen und ein unkompliziertes Kontaktformular für Angebotsanfragen.",
    liveUrl: "https://steinbach-bau.netlify.app",
    desktopVideo: "/videos/steinbach-bau.mp4",
    videoScale: 1.01,
  },
  {
    id: "kontur-kaffee",
    title: "Kontur Kaffee",
    industry: "Café & Restaurant",
    description:
      "Eine moderne Website für ein Hamburger Specialty-Coffee-Café. Animierter Hero, klare Bildsprache und ein Kontaktformular für Tischreservierungen — alles mobiloptimiert.",
    liveUrl: "https://kontur-kaffee.netlify.app",
    desktopVideo: "/videos/kontur-kaffee.mp4",
  },
]

export default function PortfolioSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const prev = () => goTo((current - 1 + projects.length) % projects.length)
  const next = () => goTo((current + 1) % projects.length)

  const project = projects[current]

  return (
    <div className="w-full">
      <div className="relative overflow-hidden">
        {/* Mockup Row — static, not part of AnimatePresence */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-3xl relative" style={{ aspectRatio: "800 / 500" }}>
            {/* All videos permanently in the DOM, crossfade between them */}
            <div
              className="absolute overflow-hidden rounded-sm"
              style={{ left: "9%", top: "6.4%", width: "82%", height: "79.2%" }}
            >
              {projects.map((proj, i) => (
                <AnimatePresence key={proj.id}>
                  {i === current && (
                    <motion.video
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      autoPlay
                      muted
                      loop
                      playsInline
                      onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
                      className="absolute inset-0 w-full h-full"
                      style={{
                        objectFit: "cover",
                        transform: proj.videoScale ? `scale(${proj.videoScale})` : undefined,
                      }}
                    >
                      <source src={proj.desktopVideo} type="video/mp4" />
                    </motion.video>
                  )}
                </AnimatePresence>
              ))}
            </div>

            <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <mask id="bezel-mask">
                  <rect x="60" y="20" width="680" height="420" rx="12" fill="white" />
                  <rect x="72" y="32" width="656" height="396" rx="4" fill="black" />
                </mask>
              </defs>
              <rect x="60" y="20" width="680" height="420" rx="12" fill="#1a1a1a" mask="url(#bezel-mask)" />
              <circle cx="400" cy="26" r="3" fill="#333" />
              <path d="M 0 448 Q 0 440 60 440 L 740 440 Q 800 440 800 448 L 800 460 Q 800 468 400 468 Q 0 468 0 460 Z" fill="#2a2a2a" />
              <line x1="0" y1="448" x2="800" y2="448" stroke="#111" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Project Info — animated separately */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              {project.industry}
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-3">{project.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Live ansehen
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={prev}
          className="p-3 rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all"
          aria-label="Vorheriges Projekt"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>

        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-2 bg-black"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-500"
              }`}
              aria-label={`Projekt ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-3 rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all"
          aria-label="Nächstes Projekt"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      <p className="text-center text-sm text-gray-400 mt-6">
        {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} — Mehr Projekte folgen
      </p>
    </div>
  )
}
