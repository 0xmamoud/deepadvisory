
import logo from "@/assets/logo.svg";
import { navLinks } from "@/lib/constant";

export function Footer() {
  return (
    <footer className="max-container">
      <div className="container px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Logo DeepAdvisory"
                className="invert brightness-0 filter h-10 w-10"
              />
              <span className="text-lg font-bold text-white">DeepAdvisory</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              L'innovation à portée de main pour transformer votre entreprise.
            </p>
          </div>
          <FooterLinks
            title="Entreprise"
            links={[...navLinks, { label: "Nous contacter", href: "#contact" }]}
          />
          <FooterLinks
            title="Services"
            links={[
              { label: "Transformation Numérique", href: "#services" },
              { label: "Analyse de Données", href: "#services" },
              { label: "IA", href: "#services" },
              { label: "Cloud", href: "#services" },
            ]}
          />
          <FooterLinks
            title="Ressources"
            links={[
              { label: "contact@deepadvisory.fr", href: "mailto:contact@deepadvisory.fr" },
              { label: "+33 1 23 45 67 89", href: "tel:+33123456789" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/deepadvisory" },
              { label: "Facebook", href: "https://www.facebook.com/deepadvisory" },
            ]}
          />
        </div>
        <div className="mt-12 border-t border-[#2D2640] pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} DeepAdvisory. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

type LinkType = { label: string; href: string } | string;

function FooterLinks({ title, links }: { title: string; links: LinkType[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2">
        {links.map((link, index) =>
          typeof link === "string" ? (
            <li key={index}>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400">
                {link}
              </a>
            </li>
          ) : (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-gray-400 hover:text-blue-400">
                {link.label}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

