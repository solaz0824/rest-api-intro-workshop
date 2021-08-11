const Router = require("express").Router;
const { authMiddleware } = require("../middlewares");

const { authController } = require("../controllers");

const accountRouter = Router();

accountRouter.post("/sign-in", authMiddleware, authController.authenticate);
// accountRouter.post("/register", userController.createUser);
accountRouter.post("/sign-out", authMiddleware, authController.signOut);

module.exports = {
  accountRouter: accountRouter,
};
