const mongoose, { Schema } = require("mongoose");

const MovieSchema = new Schema({
  title: {
    type: String,
    required: [true, "Movie title is required"],
  },
  releaseDate: {
    type: Date
  },
  originalLanguage: String,
  posterPath: String,
  plot: String,
  budget: {
    type: Number,
    min: 0,
  },
  productionCountries: [String],
  productionCompanies: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "companies"
  }],
  genres: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "genre"
  }],
  externalIds: {
    type: Map,
    of: String
  }
});

const MovieModel = new mongoose.model("movie", MovieSchema);

module.exports = MovieModel;