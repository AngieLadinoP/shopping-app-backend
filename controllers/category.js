import express from "express";
import { Category } from "../models/category.js";
const Router = express.Router();

const controllerCategory = {
  createCategory: async (req, res) => {
    try {
      const { name, description, image } = req.body;

      if ((!name, !description)) {
        return res.status(400).json({ msg: "Please fill in all fields" });
      }
      const category = new Category({
        name,
        description,
        image
      });
      const savedCategory = await category.save();

      res.json({ msg: "Category created successfully" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getCategories: async (req, res) => {
    try {
      const category = await Category.find();
      res.json(category);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getCategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params._id);
      res.json(category);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const { name, description, image } = req.body;
      await Category.findOneAndUpdate(
        { _id: req.params._id },
        { name, description , image}
      );
      res.json({ msg: "Category successfully updated" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params._id);

      res.json({ msg: "Category successfully deleted" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

export { controllerCategory };
