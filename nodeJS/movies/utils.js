import movies from "./db/movies.json" assert { type: "json" };
import fs from "fs";
export const getAllMovies = () => {
  return movies;
};
export const addMovie = (movie) => {
  return movie;
};
export const updateMovie = (movie, id) => {
  const newData = movies.map((Oldmovie) => {
    if (Oldmovie.id === id) Oldmovie = movie;
    return Oldmovie;
  });
  return newData;
};
export const deleteMovie = (id) => {
  const newData = movies.filter((movie) => {
    if (movie.id !== id) return movie;
  });
  return newData;
};
export const findMovie = (id) => {
  return movies.find((movie) => movie.id === id);
};
