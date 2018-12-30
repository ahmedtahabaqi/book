const mongoose = require("mongoose");

const schema = mongoose.Schema({
  bookname: { type: String, min: 3, require: true },
  author: { type: String, require: true },
  year: { type: Number },
  pages: { type: Number },
  language: { type: String },
  fileSize: { type: String },
  fileFormat: { type: String },
  description: { type: String },
  img: { type: String },
  pdf: { type: String },
  category: { type: String, require: true }
});

module.exports = mongoose.model("schema", schema);
