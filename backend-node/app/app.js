import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import https from "https";

import { router as field_routes } from "./field/field.routes.js";
import { router as user_routes } from "./user/user.routes.js";

// użycie env dev albo prod
const envFileName = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: envFileName });

//podłączenie do bazy
await mongoose.connect(`${process.env.MONGODB_URI}`);

//EXPRESS
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Preflight CORS dla /users
app.options("/users", cors());

app.use(
  cors({
    origin: [`${process.env.CORS_ORIGIN}`],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type",
    optionsSuccessStatus: 200,
    // credentials: true,
  })
);

app.use("/fields", field_routes);
app.use("/users", user_routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export function start() {
  app.listen(80, () => {
    console.log("Server started on port 80 ");
  });
  https.createServer(app).listen(443, () => {
    console.log("Server started on port 443 ");
  });
}
