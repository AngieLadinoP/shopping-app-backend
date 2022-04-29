import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// Environmental variables
import dotenv from 'dotenv'
// Import Router
import product from "./routes/product.js"
import category from "./routes/category.js"

// Import constants from .env file
dotenv.config()
const {CONNECTION_URL}=process.env

// Initialize app
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended:true})); 
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true}));

// Initialize cross origin request
app.use(cors());
const PORT= process.env.PORT || 5000;

  // API routes 
  app.use('/api/',product)
  app.use('/api/',category)

// Connection to mongoDB
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));


