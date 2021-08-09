const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MovieSchema = Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    genres: {
      type: [String],
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    cast: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        index: true,
        ref: "person",
      },
    ],
    crew: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        index: true,
        ref: "person",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;
