import { genSalt, hash as bcryptHash, compare as bcrypCompare } from "bcrypt";

export const hash = async (plainPass) => {
  const salt = await genSalt(12);
  return await bcryptHash(plainPass, salt);
};

export const compare = async (plainPass, hash) => {
  return await bcrypCompare(plainPass, hash);
};
