const db = require("../models");
const { compareEncrypted } = require("../utils/encrypt");
const { createToken } = require("../service/auth/create-token");

async function authenticate(req, res, next) {
  const { email, password: inputPassword } = req.body;

  try {
    const userResponse = await db.User.findOne({
      email: email,
    });

    if (!userResponse) {
      return res.status(400).send({
        error: "Error, invalid credentials!",
      });
    }

    if (userResponse) {
      const { password } = userResponse;

      const isUser = await compareEncrypted({
        plainData: inputPassword,
        encryptedData: password,
      });

      if (isUser) {
        const accessToken = createToken({ email: email });
        if (accessToken) {
          return res.status(200).send({
            data: {
              accessToken,
              id: userResponse._id,
            },
          });
        }
      } else {
        return res.status(401).send(error);
      }
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  authenticate: authenticate,
};
