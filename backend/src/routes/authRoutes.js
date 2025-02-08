import express from "express";
import {
  login,
  logout,
  protectedRoute,
  verifyOtp,
} from "../controllers/authController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", login);

router.post("/verify", verifyOtp);

router.post("/logout", logout);

router.get("/", verifyToken, protectedRoute);

export default router;
