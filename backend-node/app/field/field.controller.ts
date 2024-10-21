import { Request, Response } from "express";
import { findFieldsByPreset } from "./field.model.ts";

export async function getFieldsByPresetName(req: Request, res: Response) {
  const { presetName } = req.params;

  const fields = await findFieldsByPreset(presetName);

  return res.send(fields);
}
