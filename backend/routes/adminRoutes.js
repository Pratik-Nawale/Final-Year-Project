import express from "express";
import { authMiddleWare } from "../middlewares/authMiddleware.js";
import { getAllUsersController } from "../controllers/adminController.js";
const adminRouter = express.Router();

adminRouter.get("/getAllUsers", authMiddleWare, getAllUsersController);

export default adminRouter;
