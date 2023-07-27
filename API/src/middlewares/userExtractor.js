const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  try {
    return jwt.verify(token, `${process.env.JWT_KEY}`);
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = (req, res, next) => {
  const authorization = req.get("authorization");

  let token = "";
  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }

  const decodedToken = verifyToken(token);

  if (!decodedToken || !decodedToken.id) {
    return res.status(401).json({ error: "Token no encotrado o inválido" });
  }

  const { id, name, email } = decodedToken;

  req.id = id;
  req.name = name;
  req.email = email;

  next();
};
