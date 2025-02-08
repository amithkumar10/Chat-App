import express from "express";
import { signup, getUserProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signup);

router.get("/profile", getUserProfile);

export default router;
