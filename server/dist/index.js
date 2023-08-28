import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import { corsOptions } from "./config/corsOptions.js";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
const app = express();
const port = process.env.PORT || 5173;
//middleware
app.use(cors());
app.use(express.json());
app.use("/recipewarehub/users", userRoute);
app.use("/recipewarehub/users", authRoute);
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
//# sourceMappingURL=index.js.map