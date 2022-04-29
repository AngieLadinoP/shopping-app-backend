import mongoose from "mongoose";
import Schema from "mongoose"

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  description: String,
  image: String,
  price: { type: Number, required: true },
  components: Array,
  quantity: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const Product = mongoose.model("Product", productSchema);
export { Product };
