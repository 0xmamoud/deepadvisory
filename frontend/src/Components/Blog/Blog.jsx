import logo from "../../assets/logo_void.svg";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [modal, setModal] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const navigate = useNavigate();

  const localData = localStorage.getItem("userDeepAdvisory");

  const handleConect = () => {
    if (localData) {
      const data = JSON.parse(localData);
      const expirationTime = 24 * 60 * 60 * 1000;
      const currentTime = new Date().getTime();

      if (currentTime - data.expire < expirationTime) {
        navigate(`/texteditor/user/${data.userId}`);
      } else {
        localStorage.removeItem("userDeepAdvisory");
        setModal(true);
      }
    } else {
      setModal(true);
    }
  };

  return (
    <section className="blog">
      <p className="log" onClick={handleConect}>
        connexion
      </p>
      {modal && <Modal setmodal={setModal} />}
      <div className="blog__last">
        <h1 className="blog__title">dernierre publication</h1>
        <div className="blog__card">
          <div className="blog__line">
            <img src={logo} alt="Deep Advisory logo" className="logoLast" />
            <p>auteur:</p>
          </div>
          <h2 className="blog__subTitle">titre</h2>
          <div className="blog__line">
            <p>date:</p>
            <p>temps de lecture:</p>
          </div>
        </div>
      </div>
      <h2 className="blog__subtitle">liste des articles</h2>
      <div className="blog__list">
        <div className="blog__card">
          <div className="blog__line">
            <img src={logo} alt="Deep Advisory logo" className="logoLast" />
            <p>auteur:</p>
          </div>
          <h2 className="blog__subTitle">titre</h2>
          <div className="blog__line">
            <p>date:</p>
            <p>temps de lecture:</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
