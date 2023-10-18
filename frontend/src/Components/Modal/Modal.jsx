/* eslint-disable react/prop-types */
import cross from "../../assets/exit_menu.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Modal = ({ setmodal }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const element = form.elements;
    const data = {
      email: element.email.value,
      password: element.password.value,
    };

    axios
      .post("https://deepadvisory.onrender.com/api/auth/login", data)
      .then((response) => {
        const localContent = {
          userId: response.data.userId,
          token: response.data.token,
          expire: new Date().getTime(), // Vous pouvez ajouter une durée d'expiration ici si nécessaire
        };

        session(JSON.stringify(localContent));
        form.reset();
        navigate(`/texteditor/user/${response.data.userId}`);
      })
      .catch(function (error) {
        form.reset();
        console.log(error);
      });
  };

  const session = (data) => {
    localStorage.setItem("userDeepAdvisory", data);
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
