import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.send({ error: "Login first" });
  }

  const pureToken = token.slice(7);
  //   console.log(pureToken);
  const user = jwt.verify(pureToken, "secretkey");

  req.user = user;

  next();
};

export const isAdmin = (req, res, next) => {
  const user = req.user;
  //   console.log(req.user);

  if (user.role === "admin") {
    next();
  } else {
    res.status(401).send({ error: "Unauthorized" });
  }
};
