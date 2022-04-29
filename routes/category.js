import express from 'express'
import {controllerCategory} from "../controllers/category.js"

// Router
const router = express.Router();

router.post("/create-category",controllerCategory.createCategory) // Create one category
router.get("/get-categories",controllerCategory.getCategories)  // Get all categories
router.get("/get-category",controllerCategory.getCategory) // Get one category 
router.put("/update-category",controllerCategory.updateCategory) // Update one category
router.delete("/delete-category",controllerCategory.deleteCategory) // Delete one category
export default router;