const express = require("express");
const cors = require("cors");
const movies = require("./movies.json");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello Ljubi");
});

app.get("/movies/list", (req, res) => {
  return res.send(movies);
});

app.listen(8080, () => {
  console.log("now listening on PORT 8080");
});
