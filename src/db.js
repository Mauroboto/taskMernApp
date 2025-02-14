import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(">>> Database is Connected");

    const database = conn.connection.host;
    console.log(database);
  } catch (error) {
    console.log(error.message);
  }
};
