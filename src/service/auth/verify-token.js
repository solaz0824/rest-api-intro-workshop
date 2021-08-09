const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const { ACCESS_TOKEN_SECRET } = process.env;

const verifyToken = async (token) => {
  return new Promise((resolve, reject) => {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    console.log(decoded);
    if (!decoded) {
      reject("token validation error");
    }
    resolve(decoded);
  });
};

module.exports = {
  verifyToken,
};
