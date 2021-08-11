const db = require("../models");

async function authenticate(req, res, next) {
  const { uid, email } = req.user;
  try {
    const userResponse = await db.User.findOne({
      email: email,
    });

    if (!userResponse) {
      await db.User.create({
        firebase_id: uid,
        email: email,
      });
    }

    if (userResponse) {
      return res.status(200).send({
        data: {
          email: email,
        },
      });
    }

    res.status(201).send({
      data: {
        email: email,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function signOut(req, res) {
  req.signOut();

  res.status(200).send({
    data: "OK",
  });
}
module.exports = {
  authenticate,
  signOut,
};
