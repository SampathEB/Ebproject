import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import eventRouter from "./routes/event.js"
import categoryRouter from "./routes/category.js"
import getTags from "./routes/tags.js"
import getCountries from "./routes/country.js"

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect("mongodb+srv://damith:damith@cluster01.kaznnef.mongodb.net/firstDB?retryWrites=true&w=majority")
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

//middlewares
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/v1/", eventRouter);
app.use("/api/v1/", categoryRouter);
app.use("/api/v1/", getTags);
app.use("/api/v1/", getCountries);

//error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to Server 8800");
});
