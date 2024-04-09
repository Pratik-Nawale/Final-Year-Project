import express from "express";
import {signupController, loginController, authController} from "../controllers/userController.js";
import { authMiddleWare } from "../middlewares/authMiddleware.js";

const router = express.Router();


router.post("/signup", signupController);

router.post("/login", loginController);

//?  Authorization || Post
router.post("/getUserData", authMiddleWare, authController);

// router.post("/auth", authMiddleWare)

export default router;
