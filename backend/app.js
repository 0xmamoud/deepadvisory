require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const blogRoutes = require("./routes/blog");

const app = express();
const PORT = process.env.PORT || 4000;
const DATABASE = process.env.DATABASE_URL;

mongoose
  .connect(DATABASE)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", userRoutes);
app.use("/api/blog", blogRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
