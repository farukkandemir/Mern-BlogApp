const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) return res.status(401).json({message: "You are not authorized"});

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({message: "Invalid Token"});

    req.username = decoded.username;
    next();
  });
};

module.exports = verifyJwt;
