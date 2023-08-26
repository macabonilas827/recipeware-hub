import express from "express";
import { loginUser } from "../controller/authController.js";
const router = express.Router();
//applying jsonwebtoken middleware before executing the actual router
// router.use(authJWT);
router.post("/login", loginUser);
export default router;
//# sourceMappingURL=authRoute.js.map