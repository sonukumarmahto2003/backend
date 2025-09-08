require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/databse/db");
const userRoute = require("./src/routes/user.routes");
const authRoute=require("./src/routes/auth.routes")


const app = express();

connectDB();

app.use("/user", userRoute);
app.use("/api/auth",authRoute)
// app.use("/products", productRoute);


let PORT = process.env.PORT || 4000;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});