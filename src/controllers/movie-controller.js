const db = require("../models");
const { encryptString } = require("../utils/encrypt");

async function fetchMovies(req, res, next) {
  try {
    const movies = db.Movie.find().lean();
    res.status(200).send({
      data: movies,
    });
  } catch (error) {
    next(error);
  }
}

async function updateMovie(req, res, next) {
  try {
    const { id: movieId } = req.params;
  } catch (err) {}
}

async function deleteMovie(req, res, next) {
  const { id: movieId } = req.params;
  try {
    const result = await db.Movie.deleteOne({ _id: movieId }).lean();
    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "A movie successfully deleted",
      });
    } else {
      res.status(500).send({
        data: "Failed to delete a movie",
      });
    }
  } catch (err) {}
}

module.exports = {
  fetchMovies: fetchMovies,
  updateMovie: updateMovie,
  deleteMovie: deleteMovie,
};
