const express = require("express");
const cors = require("cors");
const movies = require("./movies.json");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello Ljubi");
});

app.get("/movies/list", (req, res) => {
  const offset = parseInt(req.query.offset) || 0; // default to 0 if offset is not provided
  const from = offset;
  const to = offset + 12;
  const moviesSubset = movies.slice(from, to); // using slice to get the subset
  setTimeout(() => {
    return res.json({ movies: moviesSubset, count: movies.length });
  }, 3000);
});

app.get("/movie/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((m) => m.id === id);
  return res.send(movie);
});

app.listen(8080, () => {
  console.log("now listening on PORT 8080");
});
