import { Router } from "express";
import { getFields } from "../controllers/field_controller.js";

export const router = Router();

router.get("/", getFields);
