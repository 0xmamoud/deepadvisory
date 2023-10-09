import heroLogo from "../../assets/logo_void.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            deep advisory <br />
            your decison <br />
            our business
          </h1>
          <div className="hero__cta">
            <Link to="/services" className="hero__services">
              nos services
            </Link>
            <Link to="/contact" className="cta hero__cta">
              Contactez-nous
            </Link>
          </div>
        </div>
        <img src={heroLogo} alt="logo Deep Advisory" className="hero__logo" />
      </section>
      <div className="aboutUs">
        <h2 className="about__title">qui sommes nous</h2>
        <p className="about__subtitle">
          DeepAdvisory est une entreprise de service numérique qui vous
          accompagne dans vos projets de transformation numérique, informatique
          et d’innovation. De la définition de vos besoins jusqu’à la création
          de la valeur, nous intervenons au cœur de votre métier pour
          transformer votre vision en résultat créatifs.
          <br />
          <br />
          La période actuelle vous invite à accélérer votre transformation
          numérique. les entreprises qui sortiront renforcées de la crise auront
          investi dans leur innovation, et notamment sur le volet analytique qui
          représente désormais un enjeu stratégique de premier plan pour de
          nombreuses entreprises dont seul les GAFA semblent tirer profit. Deep
          Advisory vous permet de faire le point sur votre stratégie de données
          et de découvrir comment l’IA peut être un catalyseur d’innovations.
          Deep Advisory, l’innovation à portée de main.
        </p>
      </div>
    </>
  );
};

export default Home;
