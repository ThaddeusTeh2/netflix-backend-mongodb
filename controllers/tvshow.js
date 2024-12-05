//load models
const Tvshow = require("../models/tvshow");

//CRUD

// all tvshows
const getTvshows = async (
  title,
  creator,
  premiere_year,
  end_year,
  seasons,
  genre,
  rating
) => {
  // create a container for filter
  let filter = {};

  // if title exists, pass it to the filter container
  if (title) {
    filter.title = title;
  }
  // if creator exists, pass it to the filter container
  if (creator) {
    filter.creator = creator;
  }
  // if premiere_year exists, pass it to the filter container
  if (premiere_year) {
    filter.premiere_year = premiere_year;
  }
  // if end_year exists, pass it to the filter container
  if (end_year) {
    filter.end_year = end_year;
  }
  // if seasons exists, pass it to the filter container
  if (seasons) {
    filter.seasons = seasons;
  }
  // if genre exists, pass it to the filter container
  if (genre) {
    filter.genre = genre;
  }
  // if rating exists, pass it to the filter container
  if (rating) {
    filter.rating = rating;
  }

  // apply filter in .find()
  const tvshows = await Tvshow.find(filter);
  return tvshows;
};

//get 1 tvshow
const getTvshow = async (id) => {
  const tvshow = await Tvshow.findById(id);
  return tvshow;
};

//add tvshow
const addNewTvshow = async (
  title,
  creator,
  premiere_year,
  end_year,
  seasons,
  genre,
  rating
) => {
  // create
  const newTvshow = new Tvshow({
    title,
    creator,
    premiere_year,
    end_year,
    seasons,
    genre,
    rating,
  });

  //save to db
  await newTvshow.save();
  return newTvshow;
};

//update
const updateTvshow = async (
  id,
  title,
  creator,
  premiere_year,
  end_year,
  seasons,
  genre,
  rating
) => {
  const updatedTvshow = await Tvshow.findByIdAndUpdate(
    id,
    { title, creator, premiere_year, end_year, seasons, genre, rating },
    {
      new: true, // should be true by default lmao
    }
  );
  return updatedTvshow;
};

//delete
const deletedTvshow = async (id) => {
  return await Tvshow.findByIdAndDelete(id);
};

//export
module.exports = {
  getTvshows,
  getTvshow,
  addNewTvshow,
  updateTvshow,
  deletedTvshow,
};
