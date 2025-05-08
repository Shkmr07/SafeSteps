const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file
const dbURL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
