import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

// app.get("/users", (req, res) => {
//   res.send("Hello request send");
// });

app.listen(8800, () => {
  connect();
  console.log("Collected to backend.");
});
