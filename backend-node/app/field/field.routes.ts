import { Router } from "express";
import { getFieldsByPresetName } from "./field.controller.js";

export const router = Router();

router.get("/:presetName", getFieldsByPresetName);
