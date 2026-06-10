"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionWrapper } from "@/components/section-wrapper";
import Image from "next/image";

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
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl cursor-default
                  border-2 border-border bg-background/70 backdrop-blur-md
                  hover:border-primary hover:bg-background
                  transition-all duration-300
                  shadow-[0_4px_0px_0px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0_8px_0px_0px_rgba(0,0,0,0.25)]
                  overflow-visible"
              >
                {/* Glow layer */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* Tooltip */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 pointer-events-none w-max
                  bg-foreground text-background px-4 py-2 rounded-xl brutal-border shadow-lg">
                  <span className="font-bold text-sm whitespace-nowrap">{tool.name}</span>
                  {/* @ts-ignore - description was just added to data.ts, type might be lagging */}
                  <span className="text-xs text-background/70 font-medium whitespace-nowrap">{tool.description}</span>
                  
                  {/* Triangle pointer */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-foreground border-r-2 border-b-2 border-black rotate-45" />
                </div>

                <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg] grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100">
                  <Image 
                    src={tool.icon} 
                    alt={tool.name} 
                    fill 
                    className="object-contain" 
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
