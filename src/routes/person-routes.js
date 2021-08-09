const Router = require("express").Router;
const { authMiddleware } = require("../middlewares");

const { personController } = require("../controllers");
const personRouter = Router();

personRouter.post("/", authMiddleware, personController.createPerson);

personRouter.get("/", authMiddleware, personController.getPersons);
personRouter.get("/:id", authMiddleware, personController.getPersonById);

personRouter.patch("/:id", authMiddleware, personController.updatePerson);
personRouter.delete("/:id", authMiddleware, personController.deletePerson);

module.exports = {
  personRouter,
};
