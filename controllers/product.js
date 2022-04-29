import express from "express";
import { Product } from "../models/product.js";
const Router = express.Router();

const controllerProduct = {
  createProduct: async (req, res) => {
    try {
      const {
        categoryId,
        name,
        image,
        category,
        description,
        price,
        components,
        quantity,
      } = req.body;

      if ((!name, !description, !price)) {
        return res.status(400).json({ msg: "Please fill in all fields" });
      }
      const product = new Product({
        categoryId,
        name,
        image,
        category,
        description,
        price,
        components,
        quantity,
      });
      const savedProduct = await product.save();

      res.json({ msg: "Product created successfully" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getProducts: async (req, res) => {
    try {
      const product = await Product.find();
      res.json(product);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params._id);
      res.json(product);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { name, image, description, price, components, quantity } =
        req.body;
      await Product.findOneAndUpdate(
        { _id: req.params._id },
        { name, description, price, image,components, quantity }
      );
      res.json({ msg: "Product successfully updated" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params._id);

      res.json({ msg: "Product successfully deleted" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

export { controllerProduct };
