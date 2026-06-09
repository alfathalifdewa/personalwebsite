"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { PORTFOLIO_DATA } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button, buttonVariants } from "@/components/ui/button"
import { Mail, Send } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-muted">
      <div className="flex flex-col gap-12">
        <div className="flex justify-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase inline-block bg-primary text-primary-foreground px-4 py-2 brutal-border rotate-1">
            Let's Connect
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto w-full">
          <div className="space-y-8">
            <div className="bg-background p-8 brutal-card space-y-6 h-full">
              <h3 className="text-2xl font-bold">Get in touch</h3>
              <p className="text-lg font-medium text-muted-foreground">
                Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <a href={`mailto:${PORTFOLIO_DATA.personalInfo.contactEmail}`} className="flex items-center gap-4 p-4 brutal-border bg-secondary/10 hover:bg-secondary/20 transition-colors font-bold text-lg group break-all">
                  <div className="bg-secondary p-2 brutal-border">
                    <Mail className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  {PORTFOLIO_DATA.personalInfo.contactEmail}
                </a>
              </div>

              <div className="flex gap-4 pt-4">
                <a href={PORTFOLIO_DATA.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={buttonVariants({ size: "icon", className: "brutal-btn w-12 h-12 bg-primary text-primary-foreground hover:bg-primary" })}>
                    <FaLinkedin className="h-6 w-6" />
                </a>
                <a href={PORTFOLIO_DATA.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={buttonVariants({ size: "icon", className: "brutal-btn w-12 h-12 bg-secondary text-secondary-foreground hover:bg-secondary" })}>
                    <FaGithub className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 brutal-card">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-lg font-bold">Name</label>
                <Input id="name" placeholder="John Doe" className="brutal-border h-12 text-lg focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-lg font-bold">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" className="brutal-border h-12 text-lg focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-lg font-bold">Message</label>
                <Textarea id="message" placeholder="Hello..." className="brutal-border min-h-[150px] text-lg focus-visible:ring-primary" />
              </div>
              <Button type="submit" size="lg" className="brutal-btn w-full bg-primary text-primary-foreground hover:bg-primary h-14 text-xl">
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
