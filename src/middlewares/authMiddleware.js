const { getAuthToken, verifyAuthToken } = require("../services/firebase");

async function authMiddleware(req, res, next) {
  try {
    const bearerToken = await getAuthToken(req.headers);
    const userClaims = await verifyAuthToken(bearerToken);

    const { email, uid } = userClaims;
    req.user = {
      email: email,
      uid: uid,
    };

    next();
  } catch (error) {
    res.status(401).send({
      data: null,
      error: error,
    });
  }
}

module.exports = {
  authMiddleware: authMiddleware,
};
