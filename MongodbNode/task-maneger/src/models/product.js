import validator from "validator";
import mongoose from "mongoose";

export const Product = new mongoose.model("Product", {
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  active: { type: Boolean, default: true, trim: true },
  discount: { type: Number, default: 0, trim: true },
});
