import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import router from "./route.js"; // Import routes from route.js
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());

const prisma = new PrismaClient(); // Initialize Prisma Client
app.use(
  cors({
    origin: ["http://localhost:5173", "https://chat-app-kappa-ecru.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

app.use(cookieParser());

app.use(bodyParser.json());

// Test the database connection
async function checkDbConnection() {
  try {
    await prisma.$connect(); // Attempt to connect to the database
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1); // Exit the process if connection fails
  }
}

// Call the function to check DB connection
checkDbConnection();

// Use the routes from route.js under `/api` prefix
app.use("/api", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
