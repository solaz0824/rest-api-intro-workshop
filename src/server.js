const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");

const {
  movieRouter,
  userRouter,
  personRouter,
  accountRouter,
} = require("./routes");

const { errorMiddleware } = require("./middlewares");
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.use("/movies", movieRouter);
app.use("/users", userRouter);
app.use("/persons", personRouter);
app.use("/account", accountRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "I am Root!!",
  });
});

app.use(errorMiddleware);

module.exports = app;
