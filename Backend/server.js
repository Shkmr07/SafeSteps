require("dotenv").config();
const express = require("express");
const connectDB = require("./config");
const router = require("./src/routes/combine.routes");
const cookieParser = require("cookie-parser");

const app = express();
const Port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Welcome to the SafeSteps API!");
});

connectDB()
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server is running on port ${Port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1); // Exit the process with failure
  });
