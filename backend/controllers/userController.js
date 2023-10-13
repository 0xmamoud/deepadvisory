const bcrypt = require("bcrypt");
const User = require("../models/userModel");

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

module.exports = {
  signup,
};
