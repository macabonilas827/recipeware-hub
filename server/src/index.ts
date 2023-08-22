import "dotenv/config";

import express, { Express } from "express";
import userRoute from "./routes/userRoute";

const app: Express = express();
const port = process.env.PORT || 3000;

//middleware
app.use("/recipewarehub.com/users", userRoute);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
