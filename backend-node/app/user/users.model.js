import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  email: String,
  password: String,
  points: Number,
  gamesPlayed: Number,
});

export const User = mongoose.model("User", userSchema);

export async function createUser({ email, password, gamesPlayed, points }) {
  return await User.create({
    username: "Nazwa gracza",
    email,
    password,
    gamesPlayed,
    points,
  });
}

export async function getUserByEmail(email) {
  return await User.findOne({ email: email });
}

export async function checkUserExists(email) {
  return await User.exists({ email: email });
}
