import express from 'express'
import {controllerProduct} from "../controllers/product.js"

// Router
const router = express.Router();

router.post("/create-product",controllerProduct.createProduct) // Create one product
router.get("/get-products",controllerProduct.getProducts)  // Get all products
router.get("/get-product",controllerProduct.getProduct) // Get one product 
router.put("/update-product",controllerProduct.updateProduct) // Update one product
router.delete("/delete-product",controllerProduct.deleteProduct) // Delete one product
export default router;