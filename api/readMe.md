- npm init -y
- yarn add express
- yarn add dotenv
- go mongoDB website
- new DATABASE
- username and password
- ID "0.0.0.0" and create
- yarn add mongoose
- connected mongoDB by mongoose

```py
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

app.listen(8800, () => {
  connect();
  console.log("Collected to backend.");
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

```

- for password security
- yarn add bcryptjs
