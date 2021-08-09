const Router = require("express").Router;

const { movieController } = require("../controllers");
const movieRouter = Router();

movieRouter.get("/", movieController.fetchMovies);
movieRouter.patch("/:id", movieController.updateMovie);
movieRouter.delete("/:id", movieController.deleteMovie);

module.exports = {
  movieRouter: movieRouter,
};
