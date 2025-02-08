import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../db/prisma.js";
import nodemailer from "nodemailer";
import crypto from "crypto";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendOtpEmail(email, otp) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Your verification OTP is: ",
      text: `Your OTP is: ${otp}\nThis OTP is valid for 15 minutes only.`,
    });
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw new Error("Failed to send OTP email");
  }
}

export const protectedRoute = async (req, res) => {
  res.status(200).json("Success");
};

// User login
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const otp = crypto.randomInt(100000, 999999);
    const otpExpires = new Date(Date.now() + 15 * 60 * 1000);

    // Upsert OTP in the database
    await prisma.forgotPassword.upsert({
      where: { userId: user.id },
      create: { userId: user.id, otp, otpExpires },
      update: { otp, otpExpires },
    });

    // Send OTP via email
    await sendOtpEmail(email, otp);

    res.status(200).json({ message: "OTP sent to your email", email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

//Verify OTP
export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const otpRecord = await prisma.forgotPassword.findFirst({
      where: { userId: user.id },
    });

    if (!otpRecord) {
      return res.status(404).json({ message: "OTP not found" });
    }

    if (otpRecord.otp !== parseInt(otp, 10)) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (new Date(otpRecord.otpExpires) < new Date()) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    // OTP is valid, delete it
    await prisma.forgotPassword.deleteMany({ where: { userId: user.id } });

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    // Set token in an HTTP-only cookie
    res.cookie("IAMIN", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "OTP verified, login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// User logout
export const logout = (req, res) => {
  res.cookie("IAMIN", "", {
    expires: new Date(0),
    httpOnly: true,
    secure: false,
  });
  res.json("Logged out");
};
