import validator from "validator";
import mongoose from "mongoose";

export const Task = new mongoose.model("Task", {
  description: { type: String, required: true, trim: true },

  completed: { type: Boolean, default: false },
});
