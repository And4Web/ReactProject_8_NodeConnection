// const http = require("http");

const PORT = 5000;
// const server = http.createServer((req, res) => {
//   res.end("Hello World from Node Js...");
// });

// server.listen(PORT);

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is a homepage.");
});

app.get("/products", (req, res) => {
  res.send("This is a Products page.");
});

app.listen(PORT, () => {
  console.log("Server has started at PORT", PORT);
});
