"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { PORTFOLIO_DATA } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <SectionWrapper id="about" className="bg-muted">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase inline-block bg-primary text-primary-foreground px-4 py-2 brutal-border rotate-1">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed">
            <p className="p-6 bg-background brutal-card">
              {PORTFOLIO_DATA.personalInfo.bio}
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary text-secondary-foreground p-6 brutal-card flex flex-col justify-center items-center text-center group hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                <span className="text-4xl font-black mb-2">3+</span>
                <span className="font-bold">Years Experience</span>
              </div>
              <div className="bg-secondary text-secondary-foreground p-6 brutal-card flex flex-col justify-center items-center text-center group hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                <span className="text-4xl font-black mb-2">10+</span>
                <span className="font-bold">Projects Built</span>
              </div>
            </div>

            <div className="bg-background p-6 brutal-card space-y-4">
              <h3 className="text-2xl font-bold border-b-2 border-black pb-2">Top Skills</h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills.categories[0].items.slice(0, 5).map((skill) => (
                  <Badge key={skill} variant="outline" className="brutal-border text-base py-1 px-3 bg-secondary text-secondary-foreground">
                    {skill}
                  </Badge>
                ))}
                {PORTFOLIO_DATA.skills.categories[1].items.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="outline" className="brutal-border text-base py-1 px-3 bg-primary text-primary-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
