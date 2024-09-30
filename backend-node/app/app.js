import express from "express";
import { router as field_routes } from "./routes/field_routes.js";

import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

await mongoose.connect(`${process.env.MONGODB_URI}`);

app.use("/fields", field_routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export function start() {
  app.listen(80, () => {
    console.log("Server started on port 80 ");
  });
}
