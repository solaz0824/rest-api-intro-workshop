const { movieRouter } = require("./movie-routes");
const { userRouter } = require("./user-routes");
const { personRouter } = require("./person-routes");
const { accountRouter } = require("./account-routes");

module.exports = {
  movieRouter,
  userRouter,
  personRouter,
  accountRouter,
};
