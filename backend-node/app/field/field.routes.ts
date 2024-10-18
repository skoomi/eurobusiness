import { Router } from "express";
import { getFields } from "./field.controller.js";

export const router = Router();

router.get("/", getFields);
