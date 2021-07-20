const Router = require("express").Router;

const { userController } = require("../controllers");

const userRouter = Router();

userRouter.get("/:id", userController.fetchUserById);
userRouter.get("/", userController.fetchUsers);

module.exports = {
  userRouter: userRouter,
};
