"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionWrapper } from "@/components/section-wrapper";
import Image from "next/image";

export function Brands() {
  return (
    <SectionWrapper id="brands" className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground border-b-2 border-border pb-2 inline-block">
            Brands I've Collaborated With
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex w-full max-w-[100vw] overflow-hidden py-8">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex whitespace-nowrap gap-16 md:gap-24 items-center pl-16 md:pl-24"
          >
            {/* Double the array to create seamless loop effect */}
            {[...PORTFOLIO_DATA.brands, ...PORTFOLIO_DATA.brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="group flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 w-32 h-16 relative"
                title={brand.name}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain drop-shadow-sm group-hover:drop-shadow-md"
                  sizes="(max-width: 768px) 100px, 150px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
