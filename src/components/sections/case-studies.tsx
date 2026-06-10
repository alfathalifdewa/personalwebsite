"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function CaseStudies() {
  return (
    <SectionWrapper id="case-studies" className="bg-muted/30">
      <div className="flex flex-col gap-24 max-w-6xl mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase inline-block bg-primary text-primary-foreground px-4 py-2 brutal-border rotate-[-1deg]">
            Selected Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mt-6">
            Deep dives into specific problems I've solved, the approach taken, and the measurable results achieved.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {PORTFOLIO_DATA.caseStudies.map((study, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col gap-12 lg:items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-3 uppercase tracking-tight">{study.title}</h3>
                    <div className="flex flex-wrap gap-2">
                       <Badge className="bg-secondary text-secondary-foreground brutal-border">
                         {study.category}
                       </Badge>
                       <Badge variant="outline" className="border-black font-semibold">
                         {study.datasetInfo}
                       </Badge>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-background p-6 brutal-card brutal-card-hover space-y-3">
                      <h4 className="text-xl font-bold flex items-center gap-2 border-b-2 border-destructive/20 pb-2">
                        <span className="text-destructive text-2xl leading-none shadow-sm shadow-destructive/20 rounded-full w-6 h-6 flex items-center justify-center bg-destructive/10">!</span> Problem
                      </h4>
                      <p className="text-muted-foreground leading-relaxed font-medium">
                        {study.problem}
                      </p>
                    </div>

                    <div className="bg-background p-6 brutal-card brutal-card-hover space-y-3">
                      <h4 className="text-xl font-bold flex items-center gap-2 border-b-2 border-blue-500/20 pb-2">
                        <span className="text-blue-500 text-2xl leading-none shadow-sm shadow-blue-500/20 rounded-full w-6 h-6 flex items-center justify-center bg-blue-500/10">→</span> Approach
                      </h4>
                      <ul className="list-none space-y-3 text-muted-foreground font-medium">
                        {study.approach.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-black shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-background p-6 brutal-card brutal-card-hover space-y-3 border-emerald-500">
                      <h4 className="text-xl font-bold flex items-center gap-2 border-b-2 border-emerald-500/20 pb-2">
                        <span className="text-emerald-500 text-2xl leading-none shadow-sm shadow-emerald-500/20 rounded-full w-6 h-6 flex items-center justify-center bg-emerald-500/10">✓</span> Result
                      </h4>
                      <ul className="list-none space-y-3 text-foreground font-bold">
                        {study.result.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="text-sm font-bold uppercase mr-2 flex items-center">Tools:</span>
                    {study.toolsUsed.map((tool) => (
                      <Badge key={tool} variant="secondary" className="bg-muted brutal-border px-3">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Visual / Screenshot */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-video rounded-xl overflow-hidden border-4 border-black brutal-shadow-sm bg-muted group hover:-translate-y-2 hover:-translate-x-2 hover:brutal-shadow transition-all duration-300">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                    
                    {/* Mac-like window controls for aesthetic */}
                    <div className="absolute top-0 inset-x-0 h-10 bg-background border-b-4 border-black flex items-center px-4 gap-2 z-20">
                      <div className="w-3.5 h-3.5 rounded-full bg-destructive border-2 border-black" />
                      <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 border-2 border-black" />
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-black" />
                      <div className="ml-auto font-mono text-xs font-bold opacity-50 px-2 py-1 bg-muted rounded brutal-border">{study.category} Mockup</div>
                    </div>

                    <div className="w-full h-full pt-10 relative overflow-hidden bg-white/50">
                        <img 
                            src={study.image} 
                            alt={study.title}
                            className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="none"><rect width="100%" height="100%" fill="%23eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23aaa">Dashboard / Visualization Mockup</text></svg>';
                            }}
                        />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
