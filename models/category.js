import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const Category= mongoose.model("Category", categorySchema);
export { Category};
