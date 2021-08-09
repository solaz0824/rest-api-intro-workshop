const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MovieSchema = Schema({});

const Movie = mongoose.model("movie", MovieSchema);

module.exports = Movie;
