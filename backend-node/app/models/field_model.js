import mongoose from "mongoose";

const fieldSchema = new mongoose.Schema({
  orderNumber: Number,
  name: String,
  type: String,
});

export const Field = mongoose.model("Field", fieldSchema);

export async function getAllFields() {
  return await Field.find();
}
