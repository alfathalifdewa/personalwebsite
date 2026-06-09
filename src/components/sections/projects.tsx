"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { PORTFOLIO_DATA } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Projects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const yTitle = useTransform(scrollYProgress, [0, 1], ["-20%", "40%"])

  return (
    <SectionWrapper id="projects" className="bg-primary/5">
      <div ref={ref} className="flex flex-col gap-12">
        <motion.div style={{ y: yTitle }} className="space-y-4 z-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase inline-block bg-primary text-primary-foreground px-4 py-2 brutal-border rotate-1">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <Card key={project.id} className="brutal-card brutal-card-hover flex flex-col h-full bg-background">
              <CardHeader>
                <CardTitle className="text-2xl font-bold line-clamp-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="brutal-border bg-secondary/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-4 pt-4 border-t-2 border-black">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", className: "brutal-btn flex-1 bg-primary text-primary-foreground hover:bg-primary" })}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className={buttonVariants({ variant: "outline", size: "icon", className: "brutal-btn w-10 px-0 bg-secondary text-secondary-foreground hover:bg-secondary" })}>
                    <FaGithub className="h-5 w-5" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
