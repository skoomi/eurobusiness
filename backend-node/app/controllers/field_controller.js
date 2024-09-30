import { getAllFields } from "../models/field_model.js";

export async function getFields(req, res) {
  const fields = await getAllFields();
  console.log(fields);
  res.send(fields);
}
