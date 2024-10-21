import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  points: Number,
});

export const User = mongoose.model("User", userSchema);

export async function createUser({
  username,
  email,
  password,
  points,
}: {
  username: string;
  email: string;
  password: string;
  points: number;
}) {
  return await User.create({
    username,
    email,
    password,
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
      points: user.points,
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
