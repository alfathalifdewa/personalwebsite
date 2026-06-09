import { PORTFOLIO_DATA } from "@/lib/data"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-background border-t-2 border-black py-8 relative z-10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-bold text-lg">
          &copy; {currentYear} {PORTFOLIO_DATA.personalInfo.name}
        </div>
        <p className="text-muted-foreground font-medium text-center md:text-right">
          Built with Next.js, Tailwind CSS & Neubrutalism UI
        </p>
      </div>
    </footer>
  )
}
