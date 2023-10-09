import { cardContent } from ".";
import arrowRight from "../../assets/right_arrow.svg";
import arrowDawn from "../../assets/arrowDawn.svg";
import { useState, useEffect } from "react";

const Services = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [fill, setFill] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.innerWidth);
    };
  }, [windowWidth]);

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
        <p className="cardCta">En savoir plus</p>
      </div>
    ) : (
      <div className="card responsive" key={card.id}>
        <h2 className="cardTitle">{card.title}</h2>
        <img
          src={fill ? arrowDawn : arrowRight}
          alt="image flèche directionnelle"
          onClick={() => setFill(!fill)}
          className="cardArrow"
        />
        {fill && (
          <>
            <p className="cardText">{card.text}</p>
            <p className="cardCta">En savoir plus</p>
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
