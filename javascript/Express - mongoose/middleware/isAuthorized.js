const jwt = require("jsonwebtoken");
function isAutorized(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Sem Token" });
  }
  jwt.verify(authorization, process.env.JWT_SECRET_KEY, (err, decoded) => {
    console.log(decoded)
    if (err) {
      return res.status(401).json({ message: "Token Inválido" });
    }
    req.login = decoded.login
    return next()
  });
}

module.exports = isAutorized;
