import mongoose from "mongoose";
export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  gamesPlayed: number;
  points: number;
};
const userSchema = new mongoose.Schema({
  _id: String,
  username: String,
  email: String,
  password: String,
  points: Number,
  gamesPlayed: Number,
});

export const User = mongoose.model("User", userSchema);

export async function createUser({
  username,
  email,
  password,
  gamesPlayed,
  points,
}: {
  username: string;
  email: string;
  password: string;
  gamesPlayed: number;
  points: number;
}) {
  return await User.create({
    username,
    email,
    password,
    gamesPlayed,
    points,
  });
}

export async function getUserByEmail(email: string) {
  const user = await User.findOne({ email: email });
  if (user) {
    return {
      id: user._id,
      username: user.username,
      password: user.password,
      email: user.email,
      points: user?.points,
      gamesPlayed: user?.gamesPlayed,
    };
  } else return {};
}

export async function getTopUsers(limit: number) {
  return await User.find().limit(limit).sort("points");
}

export async function checkUserWithEmailExists(email: string) {
  return await User.exists({ email: email });
}
export async function checkUserWithUsernameExists(username: string) {
  return await User.exists({ username: username });
}
