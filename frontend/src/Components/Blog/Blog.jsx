import logo from "../../assets/logo_void.svg";
import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blogList, setBlogList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://deepadvisory.onrender.com/api/blog"
        );
        console.log(response.data);
        setBlogList(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

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

  const displayBlog = () => {
    if (loading) {
      return <p className="blog__loading">Chargement...</p>;
    } else {
      if (blogList.length === 0) {
        return <p className="blog__loading">Pas de blog pour le moment</p>;
      } else {
        const lastBlog = blogList[blogList.length - 1];
        return (
          <>
            <div className="blog__last">
              <h1 className="blog__title">Dernière publication</h1>
              <div
                className="blog__card"
                onClick={() => navigate(`/article/${lastBlog._id}`)}
              >
                <div className="blog__line">
                  <img
                    src={logo}
                    alt="Deep Advisory logo"
                    className="logoLast"
                  />
                  <p>par {lastBlog.author}</p>
                </div>
                <h2 className="blog__subTitle">{lastBlog.title}</h2>
                <div className="blog__line">
                  <p>le {lastBlog.date}</p>
                  <p>{lastBlog.readTime}</p>
                </div>
              </div>
            </div>
            <h2 className="blog__subtitle">liste des articles</h2>
            <div className="blog__list">{displayList()}</div>
          </>
        );
      }
    }
  };

  const displayList = () => {
    return blogList.map((blog) => (
      <div
        className="blog__card"
        key={blog._id}
        onClick={() => navigate(`/article/${blog._id}`)}
      >
        <div className="blog__line">
          <img src={logo} alt="Deep Advisory logo" className="logoLast" />
          <p>par {blog.author}</p>
        </div>
        <h2 className="blog__subTitle">{blog.title}</h2>
        <div className="blog__line">
          <p>le {blog.date}</p>
          <p>{blog.readTime}</p>
        </div>
      </div>
    ));
  };

  return (
    <section className="blog">
      <p className="log" onClick={handleConect}>
        connexion
      </p>
      {modal && <Modal setmodal={setModal} />}
      {displayBlog()}
    </section>
  );
};

export default Blog;
