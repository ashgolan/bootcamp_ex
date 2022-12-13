import { Product } from "../models/product.js";

export const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
};
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (e) {
    res.status(500).send(e);
  }
};
export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).send(product);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getProductsByRange = async (req, res) => {
  try {
    const min = req.params.min;
    const max = req.params.max;

    const products = await Product.find({
      price: { $gte: min, $lte: max },
    });
    res.status(200).send(products);
  } catch (e) {
    res.status(500).send(e);
  }
};
export const updateProduct = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["active", "discount"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isValidOperation) return res.status(404).send("invalid update!");
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) return res.status(404).send();
    res.status(200).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).send(e);
    res.status(200).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
};
export const deleteProducts = async (req, res) => {
  try {
    const result = await Product.deleteMany({});
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};
