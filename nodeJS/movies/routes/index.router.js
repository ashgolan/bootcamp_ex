import router from "express";
import { moviesRouter } from "./movies.router.js";
export const indexRoute = router();

indexRoute.use("movies", moviesRouter);
