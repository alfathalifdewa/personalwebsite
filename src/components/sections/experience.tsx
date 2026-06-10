"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { PORTFOLIO_DATA } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase inline-block bg-secondary text-secondary-foreground px-4 py-2 brutal-border rotate-[-1deg]">
            Experience & Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-8">
          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold border-b-4 border-primary pb-2 inline-block">Experience</h3>
            <div className="space-y-8 border-l-4 border-black pl-6 ml-2 relative">
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div key={exp.id} className="relative group">
                  <div className="absolute w-4 h-4 bg-primary brutal-border -left-[34px] top-2 rounded-full transition-all group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]"></div>
                  <div className="bg-background p-6 brutal-card hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-xl font-bold">{exp.role}</h4>
                        <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                      </div>
                      <Badge className="w-fit brutal-border bg-secondary text-secondary-foreground">{exp.duration}</Badge>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 font-medium">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold border-b-4 border-secondary pb-2 inline-block">Education</h3>
            <div className="space-y-8 border-l-4 border-black pl-6 ml-2">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div key={edu.id} className="relative group">
                  <div className="absolute w-4 h-4 bg-secondary brutal-border -left-[34px] top-2 rounded-full transition-all group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(var(--secondary-rgb),0.8)]"></div>
                  <div className="bg-background p-6 brutal-card hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <p className="text-lg font-medium text-muted-foreground">{edu.institution}</p>
                      </div>
                      <Badge className="w-fit brutal-border bg-primary text-primary-foreground">{edu.duration}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
