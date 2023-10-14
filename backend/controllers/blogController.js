const Blog = require("../models/blogModel");

const getAllArticle = (req, res) => {
  Blog.find()
    .then((article) => {
      res.status(200).json(article);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

const createArticle = (req, res) => {
  const blogObject = req.body;
  const blog = new Blog({
    userId: req.ath.userId,
    ...blogObject,
  });

  blog
    .save()
    .then(() => {
      res.status(201).json({ message: "Objet enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

const getOneArticle = (req, res) => {
  const blogObject = req.body;
  Blog.findOne({ _id: req.params.id })
    .then((blog) => {
      res.status(200).json(blog);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

const modifyArticle = (req, res) => {
  const blogObject = req.body;
  Blog.findOne({ _id: req.params.id })
    .then((article) => {
      if (article.userId != req.ath.userId) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        Blog.updateOne(
          { _id: req.params.id },
          { _id: req.params.id, ...blogObject }
        )
          .then(() => res.status(200).json({ message: "Objet modifié!" }))
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

const deleteArticle = (req, res) => {
  Blog.findOne({ _id: req.params.id })
    .then((article) => {
      if (article.userId != req.ath.userId) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        Blog.deleteOne({ _id: req.params.id })
          .then(() => {
            res.status(200).json({
              message: "Deleted!",
            });
          })
          .catch((error) => {
            res.status(400).json({
              error,
            });
          });
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

module.exports = {
  createArticle,
  getAllArticle,
  getOneArticle,
  modifyArticle,
  deleteArticle,
};
