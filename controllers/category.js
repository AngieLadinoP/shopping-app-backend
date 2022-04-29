import express from "express";
import { Category } from "../models/category.js";
const Router = express.Router();

const controllerCategory = {
  createCategory: async (req, res) => {
    try {
      const { name, description } = req.body;

      if ((!name, !description, !price)) {
        return res.status(400).json({ msg: "Please fill in all fields" });
      }
      const product = new Category({
        name,
        description,
      });
      const savedCategory = await product.save();

      res.json({ msg: "Category created successfully" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getCategories: async (req, res) => {
    try {
      const product = await Category.find();
      res.json(product);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getCategory: async (req, res) => {
    try {
      const product = await Category.findById(req.params._id);
      res.json(product);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const { name, description } = req.body;
      await Category.findOneAndUpdate(
        { _id: req.params._id },
        { name, description }
      );
      res.json({ msg: "Category successfully updated" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params._id);

      res.json({ msg: "Category successfully deleted" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

export { controllerCategory };
