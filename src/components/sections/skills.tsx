"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { PORTFOLIO_DATA } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="flex flex-col gap-12">
        <div className="flex justify-end">
          <h2 className="text-4xl md:text-5xl font-black uppercase inline-block bg-secondary text-secondary-foreground px-4 py-2 brutal-border rotate-[-1deg]">
            Tech Arsenal
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.skills.categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="brutal-card brutal-card-hover bg-background">
                <CardHeader className="pb-4">
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: index * 0.2, ease: "easeInOut" }}
                    className="w-12 h-12 bg-primary brutal-border flex items-center justify-center mb-4"
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="brutal-border text-sm font-medium bg-muted">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
