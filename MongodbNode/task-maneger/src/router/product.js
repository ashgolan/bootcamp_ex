import express from "express";
import {
  addProduct,
  deleteProduct,
  deleteProducts,
  getProductById,
  getProducts,
  getProductsByRange,
  updateProduct,
} from "../controllers/products.controller.js";
export const productRouter = express.Router();

productRouter.post("/", addProduct);

productRouter.get("/", getProducts);

productRouter.get("/:id", getProductById);

productRouter.get("/range/:min/:max", getProductsByRange);

productRouter.patch("/:id", updateProduct);

productRouter.delete("/:id", deleteProduct);

productRouter.delete("/", deleteProducts);
