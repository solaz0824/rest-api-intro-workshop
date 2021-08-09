const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const { ACCESS_TOKEN_SECRET } = process.env;

const createToken = (userData) => {
  const token = jwt.sign(userData, ACCESS_TOKEN_SECRET, {
    expiresIn: "1200s",
  });
  return token;
};

module.exports = { createToken };
