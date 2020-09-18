import express from "express";
import Cors from "cors";
import mongoose from "mongoose";
import { postsRouter } from "./2 routes/posts.js";
import { DB_CONNECTION } from "./mongoCon.js";

const app = express();

// Middlewares

app.use(express.json());
app.use(Cors());

// Routes for posts

app.use("/posts", postsRouter);




// Connect to db

mongoose.connect(
  DB_CONNECTION,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connection established")
);

// Listen

app.listen(4000, () => console.log("http://192.168.1.137:4000"));
