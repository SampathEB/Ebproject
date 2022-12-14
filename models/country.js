import mongoose from "mongoose";

const countrySchema = new mongoose.Schema(
  {
    countryName:{
        type:String,
        required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("countries", countrySchema);
