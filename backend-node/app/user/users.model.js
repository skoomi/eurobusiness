import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

export const User = mongoose.model("User", userSchema);

export async function createUser(email, password) {
  return await User.create({ username: "Nazwa gracza", email, password });
}

export async function getUserByEmail(email) {
  return await User.findOne({ email: email });
}
