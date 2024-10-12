import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import fs from "fs";
// import path from "path";
import https from "https";

import { router as field_routes } from "./field/field.routes.js";
import { router as user_routes } from "./user/user.routes.js";

// Load SSL certificate and key
// const __dirname = path.resolve();
// const httpsOptions = {
//   key: fs.readFileSync(path.join(__dirname, "ssl", "key.pem")),
//   cert: fs.readFileSync(path.join(__dirname, "ssl", "cert.pem")),
// };

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dotenv.config();
await mongoose.connect(`${process.env.MONGODB_URI}`);

// Enable CORS for the '/users' route only
app.options("/users", cors()); // Preflight request handler for /users route

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

export function startHttp() {
  app.listen(80, () => {
    console.log("Server started on port 80 ");
  });
}
export function startHttps() {
  app.listen(80, () => {
    console.log("Server started on port 80 ");
  });
  https.createServer(app).listen(443, () => {
    console.log("Server started on port 443 ");
  });
}
