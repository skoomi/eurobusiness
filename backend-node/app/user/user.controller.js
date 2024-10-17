import { hash } from "../auth/crypt.js";
import { createUser, checkUserExists } from "./users.model.js";

export async function registerUser(req, res) {
  const { email, password } = req.body;

  // Czy pola nie są puste
  if (!email || !password) {
    return res.status(400).send("All fields are required");
  }

  // Check if email already exists
  const emailExists = await checkUserExists(email);
  if (emailExists) {
    return res.status(422).send("User with given email already exists");
  }

  const hashedPassword = await hash(password);

  await createUser({
    email: email,
    password: hashedPassword,
    points: 0,
    gamesPlayed: 0,
  });

  return res.status(201).json({ message: "User registered successfully" });
}
