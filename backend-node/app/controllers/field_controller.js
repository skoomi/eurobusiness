import { getAllFields } from "../models/field_model.js";

export async function getFields(req, res) {
  const fields = await getAllFields();
  res.send(
    fields.map((field) => ({
      id: field._id,
      name: field.name,
      orderNumber: field.orderNumber,
    }))
  );
}
