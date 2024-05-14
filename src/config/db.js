import mongoose from "mongoose";

function connectDB() {
  return mongoose.connect(process.env.DB_URI);
}
export default connectDB;
