import { genSalt, hash as bcryptHash, compare as bcrypCompare } from "bcrypt";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const hash = async (plainPass: string) => {
  const salt = await genSalt(12);
  return await bcryptHash(plainPass, salt);
};

export const compare = async (plainPass: string, hash: string) => {
  return await bcrypCompare(plainPass, hash);
};

export function generateToken(user: { id: string; email: string }) {
  return jwt.sign(
    { id: user.id, email: user.email },
    `${process.env.JWT_SECRET_KEY}`,
    {
      expiresIn: "1h",
    }
  );
}

export function cookieJwtAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.token;
  if (token == null) return res.status(401).send();

  jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err: any, user: any) => {
    if (err) return res.status(403).send();
    next();
  });
}
