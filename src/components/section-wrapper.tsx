"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface SectionWrapperProps {
  id: string
  className?: string
  children: React.ReactNode
}

export function SectionWrapper({ id, className = "", children }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-32 overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6 max-w-5xl"
      >
        {children}
      </motion.div>
    </section>
  )
}
