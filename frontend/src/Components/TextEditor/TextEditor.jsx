import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TextEditor = () => {
  const [value, setValue] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const localData = localStorage.getItem("userDeepAdvisory");

  useEffect(() => {
    const redirect = () => {
      if (localData) {
        const data = JSON.parse(localData);
        const expirationTime = 24 * 60 * 60 * 1000;
        const currentTime = new Date().getTime();

        if (currentTime - data.expire > expirationTime) {
          navigate(`/blog`);
        }
      } else {
        navigate(`/blog`);
      }
    };

    redirect();
  }, [localData, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const element = form.elements;
    const userInfos = JSON.parse(localData);

    const data = {
      title: element.title.value,
      author: element.author.value,
      date: element.date.value,
      readTime: element.readTime.value,
      description: value,
      userId: userInfos.userId,
    };

    if (id === userInfos.userId) {
      axios
        .post("https://deepadvisory.onrender.com/api/blog", data, {
          headers: { Authorization: `Bearer ${userInfos.token}` },
        })
        .then((response) => {
          console.log(response);
          form.reset();
          navigate("/blog");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .put(`https://deepadvisory.onrender.com/api/blog/${id}`, data, {
          headers: { Authorization: `Bearer ${userInfos.token}` },
        })
        .then((response) => {
          console.log(response);
          form.reset();
          navigate("/blog");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <form className="editorForm" onSubmit={handleSubmit}>
      <div className="editorForm__conent">
        <label htmlFor="title">Titre</label>
        <input type="text" name="title" id="title" />
      </div>
      <div className="editorForm__conent">
        <label htmlFor="author">Auteur</label>
        <input type="text" name="author" id="author" />
      </div>
      <div className="editorForm__conent">
        <label htmlFor="date">date</label>
        <input type="text" name="date" id="date" />
      </div>
      <div className="editorForm__conent">
        <label htmlFor="readTime">temps de lecture</label>
        <input type="text" name="readTime" id="readTime" />
        <br />
        <br />
      </div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <button className="editorForm__btn" type="submit">
        Poster
      </button>
    </form>
  );
};

export default TextEditor;
