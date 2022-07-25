import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;

// let client = new Pool({
//   host: POSTGRES_HOST,
//   database: POSTGRES_DB,
//   user: POSTGRES_USER,
//   password: POSTGRES_PASSWORD
// });

let client;
console.log(process.env.ENV);

if (process.env.ENV === "dev") {
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
  });
}

if (process.env.ENV === "test") {
  client = new Pool({
    host: POSTGRES_HOST,
    database: process.env.POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
  });
}
export default client;
