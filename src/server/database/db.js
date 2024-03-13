const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: "DalryDepot",
});
