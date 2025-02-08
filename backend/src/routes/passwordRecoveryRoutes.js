import {
  forgotPassword,
  resetPassword,
} from "../controllers/passwordRecoveryController.js";
import express from "express";

const router = express.Router();

router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
