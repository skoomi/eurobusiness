import { hash } from "../auth/crypt.js";
import { createUser, getUserByEmail } from "./users.model.js";

export async function registerUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("All fields are required");
  }
  console.log(email);
  // Check if email already exists
  const emailExists = await getUserByEmail(email);
  console.log(emailExists);

  if (emailExists) {
    console.log("emailExists");

    return res.status(400).send("User with given email already exists");
  }
  console.log("hashing");

  const hashedPassword = await hash(password);
  console.log(hashedPassword);

  await createUser(email, hashedPassword);

  res.redirect("/");
}
