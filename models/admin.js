import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: String,
  lastName: {
    type: String,
    required: true,
  },
  secondSurname: String,
});
