import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import router from "./route.js"; // Import routes from route.js
import cookieParser from "cookie-parser";
import axios from "axios";

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
    await prisma.$connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1); // Exit the process if connection fails
  }
}
checkDbConnection();

const keepAlive = () => {
  const appUrl = "process.env.BASE_URL"; // Replace with your actual URL

  axios
    .get(appUrl)
    .then((response) => {
      console.log(`Pinged ${appUrl} successfully.`);
    })
    .catch((error) => {
      console.log(`Error pinging the server: ${error.message}`);
    });
};

// Start the keep-alive function on server start
const startKeepAlive = () => {
  keepAlive(); // Send an initial ping

  // Set the function to run every 14 minutes (840 seconds)
  setInterval(keepAlive, 840 * 1000); // 840 seconds = 14 minutes
};

// Call the startKeepAlive function once the server is running
startKeepAlive();

// Use the routes from route.js under `/api` prefix
app.use("/api", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
