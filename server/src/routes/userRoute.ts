import express, { Request, Response } from "express";

import { registerUser } from "../controller/userController";
const router = express.Router();

router.post("/register", registerUser);

export default router;
