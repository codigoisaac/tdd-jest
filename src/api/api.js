const index = require("../index");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json({ message: "The API is working!" }));

app.get("/applyDiscount/:value/:discount", (req, res) => {
  const value = parseInt(req.params.value);
  const discount = parseInt(req.params.discount);

  res.json({ newValue: index.applyDiscount(value, discount) });
});

module.exports = app;
