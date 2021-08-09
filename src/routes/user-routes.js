const Router = require("express").Router;
const { authMiddleware } = require("../middlewares");

const { userController } = require("../controllers");
const userRouter = Router();

userRouter.get("/", authMiddleware, userController.getUsers);
userRouter.get("/:id", authMiddleware, userController.getUserById);

userRouter.patch("/:id", authMiddleware, userController.updateUser);
userRouter.delete("/:id", authMiddleware, userController.deleteUser);

module.exports = {
  userRouter,
};
