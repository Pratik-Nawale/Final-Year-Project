import express from "express";
import { authMiddleWare } from "../middlewares/authMiddleware.js";
import {
  getAllUsersController,
  deleteUserAccountControlller,
} from "../controllers/adminController.js";
const adminRouter = express.Router();

adminRouter.get("/getAllUsers", authMiddleWare, getAllUsersController);

adminRouter.post(
  "/delete-user-account",
  authMiddleWare,
  deleteUserAccountControlller
);

export default adminRouter;
