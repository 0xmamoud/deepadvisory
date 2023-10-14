require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const PASSWORD = process.env.PASSWORD;
const saltRounds = 10;

const signup = (req, res) => {
  bcrypt
    .hash(req.body.password, saltRounds)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé" }))
        .catch((error) => res.status(401).json({ error: error.message }));
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

const login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(401).json({
          message: "Paire identifiant/mot de passe incorrecte",
        });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              res.status(401).json({
                message: "Paire identifiant/mot de passe incorrecte",
              });
            } else {
              res.status(200).json({
                userId: user._id,
                token: jwt.sign({ userId: user._id }, PASSWORD, {
                  expiresIn: "24h",
                }),
              });
            }
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

module.exports = {
  signup,
  login,
};
