import { AnimatedContours } from "@/components/ui/animatedContours"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center
     pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden" id="accueil"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
          from-mid-night-blue/20 via-transparent to-transparent"
        />
        <AnimatedContours />
      </div>
      <div className="container relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="mx-auto max-w-3xl text-center space-y-8"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="text-sage-green text-3xl sm:text-4xl
            md:text-5xl lg:text-6xl font-bold tracking-tighter"
          >
            DeepAdvisory
            <br />
            L'innovation à portée de main
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-300"
          >
            DeepAdvisory vous accompagne dans vos projets de transformation numérique, informatique et d'innovation. De la définition de vos besoins jusqu'à la création de valeur, nous transformons votre vision en résultats créatifs.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto h-12 px-8
              bg-mid-night-blue text-white hover:bg-mid-night-blue/90"
            >
              <a href="#services" >
                Découvrir Nos Services
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 
              border-sage-green bg-sage-green text-dark-blue 
              hover:bg-sage-green/90"
            >
              <a href="#contact">
                Nous Contacter
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div id="about" />
    </section>

  )
}

