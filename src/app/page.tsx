import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Tools } from "@/components/sections/tools"
import { Community } from "@/components/sections/community"
import { Experience } from "@/components/sections/experience"
import { Brands } from "@/components/sections/brands"
import { Projects } from "@/components/sections/projects"
import { CaseStudies } from "@/components/sections/case-studies"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Tools />
      <Community />
      <Experience />
      <Brands />
      <Projects />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  )
}
