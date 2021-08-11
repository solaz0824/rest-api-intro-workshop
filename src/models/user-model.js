const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = Schema(
  {
    name: {
      type: String,
      // trim: true,
    },
    lastName: {
      type: String,
      // trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      // trim: true,
      unique: true,
      validate: {
        validator: (value) => isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
    firebase_id: {
      type: String,
      unique: true,
    },
  },

  {
    timestamps: true,
  },
);

const User = mongoose.model("user", UserSchema);

module.exports = User;
