const { Schema, model } = require("mongoose");

const tvshowSchema = new Schema({
  title: String,
  creator: String,
  premiere_year: Number,
  end_year: Number,
  seasons: Number,
  genre: String,
  rating: Number,
});

const Tvshow = model("Tvshow", tvshowSchema);
module.exports = Tvshow;
