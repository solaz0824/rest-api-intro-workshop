const db = require("../models");
const { encryptString } = require("../utils/encrypt");

async function signUp(req, res, next) {
  const { email, password, firstname, lastname } = req.body;

  try {
    const encryptedPassword = await encryptString(password);
    const { _id } = await db.User.create({
      email: email,
      password: encryptedPassword,
      firstName: firstname,
      lastName: lastname,
      active: true,
    });

    return res.status(200).send({
      id: _id,
      email,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function fetchUsers(req, res, next) {
  try {
    const users = await db.User.find();

    res.status(200).send({
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

async function fetchUserById(req, res, next) {
  const {
    params: { id: userId },
  } = req;

  try {
    const user = await db.User.findById(userId);

    res.status(200).send({
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signUp: signUp,
  fetchUsers: fetchUsers,
  fetchUserById: fetchUserById,
};
