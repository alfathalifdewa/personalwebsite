"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionWrapper } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import * as SimpleIcons from "react-icons/si";

export function Community() {
  const [activePlatform, setActivePlatform] = useState(PORTFOLIO_DATA.community[0]);

  return (
    <SectionWrapper id="community">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase inline-block bg-primary text-primary-foreground px-4 py-2 brutal-border rotate-1">
            My Community
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mt-4">
            Connect with me across platforms — see what I'm building, sharing, and talking about.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* LEFT: Social List */}
          <div className="flex-1 w-full space-y-3">
            {PORTFOLIO_DATA.community.map((item, idx) => {
              const Icon = (SimpleIcons as Record<string, React.ElementType>)[item.icon];
              const isActive = activePlatform.platform === item.platform;

              return (
                <motion.div
                  key={item.platform}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActivePlatform(item)}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "border-black bg-primary text-primary-foreground brutal-shadow -translate-y-0.5 -translate-x-0.5"
                      : "border-border bg-background/60 hover:border-black hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-lg ${isActive ? "bg-primary-foreground/20" : "bg-muted"}`}>
                      {Icon && <Icon className={`w-5 h-5 ${isActive ? "text-primary-foreground" : "text-foreground"}`} />}
                    </div>
                    <div>
                      <h3 className={`font-bold text-base ${isActive ? "text-primary-foreground" : "text-foreground"}`}>
                        {item.platform}
                      </h3>
                      <div className="flex flex-col text-sm">
                        <span className={`font-semibold ${isActive ? "text-primary-foreground/80" : "text-foreground"}`}>
                          {item.username}
                        </span>
                        <span className={isActive ? "text-primary-foreground/70" : "text-muted-foreground"}>
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-1.5 rounded-lg border-2 text-sm font-bold transition-all duration-150 brutal-btn ${
                      isActive
                        ? "border-primary-foreground/50 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        : "border-black bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit ↗
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: iPhone 13 Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden md:flex shrink-0 items-center justify-center relative"
            style={{ perspective: "1200px" }}
          >
            {/* Ambient glow behind phone */}
            <div
              className="absolute inset-0 -z-10 rounded-full blur-[80px] opacity-40 transition-colors duration-500"
              style={{ backgroundColor: activePlatform.color }}
            />

            {/* iPhone 13 Frame */}
            <motion.div
              animate={{ rotateY: [-8, 0], rotateX: [4, 0] }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              key={activePlatform.platform}
              className="relative w-[270px] h-[560px] rounded-[44px] border-[10px] border-zinc-800 bg-black shadow-[0_30px_80px_-10px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.08)]"
              style={{ transform: "rotateY(-8deg) rotateX(4deg)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "rotateY(-8deg) rotateX(4deg)"; }}
            >
              {/* Side buttons (decorative) */}
              <div className="absolute -left-[12px] top-[100px] w-[4px] h-[36px] bg-zinc-700 rounded-l-sm" />
              <div className="absolute -left-[12px] top-[150px] w-[4px] h-[64px] bg-zinc-700 rounded-l-sm" />
              <div className="absolute -left-[12px] top-[226px] w-[4px] h-[64px] bg-zinc-700 rounded-l-sm" />
              <div className="absolute -right-[12px] top-[140px] w-[4px] h-[80px] bg-zinc-700 rounded-r-sm" />

              {/* Notch */}
              <div className="absolute top-0 inset-x-0 flex justify-center z-20">
                <div className="w-[110px] h-[28px] bg-black rounded-b-[18px]" />
              </div>

              {/* Screen */}
              <div className="w-full h-full rounded-[34px] overflow-hidden bg-background relative">
                {/* Screen glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-30" />

                {/* Dynamic Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePlatform.platform}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 flex flex-col pt-10"
                  >
                    {/* App status bar */}
                    <div className="flex justify-between items-center px-5 py-1 text-[10px] font-semibold text-foreground/60">
                      <span>9:41</span>
                      <span>●●●</span>
                    </div>

                    {/* Profile area */}
                    <div
                      className="flex flex-col items-center pt-6 pb-5 gap-3"
                      style={{ background: `linear-gradient(160deg, ${activePlatform.color}22, transparent)` }}
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-border shadow-md">
                        <img
                          src={PORTFOLIO_DATA.personalInfo.avatarUrl}
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-sm text-foreground">{PORTFOLIO_DATA.personalInfo.name}</p>
                        <p className="text-xs text-muted-foreground">{activePlatform.username}</p>
                      </div>

                      {/* Platform badge */}
                      <div
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: activePlatform.color }}
                      >
                        {(() => {
                          const Icon = (SimpleIcons as Record<string, React.ElementType>)[activePlatform.icon];
                          return Icon && <Icon className="w-3 h-3" />;
                        })()}
                        {activePlatform.platform}
                      </div>
                    </div>

                    {/* Description card */}
                    <div className="mx-4 p-3 rounded-xl bg-card border border-border/50 shadow-sm">
                      <p className="text-xs text-muted-foreground leading-relaxed">{activePlatform.description}</p>
                    </div>

                    {/* Fake feed skeleton */}
                    <div className="mx-4 mt-3 space-y-2">
                      {[60, 80, 45].map((w, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-muted animate-pulse shrink-0" />
                          <div className="h-2.5 rounded-full bg-muted animate-pulse" style={{ width: `${w}%` }} />
                        </div>
                      ))}
                    </div>

                    {/* CTA button */}
                    <div className="mt-auto mx-4 mb-4">
                      <a
                        href={activePlatform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full py-2.5 rounded-xl text-xs font-bold text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: activePlatform.color }}
                      >
                        Open {activePlatform.platform} ↗
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
