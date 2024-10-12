import { hash } from "../auth/crypt.js";
import { createUser, getUserByEmail } from "./users.model.js";

export async function registerUsera(req, res) {
  console.log("registerUsera odpolone");

  const { email, password } = req.body;
  console.log(req.body);
  console.log(email);
  console.log(password);
  if (!email || !password) {
    res.status(400).send("All fields are required");
  }
  // Check if email already exists
  const emailExists = await getUserByEmail(email);

  if (emailExists) {
    res.status(400).send("User with given email already exists");
  }

  const hashedPassword = await hash(password);

  await createUser(email, hashedPassword);
  console.log("User registered successfully");

  res.json({ message: "User registered successfully" });
}
