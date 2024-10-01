import mongoose from "mongoose";
import { Field } from "../field/field.model.js";
import dotenv from "dotenv";
dotenv.config();

const fields = [
  { orderNumber: 1, name: "Start", type: "special" },
  { orderNumber: 2, name: "Saloniki", type: "property" },
  { orderNumber: 3, name: "Szansa", type: "special" },
  { orderNumber: 4, name: "Ateny", type: "property" },
  { orderNumber: 5, name: "Parking strzeżony", type: "property" },
  { orderNumber: 6, name: "Koleje południowe", type: "property" },
  { orderNumber: 7, name: "Neapol", type: "property" },
  { orderNumber: 8, name: "Szansa", type: "special" },
  { orderNumber: 9, name: "Mediolan", type: "property" },
  { orderNumber: 10, name: "Rzym", type: "property" },
  { orderNumber: 11, name: "Dla odwiedzających", type: "special" },
  { orderNumber: 12, name: "Barcelona", type: "property" },
  { orderNumber: 13, name: "Elektrownia atomowa", type: "property" },
  { orderNumber: 14, name: "Sewilla", type: "property" },
  { orderNumber: 15, name: "Madryt", type: "property" },
  { orderNumber: 16, name: "Koleje zachodnie", type: "property" },
  { orderNumber: 17, name: "Liverpool", type: "property" },
  { orderNumber: 18, name: "Szansa", type: "special" },
  { orderNumber: 19, name: "Glasgow", type: "property" },
  { orderNumber: 20, name: "Londyn", type: "property" },
  { orderNumber: 21, name: "Parking niestrzeżony", type: "special" },
  { orderNumber: 22, name: "Rotterdam", type: "property" },
  { orderNumber: 23, name: "Szansa", type: "special" },
  { orderNumber: 24, name: "Bruksela", type: "property" },
  { orderNumber: 25, name: "Amsterdam", type: "property" },
  { orderNumber: 26, name: "Koleje północne", type: "property" },
  { orderNumber: 27, name: "Malmo", type: "property" },
  { orderNumber: 28, name: "Goteborg", type: "property" },
  { orderNumber: 29, name: "Wodociągi", type: "property" },
  { orderNumber: 30, name: "Sztokholm", type: "property" },
  { orderNumber: 31, name: "Więzienie", type: "special" },
  { orderNumber: 32, name: "Frankfurt", type: "property" },
  { orderNumber: 33, name: "Kolonia", type: "property" },
  { orderNumber: 34, name: "Szansa", type: "special" },
  { orderNumber: 35, name: "Bonn", type: "property" },
  { orderNumber: 36, name: "Koleje wschodnie", type: "property" },
  { orderNumber: 37, name: "Szansa", type: "special" },
  { orderNumber: 38, name: "Innsbruck", type: "property" },
  { orderNumber: 39, name: "Podatek od wzbogacenia", type: "special" },
  { orderNumber: 40, name: "Wiedeń", type: "property" },
];

async function seedFields() {
  await Field.create(fields);
  await mongoose.disconnect();
}
await mongoose.connect(`${process.env.MONGODB_URI}`);

seedFields()
  .then(() => {
    console.log("Admin seeding completed");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error seeding admin:", err);
    process.exit(1);
  });
