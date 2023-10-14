const mongoose = require("mongoose");

const blog = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  readTime: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Blog", blog);
