import { Request, Response } from "express";
import { hash } from "../auth/crypt.js";
import {
  createUser,
  checkUserWithEmailExists,
  checkUserWithUsernameExists,
  getTopUsers,
} from "./users.model.js";

export async function registerUser(req: Request, res: Response) {
  const { username, email, password } = req.body;

  // Czy pola nie są puste
  if (!email || !password || !username) {
    return res.status(400).send("All fields are required");
  }

  // Check if email already exists
  // TODO: rozdzielić to i poprawić ifologię do rozdzielonego
  const emailExists = await checkUserWithEmailExists(email);
  const usernameExists = await checkUserWithUsernameExists(username);
  if (emailExists || usernameExists) {
    return res
      .status(422)
      .send("User with given email or username already exists");
  }

  const hashedPassword = await hash(password);

  await createUser({
    username: username,
    email: email,
    password: hashedPassword,
    points: 0,
    gamesPlayed: 0,
  });

  return res.status(201).json({ message: "User registered successfully" });
}

export async function getTop10Scores(req: Request, res: Response) {
  const top10Users = await getTopUsers(10);
  if (top10Users) {
    return res.status(200).json(
      top10Users.map((user) => {
        return { username: user.username, points: user.points };
      })
    );
  } else {
    return res.status(500).send("Database error");
  }
}
