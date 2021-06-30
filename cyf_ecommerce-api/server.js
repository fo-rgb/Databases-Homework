const express = require("express");
const app = express();

// importing pg library
const { Pool } = require("pg");

// adding body-parser to access the parameters
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "root",
  port: 5432,
});

app.get("/", function (req, res) {
  res.send("we are working on connecting Database SQL with NodeJS");
});
app.get("/customers", function (req, res) {
  pool.query("SELECT * FROM customers", (error, result) => {
    res.send(result.rows);
  });
});

app.get("/suppliers", function (req, res) {
  pool.query("SELECT * FROM suppliers", (error, result) => {
    res.send(result.rows);
  });
});

app.get("/products", function (req, res) {
  pool.query("SELECT * FROM products", (error, result) => {
    res.send(result.rows);
  });
});

app.listen(3000, () => console.log("Server is up and running"));
