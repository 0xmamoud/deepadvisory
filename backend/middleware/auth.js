const jwt = require("jsonwebtoken");
require("dotenv").config();

const PASSWORD = process.env.PASSWORD;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, PASSWORD);
    req.ath = {
      userId: decodedToken.userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
