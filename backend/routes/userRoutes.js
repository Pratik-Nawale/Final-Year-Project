import express from "express";
import {signupController, loginController} from "../controllers/userController.js";
import { authMiddleWare } from "../middlewares/authMiddleware.js";

const router = express.Router();


router.post("/signup", signupController);

router.post("/login", loginController);

router.get("/auth", authMiddleWare)

export default router;
