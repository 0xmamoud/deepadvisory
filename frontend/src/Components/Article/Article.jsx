import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import logo from "../../assets/logo_void.svg";
import TextEditor from "../TextEditor/TextEditor";

const Article = () => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [patchBlog, setPatchBlog] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/blog/${id}`
        );
        console.log(response.data);
        setBlog(response.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    adminControl();
  }, [loading, id, admin]);

  const localData = localStorage.getItem("userDeepAdvisory");

  const adminControl = () => {
    if (localData) {
      const data = JSON.parse(localData);
      const expirationTime = 24 * 60 * 60 * 1000;
      const currentTime = new Date().getTime();

      if (currentTime - data.expire < expirationTime) {
        setAdmin(true);
      }
    } else {
      setAdmin(false);
    }
  };

  const removeBlog = () => {
    const userInfos = JSON.parse(localData);
    axios
      .delete(`http://localhost:3000/api/blog/${id}`, {
        headers: { Authorization: `Bearer ${userInfos.token}` },
      })
      .then((response) => {
        console.log(response);
        navigate("/blog");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="blog">
      {loading ? (
        <>
          {admin && (
            <div className="blog__line">
              <p className="modifieArticle" onClick={removeBlog}>
                Suprimer
              </p>
              <p
                className="modifieArticle"
                onClick={() => setPatchBlog(!patchBlog)}
              >
                Modifier
              </p>
            </div>
          )}
          <>{patchBlog && <TextEditor />}</>
          <div className="blog">
            <div className="blog__line">
              <img src={logo} alt="Deep Advisory logo" className="logoLast" />
              <p>par {blog.author}</p>
            </div>
            <div className="blog__line">
              <p>Piblier le {blog.date}</p>
              <p>Temps de lecture {blog.readTime}</p>
            </div>
            <div>{parse(blog.description)}</div>
          </div>
        </>
      ) : (
        <p className="blog__loading">Chargement...</p>
      )}
    </div>
  );
};

export default Article;
