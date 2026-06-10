"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionWrapper } from "@/components/section-wrapper";
import * as SimpleIcons from "react-icons/si";

export function Tools() {
  return (
    <SectionWrapper id="tools" className="bg-muted/40">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase inline-block bg-secondary text-secondary-foreground px-4 py-2 brutal-border rotate-[-1deg]">
            Tools & Systems
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mt-4">
            The ecosystem of tools I use daily to build, design, and ship.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          {PORTFOLIO_DATA.tools.map((tool, index) => {
            const Icon = (SimpleIcons as Record<string, React.ElementType>)[tool.icon];

            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="group relative flex items-center gap-2.5 rounded-xl px-4 py-3 cursor-default
                  border border-border bg-background/70 backdrop-blur-md
                  hover:border-primary/60 hover:bg-background
                  transition-all duration-200
                  shadow-[0_2px_0px_0px_rgba(0,0,0,0.15)]
                  hover:shadow-[0_0_18px_2px_hsl(var(--primary)/0.25),0_4px_0px_0px_rgba(0,0,0,0.3)]"
              >
                {/* Glow layer */}
                <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-primary/15 to-transparent opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

                {Icon && (
                  <Icon className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                )}
                <span className="font-semibold text-sm text-foreground whitespace-nowrap">
                  {tool.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
