const jwt = require("jsonwebtoken");
const secret = require("../config.json").secret;

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.json({ error: "unauthorized" });
    }
    let enc_token = authHeader.split(" ")[1];
    if (enc_token) {
      const token = jwt.verify(enc_token, secret);
      req.token = token;
      next();
    }
  } catch (e) {
    next(e);
  }
};
