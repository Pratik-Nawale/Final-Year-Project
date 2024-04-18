import express from "express";
import {signupController, loginController, authController} from "../controllers/userController.js";
import { authMiddleWare } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();


userRouter.post("/signup", signupController);

userRouter.post("/login", loginController);

//?  Authorization || Post
userRouter.post("/getUserData", authMiddleWare, authController);

// router.post("/auth", authMiddleWare)

export default userRouter;
