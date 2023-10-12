import { cardContent } from ".";
import arrowRight from "../../assets/right_arrow.svg";
import arrowDawn from "../../assets/arrowDawn.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [fill, setFill] = useState([]);

  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.innerWidth);
    };
  }, [windowWidth]);

  const toggleCard = (cardId) => {
    if (fill.includes(cardId)) {
      setFill(fill.filter((id) => id !== cardId));
    } else {
      setFill([cardId]);
    }
  };

  const cards = cardContent.map((card) => {
    return windowWidth > 775 ? (
      <div className="card" key={card.id}>
        <img
          src={card.image}
          alt={`${card.title} image`}
          className="card__logo"
        />
        <h2 className="cardTitle">{card.title}</h2>
        <p className="cardText">{card.text}</p>
        <Link to="/contact" className="cardCta">
          En savoir plus
        </Link>
      </div>
    ) : (
      <div
        className={`card ${fill.includes(card.id) && "responsive"}`}
        key={card.id}
        onClick={() => toggleCard(card.id)}
      >
        <h2 className="cardTitle">{card.title}</h2>
        <img
          src={fill.includes(card.id) ? arrowDawn : arrowRight}
          alt="image flèche directionnelle"
          className="cardArrow"
        />
        {fill.includes(card.id) && (
          <>
            <p className="cardText">{card.text}</p>
            <Link to="/contact" className="cardCta">
              En savoir plus
            </Link>
          </>
        )}
      </div>
    );
  });
  return (
    <section className="services">
      <h1 className="services__title">decouvrez nos services</h1>
      <div className="cardSection">{cards}</div>
    </section>
  );
};

export default Services;
