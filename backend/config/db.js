import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoBD connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Server Issue ${error}`);
  }
};

export default connectDB;
