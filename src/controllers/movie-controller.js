const db = require("../models");

// ? cast and crew should be _id of person data.
const createMovie = async (req, res, next) => {
  const { title, releaseYear, genres, duration, cast, crew } = req.body;
  try {
    const movie = await db.Movie.create({
      title,
      releaseYear,
      genres,
      duration,
      cast,
      crew,
    });
    res.status(200).send({
      data: {
        title: movie.title,
        releaseYear: movie.releaseYear,
        genres: movie.genres,
        duration: movie.duration,
        cast: movie.cast,
        crew: movie.crew,
      },
    });
  } catch (error) {
    next(error);
  }
};
// &  example URL:   localhost:6060/movies?page=2&size=2
// &                 localhost:6060/movies?page=2
const getMovies = async (req, res, next) => {
  try {
    let { page, size } = req.query;
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 10;
    }
    const limit = parseInt(size);
    const skip = (page - 1) * size;

    const movies = await db.Movie.find()
      .limit(limit)
      .skip(skip)
      .populate(["cast", "crew"])
      .lean();
    res.status(200).send({
      data: movies,
    });
  } catch (error) {
    next(error);
  }
};

const getMovieById = async (req, res, next) => {
  const { id: movieId } = req.params;
  try {
    const movie = await db.Movie.findOne({ _id: movieId })
      .populate(["cast", "crew"])
      .lean();
    res.status(200).send({
      data: movie,
    });
  } catch (error) {
    next(error);
  }
};

const updateMovie = async (req, res, next) => {
  const { id: movieId } = req.params;
  const { title, releaseYear, genres, duration, cast, crew } = req.body;

  try {
    const updatedMovie = await db.Movie.findOneAndUpdate(
      {
        _id: movieId,
      },
      {
        $set: {
          title,
          releaseYear,
          genres,
          duration,
          cast,
          crew,
        },
      },
      {
        new: true,
      },
    );
    res.status(200).send({
      data: updatedMovie,
    });
  } catch (error) {
    next(error);
  }
};

const deleteMovie = async (req, res, next) => {
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
  } catch (error) {
    next(error);
  }
};

// ?  Postman body enter this
// * { "cast": { "_id": "person id" }, "crew":{"_id": "person id"}}
const createCredits = async (req, res, next) => {
  const {
    cast: { _id: castId },
    crew: { _id: crewId },
  } = req.body;
  const { id: movieId } = req.params;

  try {
    const movie = await db.Movie.findOneAndUpdate(
      {
        _id: movieId,
      },
      {
        $push: {
          cast: { _id: castId },
          crew: { _id: crewId },
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    ).populate(["cast", "crew"]);
    res.status(200).send({
      data: {
        cast: movie.cast,
        crew: movie.crew,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getCredits = async (req, res, next) => {
  const { id: movieId } = req.params;
  try {
    const credits = await db.Movie.find({ _id: movieId })
      .select({
        cast: 1,
        crew: 1,
      })
      .populate(["cast", "crew"]);
    res.status(200).send({
      data: credits,
    });
  } catch (error) {
    next(error);
  }
};
const deleteCredits = async (req, res, next) => {
  const { id: movieId } = req.params;
  try {
    const movie = await db.Movie.updateMany(
      {
        _id: movieId,
      },
      {
        $unset: {
          cast: "",
          crew: "",
        },
      },
    );
    res.status(200).send({
      data: {
        movie,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  createCredits,
  getCredits,
  deleteCredits,
};
