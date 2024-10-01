import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { router as field_routes } from "./field/field.routes.js";

const app = express();

dotenv.config();
await mongoose.connect(`${process.env.MONGODB_URI}`);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    // credentials: true,
  })
);

app.use("/fields", field_routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export function start() {
  app.listen(80, () => {
    console.log("Server started on port 80 ");
  });
}
