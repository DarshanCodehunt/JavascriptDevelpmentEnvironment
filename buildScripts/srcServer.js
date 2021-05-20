const express = require("express");
const path = require("path");
const open = require("open");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src", "index.html"));
});

app.listen(3000, () => {
  open("http://localhost:3000");
});
