import address from "../../assets/adress.svg";
import mail from "../../assets/mail.svg";
import phone from "../../assets/number.svg";
import x from "../../assets/x_logo 1.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import axios from "axios";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const element = form.elements;

    const data = {
      subject: element.subject.value,
      name: element.name.value,
      email: element.email.value,
      number: element.number.value,
      message: element.message.value,
    };

    axios
      .post("http://localhost:3000/api/contact", data)
      .then((response) => {
        console.log(response);
        form.reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section className="getCta">
      <h1 className="getCta__title">connectons-nous !</h1>
      <div className="getCta__content">
        <form action="POST" className="getCta__form" onSubmit={handleSubmit}>
          <h2 className="getCta__formTitle">laissez-nous vos coordonnées</h2>
          <div className="getCta__formContent">
            <label htmlFor="subject" className="getCta__formLabel">
              Sujet
            </label>
            <input type="text" className="getCta__formInput" id="subject" />
          </div>
          <div className="getCta__formContent">
            <label htmlFor="name" className="getCta__formLabel">
              Nom
            </label>
            <input type="text" className="getCta__formInput" id="name" />
          </div>
          <div className="getCta__formContent">
            <label htmlFor="email" className="getCta__formLabel">
              Email
            </label>
            <input type="email" className="getCta__formInput" id="email" />
          </div>
          <div className="getCta__formContent">
            <label htmlFor="number" className="getCta__formLabel">
              Téléphone
            </label>
            <input type="text" className="getCta__formInput" id="number" />
          </div>
          <div className="getCta__formContent">
            <label htmlFor="message" className="getCta__formLabel">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="1"
              className="getCta__formInput"
            ></textarea>
          </div>
          <button type="submit" className="form__btn">
            envoyer
          </button>
        </form>
        <div className="getCta__link">
          <nav className="nav__link">
            <img src={address} alt="contact image" className="linkImg" />
            <p>
              Avenue des Champs Elysées <br />
              75008 PARIS
            </p>
          </nav>
          <nav className="nav__link">
            <img src={mail} alt="contact image" className="linkImg" />
            <p>contact@deepadvisory.fr</p>
          </nav>
          <nav className="nav__link">
            <img src={phone} alt="contact image" className="linkImg" />
            <p>+33 (0)9 54 41 15 72</p>
          </nav>
          <nav className="nav__link socialMedia">
            <a
              href="https://twitter.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={x} alt="x logo" className="linkImg ctaSocial" />
            </a>
            <a
              href="https://www.linkedin.com/in/deep-advisory-13400b203/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="linkedin logo"
                className="linkImg ctaSocial"
              />
            </a>
            <a
              href="https://www.facebook.com/deep.advisory.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="facebook logo"
                className="linkImg ctaSocial"
              />
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Contact;
