import {
  ArrowRight,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  Rocket,
  TrendingUp,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Cta() {
  return (
    <>
      <section className="relative border-t border-separator bg-dark-blue 
        overflow-hidden"
      >
        <div className="max-container">
          <div className="container px-4 py-16 sm:px-6 sm:py-24 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold 
              tracking-tight text-white mb-8"
              >
                Prêt à Accélérer Votre Transformation Numérique ?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl 
              md:text-2xl leading-8 text-gray-300 mb-12"
              >
                Découvrez comment l'IA et l'analyse de données peuvent être des catalyseurs d'innovations pour votre entreprise.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700 p-6 rounded-lg shadow-lg"
                >
                  <Rocket className="h-12 w-12 text-sage-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Innovation Rapide</h3>
                  <p className="text-gray-300">Accélérez vos projets avec nos solutions IA avancées</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700 p-6 rounded-lg shadow-lg"
                >
                  <TrendingUp className="h-12 w-12 text-sage-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Croissance Optimisée</h3>
                  <p className="text-gray-300">Maximisez votre potentiel avec l'analyse de données</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700 p-6 rounded-lg shadow-lg"
                >
                  <Zap className="h-12 w-12 text-sage-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Transformation Agile</h3>
                  <p className="text-gray-300">Adaptez-vous rapidement aux changements du marché</p>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg
                bg-mid-night-blue text-white hover:bg-mid-night-blue/90 
                transition-all duration-300 ease-in-out transform 
                hover:-translate-y-1 hover:shadow-xl"
                >
                  Évaluez Votre Stratégie Numérique
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-blue-900 opacity-10 z-0">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-full h-full 
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
            from-blue-500 via-blue-700 to-gray-900"
            />
          </div>
        </div>
      </section>
      <section id="contact" className="relative border-t border-[#2D2640] 
        bg-dark-blue py-16 sm:py-24"
      >
        <div className="max-container">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8"
              >
                Contactez-Nous
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex flex-col items-center">
                  <Mail className="h-8 w-8 text-sage-green mb-2" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:contact@deepadvisory.fr"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    contact@deepadvisory.fr
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="h-8 w-8 text-sage-green mb-2" />
                  <h3 className="text-xl font-semibold text-white mb-2">Téléphone</h3>
                  <a href="tel:+33123456789"
                    className="text-gray-300 hover:text-blue-400 transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-4">Suivez-Nous</h3>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/company/deepadvisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="h-8 w-8" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://www.facebook.com/deepadvisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <Facebook className="h-8 w-8" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

