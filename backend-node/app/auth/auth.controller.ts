import { Request, Response } from "express";
import { getUserByEmail, User } from "../user/users.model.js";
import { compare, generateToken } from "./crypt.js";

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  // Czy pola nie są puste
  if (!email || !password) {
    return res.status(400).send("All fields are required");
  }
  const user = (await getUserByEmail(email)) as User;

  if (!user) {
    return res.status(404).send("User not found.");
  }

  const isPasswordValid = await compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).send("Invalid credentials");
  }

  const token = generateToken(user);

  res.cookie("token", token, {
    httpOnly: true, // Not accessible via JavaScript
    secure: true, // Ensures the cookie is only sent over HTTPS
    maxAge: 3600000, // 1 hour
    sameSite: "none", // Prevents cross-site requests
  });

  const { password: hashedPassword, ...typeScriptUser } = user;
  res.json(typeScriptUser);
}

export function logOut(req: Request, res: Response) {
  res.clearCookie("token");
  return res.send("Logged out");
}
