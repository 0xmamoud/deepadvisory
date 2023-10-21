import { Link } from "react-router-dom";
import x from "../../assets/x_logo 1.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import logo from "../../assets/logo_footer.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footerNav">
        <Link to="/" className="footerNav__item">
          Accueil
        </Link>
        <Link to="/services" className="footerNav__item">
          Services
        </Link>
        <img src={logo} alt="Deep Advisory logo" className="footerNav__logo" />
        <Link to="/blog" className="footerNav__item">
          Blog
        </Link>
        <Link to="/contact" className="footerNav__item">
          Contact
        </Link>
      </nav>
      <div className="footer__social">
        <a
          href="https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={x} alt="x logo" className="logoMedia" />
        </a>
        <a
          href="https://www.linkedin.com/in/deep-advisory-13400b203/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin logo" className="logoMedia" />
        </a>
        <a
          href="https://www.facebook.com/deep.advisory.5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook logo" className="logoMedia" />
        </a>
      </div>
      <p className="copyright">©Copyright 2023</p>
    </footer>
  );
};

export default Footer;
