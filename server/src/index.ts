import "dotenv/config";
import express, { Express } from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";

const app: Express = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use("/recipewarehub.com/users", userRoute);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening to port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
