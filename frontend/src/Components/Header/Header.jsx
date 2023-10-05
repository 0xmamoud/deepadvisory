import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo_header.svg";
import menu from "../../assets/nav.svg";
import cross from "../../assets/exit_menu.svg";
import MobilHeader from "../MobileHeader/MobilHeader";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const handleSidebar = () => setSidebar(!sidebar);

  return (
    <header className="appBar">
      <img src={logo} alt="Deep Advisory logo" className="appBar__icon" />
      <nav className="appBar__nav">
        <Link to="/" className={`appBar__navItem ${isActive("/")}`}>
          Accueil
        </Link>
        <Link
          to="/services"
          className={`appBar__navItem ${isActive("/services")}`}
        >
          Services
        </Link>
        <Link to="/blog" className={`appBar__navItem ${isActive("/blog")}`}>
          Blog
        </Link>
      </nav>
      <Link to="/contact" className="cta">
        Contactez-nous
      </Link>
      <img
        src={sidebar ? cross : menu}
        alt="menu hamburger"
        className="sidebar"
        onClick={handleSidebar}
      />
      {sidebar && <MobilHeader />}
    </header>
  );
};

export default Header;
