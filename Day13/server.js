require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./src/config/database/db");
const userRoute = require("./src/routes/user.routes");

const app = express();

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/user", userRoute);


let PORT = process.env.PORT || 4000;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});