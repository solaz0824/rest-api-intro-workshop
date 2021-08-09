const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PersonSchema = Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    placeOfBirth: {
      type: String,
      required: true,
      trim: true,
    },
    roles: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);
const Person = mongoose.model("person", PersonSchema);

module.exports = Person;
