import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Modal/Modal";
import TextEditor from "./Components/TextEditor/TextEditor";
import Article from "./Components/Article/Article";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connexion" element={<Modal />} />
        <Route path="/texteditor/user/:id" element={<TextEditor />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
