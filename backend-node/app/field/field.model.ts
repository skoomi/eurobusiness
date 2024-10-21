import mongoose from "mongoose";

const fieldSchema = new mongoose.Schema({
  presetName: {
    type: String,
    required: true,
  },
  fields: [
    {
      orderNumber: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      fieldType: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      value1h: {
        type: Number,
        required: true,
      },
      value2h: {
        type: Number,
        required: true,
      },
      value3h: {
        type: Number,
        required: true,
      },
      value4h: {
        type: Number,
        required: true,
      },
      value5h: {
        type: Number,
        required: true,
      },
    },
  ],
});

export const Field = mongoose.model("Field", fieldSchema);

export async function findFieldsByPreset(presetName: string) {
  const fields = await Field.findOne({ presetName: presetName });
  if (!fields) {
    return [];
  }
  return fields.fields;
}

export async function getFieldByNumber(orderNumber: number) {
  return await Field.find({ orderNumber: orderNumber });
}
