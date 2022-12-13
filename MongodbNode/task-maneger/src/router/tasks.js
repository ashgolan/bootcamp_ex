import express from "express";
import {
  addTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller.js";
export const tasksRouter = express.Router();

tasksRouter.post("/", addTask);

tasksRouter.get("/", getTasks);

tasksRouter.get("/:id", getTaskById);

tasksRouter.patch("/:id", updateTask);

tasksRouter.delete("/:id", deleteTask);
