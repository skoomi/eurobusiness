import { genSalt, hash as bcryptHash, compare as bcrypCompare } from "bcrypt";
import jwt from "jsonwebtoken";

export const hash = async (plainPass) => {
  const salt = await genSalt(12);
  return await bcryptHash(plainPass, salt);
};

export const compare = async (plainPass, hash) => {
  return await bcrypCompare(plainPass, hash);
};

export function generateToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
}

export function authToken(req, res, next) {
  console.log("authToken req:");
  console.log(req.headers);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).send();

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send();
    req.user = user;
    next();
  });
}
