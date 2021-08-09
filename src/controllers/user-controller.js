const db = require("../models");
const { encryptString } = require("../utils/encrypt");

const createUser = async (req, res, next) => {
  const { name, lastName, email, password } = req.body;

  try {
    const encryptedPassword = await encryptString(password);
    const user = await db.User.create({
      name,
      lastName,
      email,
      password: encryptedPassword,
    });

    res.status(200).send({
      data: {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      },
    });
  } catch (error) {
    next(error);
  }
};
const getUsers = async (req, res, next) => {
  try {
    const users = await db.User.find().lean();
    res.status(200).send({
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  const { id: userId } = req.params;
  try {
    const user = await db.User.find({ _id: userId }).lean();
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req, res, next) => {
  const { id: userId } = req.params;
  const { name, lastName, email, password } = req.body;
  const encryptedPassword = await encryptString(password);

  try {
    const updatedUser = await db.User.findByIdAndUpdate(
      { _id: userId },
      {
        $set: {
          name,
          lastName,
          email,
          password: encryptedPassword,
        },
      },
      { new: true },
    );
    res.status(200).send({
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const { id: userId } = req.params;
  try {
    const result = await db.User.deleteOne({ _id: userId }).lean();
    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "A user successfully deleted",
      });
    } else {
      res.status(500).send({
        data: "Failed to delete a user",
      });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
