import prisma from "../db/prisma.js";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

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
      subject: "Your OTP for Password Reset",
      text: `Your OTP is: ${otp}\nThis OTP is valid for 15 minutes only.`,
    });
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw new Error("Failed to send OTP email");
  }
}

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate OTP and expiration time
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
    console.error("Error in forgotPassword:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//RESET PASSWORD

export const resetPassword = async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Clear cached plans
    await prisma.$executeRawUnsafe(`DISCARD PLANS`);

    // Find the user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Retrieve the OTP record
    const forgotPasswordRecord = await prisma.forgotPassword.findFirst({
      where: { userId: user.id },
    });

    if (!forgotPasswordRecord) {
      return res.status(404).json({ error: "OTP record not found" });
    }

    // Validate OTP
    if (forgotPasswordRecord.otp !== parseInt(otp, 10)) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    if (new Date(forgotPasswordRecord.otpExpires).getTime() < Date.now()) {
      return res.status(400).json({ error: "OTP has expired" });
    }

    // Update user password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    // Delete the OTP record using deleteMany
    await prisma.forgotPassword.deleteMany({
      where: { userId: user.id },
    });

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
