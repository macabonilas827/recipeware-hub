"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
//middleware
app.use("/recipewarehub.com/users", userRoute_1.default);
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
