import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
const app = express();
const port = process.env.PORT || 3000;
//middleware
app.use(express.json());
app.use("/recipewarehub.com/users", userRoute);
mongoose
    .connect("mongodb://127.0.0.1:27017/recipewarehub")
    .then(() => {
    app.listen(port, () => {
        console.log(`Listening to port ${port}`);
    });
})
    .catch((err) => {
    console.log(err.message);
});
//# sourceMappingURL=app.js.map