import { hash } from "../auth/crypt.js";
import {
  createUser,
  checkUserWithEmailExists,
  checkUserWithUsernameExists,
} from "./users.model.js";

export async function registerUser(req, res) {
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
