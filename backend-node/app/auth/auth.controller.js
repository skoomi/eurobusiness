import { getUserByEmail } from "../user/users.model.js";
import { compare, generateToken } from "./crypt.js";

export function checkAuth(req, res, next) {
  let isAuthenticated = req.session.user && req.session.user.isAuthenticated;

  if (isAuthenticated) {
    next();
  } else {
    res.status(401).send("Unauthorized, please log in.");
  }
}

export async function authenticate(req, res) {
  console.log("");
  console.log("authenticate req.headers");
  console.log(req.headers);
  console.log("authenticate req.body");
  console.log(req.body);
  const { email, password } = req.body;

  // Czy pola nie są puste
  if (!email || !password) {
    return res.status(400).send("All fields are required");
  }
  const user = await getUserByEmail(email);

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
    sameSite: "Lax", // Prevents cross-site requests
  });

  console.log("");
  console.log("authenticate res.headers");
  console.log(res.headers);
  console.log("authenticate res.body");
  console.log(res.body);
  console.log("authenticate res.cookie");
  console.log(res.cookie);
  res.send();
}

export function logOut(req, res) {
  res.clearCookie("token");
  return res.send("Logged out");
}
