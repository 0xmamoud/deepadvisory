import { Link } from "react-router-dom";

const MobilHeader = () => {
  return (
    <nav className="mobileAppBar__nav">
      <Link to="/" className={`appBar__navItem`}>
        Accueil
      </Link>
      <Link to="/services" className={`appBar__navItem`}>
        Services
      </Link>
      <Link to="/blog" className={`appBar__navItem`}>
        Blog
      </Link>
      <Link to="/contact" className="appBar__navItem">
        Contactez-nous
      </Link>
    </nav>
  );
};

export default MobilHeader;
