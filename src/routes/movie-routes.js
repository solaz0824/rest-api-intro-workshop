const Router = require("express").Router;
const { authMiddleware } = require("../middlewares");
const { movieController } = require("../controllers");
const movieRouter = Router();

movieRouter.post("/", authMiddleware, movieController.createMovie);
movieRouter.get("/", authMiddleware, movieController.getMovies);
movieRouter.get("/:id", authMiddleware, movieController.getMovieById);

movieRouter.patch("/:id", authMiddleware, movieController.updateMovie);
movieRouter.delete("/:id", authMiddleware, movieController.deleteMovie);

movieRouter.post("/:id/credits", authMiddleware, movieController.createCredits);
movieRouter.get("/:id/credits", authMiddleware, movieController.getCredits);
// movieRouter.patch("/:id/credits", movieController.updateCredits);
movieRouter.patch(
  "/:id/credits",
  authMiddleware,
  movieController.deleteCredits,
);

module.exports = {
  movieRouter,
};
