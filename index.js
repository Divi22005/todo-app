import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import todoRouter from "./Routes/todoRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const DBUSER = encodeURIComponent(process.env.DBUSER)
const DBPASS = encodeURIComponent(process.env.DBPASS)
const MONGO_URI =`mongodb+srv://${DBUSER}:${DBPASS}@cluster0.e3jawml.mongodb.net/gcet?retryWrites=true&w=majority&appName=Cluster0`

app.use("/", todoRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });