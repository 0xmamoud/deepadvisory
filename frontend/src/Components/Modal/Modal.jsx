/* eslint-disable react/prop-types */
import cross from "../../assets/exit_menu.svg";

const Modal = ({ setmodal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const element = form.elements;
    const email = element.email.value;
    const password = element.password.value;

    console.log(email, password);
    form.reset();
  };

  return (
    <div className="modal">
      <div className="overlay"></div>
      <form className="modal__form" onSubmit={handleSubmit}>
        <img
          src={cross}
          alt=""
          onClick={() => setmodal(false)}
          className="modal__img"
        />
        <label htmlFor="email">email</label>
        <input type="email" name="email" />
        <label htmlFor="password">mot de passe</label>
        <input type="password" name="password" />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default Modal;
