"use client"

import { PORTFOLIO_DATA } from "@/lib/data"
import { Button, buttonVariants } from "@/components/ui/button"
import { motion, type Variants, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const { name, role, tagline } = PORTFOLIO_DATA.personalInfo

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section ref={ref} id="hero" className="min-h-[calc(100vh-4rem)] flex items-center pt-16 pb-20 md:pt-0 md:pb-0 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 z-10">
        <motion.div 
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
          variants={container}
          initial="hidden"
          animate="show"
          style={{ opacity }}
        >
          <motion.div style={{ y: yText }} className="flex-1 space-y-8 text-center md:text-left order-2 md:order-1">
            <motion.div variants={item} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold font-sans px-4 py-2 bg-primary text-primary-foreground brutal-border inline-block rotate-[-2deg]">
                <s>{role}</s>
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[1]">
                {name}
              </h1>
              <div className="pl-4 border-l-4 border-primary ml-2 md:ml-0 md:border-l-8 inline-block text-left">
                <p className="text-xl md:text-2xl font-medium text-muted-foreground italic">
                  "{tagline}"
                </p>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#projects" className={buttonVariants({ size: "lg", className: "brutal-btn bg-primary text-primary-foreground hover:bg-primary h-14 px-8 text-lg" })}>
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#contact" className={buttonVariants({ variant: "outline", size: "lg", className: "brutal-btn h-14 px-8 text-lg bg-background" })}>
                  Contact Me
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div variants={item} style={{ y: yImage }} className="flex-1 order-1 md:order-2 flex justify-center w-full">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group"
            >
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 brutal-border group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-secondary brutal-border z-10 flex items-center justify-center overflow-hidden">
                {PORTFOLIO_DATA.personalInfo.avatarUrl ? (
                  <Image src={PORTFOLIO_DATA.personalInfo.avatarUrl} alt={name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                ) : (
                  <div className="text-8xl font-black text-secondary-foreground opacity-30">
                    {name.split(' ')[0][0]}{name.split(' ')[1] ? name.split(' ')[1][0] : ''}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
