import jwt from "jsonwebtoken";

export const verifyAuthorize = (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(400).json({ msg: "Access denied" });
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRECY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
