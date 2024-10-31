import { useState } from "react"
import logo from "@/assets/logo.svg"
import {
  ArrowRight,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/lib/constant"


export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="max-container">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo DeepAdvisory"
            className="invert brightness-0 filter h-10 w-10"
          />
          <span className="text-xl font-bold text-white">DeepAdvisory</span>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="text-lg text-gray-300 transition-colors hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" variant="default"
            className="bg-mid-night-blue text-white hover:bg-mid-night-blue/90"
          >
            <a href="#contact">Nous contacter</a>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="ghost">
              <Menu className="h-5 w-5 text-gray-300" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-dark-blue">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  className="text-lg text-gray-300"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <Button
                className="mt-4 bg-mid-night-blue text-white 
                active:bg-mid-night-blue/90 active:bg-mid-night-blue/90"
              >
                <a href="#contact"
                  onClick={() => setIsOpen(false)}
                >Nous contacter</a>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

