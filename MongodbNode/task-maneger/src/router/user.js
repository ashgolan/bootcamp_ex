import express from "express";
import {
  addUser,
  getUserById,
  getUsers,
} from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.post("/", addUser);

userRouter.get("/:id", getUserById);
