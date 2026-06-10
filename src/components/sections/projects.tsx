"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { PORTFOLIO_DATA } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

export function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-primary/5">
      <div className="flex flex-col gap-12">
        <div className="space-y-4 z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase inline-block bg-primary text-primary-foreground px-4 py-2 brutal-border rotate-1">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mt-4">
            A selection of my recent work, highlighting full-stack development, UI/UX design, and complex problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full bg-background rounded-xl border-2 border-black brutal-shadow-sm hover:brutal-shadow transition-all duration-300 overflow-hidden hover:-translate-y-2 hover:-translate-x-2"
            >
              {/* Image Section (60-70% of card) */}
              <div className="relative aspect-video w-full overflow-hidden border-b-2 border-black bg-muted">
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="none"><rect width="100%" height="100%" fill="%23eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23aaa">Project Screenshot</text></svg>';
                  }}
                />
                
                {/* Links overlay on hover */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                   <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform border-2 border-black brutal-shadow-sm"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-secondary text-secondary-foreground rounded-full hover:scale-110 transition-transform border-2 border-black brutal-shadow-sm"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Text Section */}
              <div className="p-5 flex flex-col flex-1 gap-4">
                <h3 className="text-2xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-medium text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-black bg-secondary/10 text-xs px-2 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
