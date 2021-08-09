const { verifyToken } = require("../service/auth");
const db = require("../models");

const authMiddleware = async (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];

    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      const userInputs = await verifyToken(bearerHeader);
      const user = await db.User.findOne({
        email: userInputs.email,
      });
      req.user = {
        email: userInputs.email,
        id: user._id,
      };
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authMiddleware,
};
