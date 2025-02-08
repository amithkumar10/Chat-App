import express from "express";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import passwordRecoveryRoutes from "./routes/passwordRecoveryRoutes.js";

const router = express.Router();

router.use("/users", userRoutes);

router.use("/auth", authRoutes);

router.use("/password-recovery", passwordRecoveryRoutes);

export default router;
