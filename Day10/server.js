require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/database/db");
const userRoute = require("./src/routes/user.routes");

const app = express();

app.use(express.json());

connectDB();

app.use("/user", userRoute);

let PORT = process.env.PORT || 4000;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});