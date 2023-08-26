import express from "express";
import { registerUser } from "../controller/registerController.js";
const router = express.Router();
router.post("/register", registerUser);
export default router;
//# sourceMappingURL=registerRoute.js.map