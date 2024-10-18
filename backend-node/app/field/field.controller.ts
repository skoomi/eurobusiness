import { getAllFields } from "./field.model.ts";

export async function getFields(req: Request, res: Response) {
  const fields = await getAllFields();
  res.send(
    fields.map((field) => ({
      id: field._id,
      name: field.name,
      orderNumber: field.orderNumber,
    }))
  );
}
