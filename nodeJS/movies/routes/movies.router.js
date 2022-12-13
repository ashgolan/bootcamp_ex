import router from "express";
import {
  findMovie,
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
} from "../utils.js";
import fs from "fs";
export const moviesRouter = router();

moviesRouter.get("", (req, res) => {
  const movies = getAllMovies();
  res.status(200).send(movies);
});
moviesRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const movie = findMovie(id);
  if (!movie) res.status(404).send("No movie found");

  res.status(200).send(movie);
});
moviesRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const movies = deleteMovie(id);
  fs.writeFileSync("./db/movies.json", JSON.stringify(movies));
  res.status(200).send(movies);
});
moviesRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const movies = updateMovie(req.body, id);
  fs.writeFileSync("./db/movies.json", JSON.stringify(movies));
  res.status(200).send(movies);
});
moviesRouter.post("/", (req, res) => {
  const movie = addMovie(req.body);
  const allmovies = getAllMovies();
  allmovies.push(movie);
  fs.writeFileSync("./db/movies.json", JSON.stringify(allmovies));

  res.status(200).send(movie);
});
