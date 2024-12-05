const express = require("express");

const router = express.Router();

//import func frm controller

const {
  getTvshows,
  getTvshow,
  addNewTvshow,
  updateTvshow,
  deletedTvshow,
} = require("../controllers/tvshow");

// get all
router.get("/", async (req, res) => {
  try {
    const title = req.body.title;
    const creator = req.body.creator;
    const premiere_year = req.body.premiere_year;
    const end_year = req.body.end_year;
    const seasons = req.body.seasons;
    const genre = req.body.genre;
    const rating = req.body.rating;

    const tvshows = await getTvshows(
      title,
      creator,
      premiere_year,
      end_year,
      seasons,
      genre,
      rating
    );
    res.status(200).send(tvshows);
  } catch (error) {
    res.status(400).send({ error: error._message });
  }
});

//get one
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const tvshow = await getTvshow(id);
    res.status(200).send(tvshow);
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});

//add show
router.post("/", async (req, res) => {
  try {
    const title = req.body.title;
    const creator = req.body.creator;
    const premiere_year = req.body.premiere_year;
    const end_year = req.body.end_year;
    const seasons = req.body.seasons;
    const genre = req.body.genre;
    const rating = req.body.rating;

    //err check
    if (!title || !creator || !premiere_year || !seasons || !genre || !rating) {
      return res.status(400).send({
        error: "Fill in all required fields properly",
      });
    }

    const newTvshow = await addNewTvshow(
      title,
      creator,
      premiere_year,
      end_year,
      seasons,
      genre,
      rating
    );
    res.status(200).send(newTvshow);
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});

//update
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const creator = req.body.creator;
    const premiere_year = req.body.premiere_year;
    const end_year = req.body.end_year;
    const seasons = req.body.seasons;
    const genre = req.body.genre;
    const rating = req.body.rating;

    const updatedTvshow = await updateTvshow(
      id,
      title,
      creator,
      premiere_year,
      end_year,
      seasons,
      genre,
      rating
    );
    res.status(200).send(updatedTvshow);
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    //trigger del func
    await deletedTvshow(id);
    res.status(200).send({
      message: `#${id} has been deleted`,
    });
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});
module.exports = router;
