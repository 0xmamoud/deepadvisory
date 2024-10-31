
import { motion } from 'framer-motion';
import { Brain, BarChart3, Cloud, CircuitBoard, Code2, Shield } from "lucide-react";
import { ServiceCard } from "@/components/serviceCard";

export function Services() {
  return (
    <section id="services" className="max-container"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          >
            Nos Services
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="mt-4 text-base sm:text-lg text-gray-300"
          >
            Des solutions innovantes pour accélérer votre transformation numérique
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const servicesData = [
  {
    icon: <Brain className="h-8 w-8 text-sage-green" />,
    title: "DA Lab",
    description: "Innovation et recherche avancée",
    content: "Notre laboratoire d'innovation pour explorer et développer des solutions d'avant-garde.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-sage-green" />,
    title: "Business Intelligence",
    description: "Analyses et insights stratégiques",
    content: "Transformez vos données en insights stratégiques pour une prise de décision éclairée.",
  },
  {
    icon: <Cloud className="h-8 w-8 text-sage-green" />,
    title: "Big Data & Cloud",
    description: "Gestion et analyse de données massives",
    content: "Exploitez la puissance du cloud et du big data pour optimiser vos opérations.",
  },
  {
    icon: <CircuitBoard className="h-8 w-8 text-sage-green" />,
    title: "Digital",
    description: "Transformation et solutions numériques",
    content: "Accélérez votre transformation numérique avec nos solutions sur mesure.",
  },
  {
    icon: <Code2 className="h-8 w-8 text-sage-green" />,
    title: "Management de Projets",
    description: "Pilotage et optimisation de projets",
    content: "Pilotez vos projets avec efficacité grâce à notre expertise en gestion de projet.",
  },
  {
    icon: <Brain className="h-8 w-8 text-sage-green" />,
    title: "AI Solutions",
    description: "Intelligence artificielle sur mesure",
    content: "Intégrez l'IA dans votre entreprise pour stimuler l'innovation et l'efficacité.",
  },
  {
    icon: <Shield className="h-8 w-8 text-sage-green" />,
    title: "Data Gouvernance",
    description: "Gestion et protection des données",
    content: "Optimisez la gestion et la protection de vos données pour assurer conformité et valeur.",
  },
  {
    icon: <Shield className="h-8 w-8 text-sage-green" />,
    title: "Cybersécurité",
    description: "Protection contre les menaces numériques",
    content: "Protégez votre entreprise contre les menaces numériques avec nos solutions de pointe.",
  },
  {
    icon: <CircuitBoard className="h-8 w-8 text-sage-green" />,
    title: "RPA",
    description: "Automatisation des processus robotiques",
    content: "Automatisez vos processus métier pour gagner en efficacité et réduire les coûts.",
  },
];


