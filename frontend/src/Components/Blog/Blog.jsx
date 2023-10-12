import logo from "../../assets/logo_void.svg";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Blog = () => {
  const [modal, setModal] = useState(false);

  return (
    <section className="blog">
      <p className="log" onClick={() => setModal(true)}>
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
