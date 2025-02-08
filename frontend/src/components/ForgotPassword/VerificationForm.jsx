import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import axios from "../../utils/axiosConfig";
import { useEffect } from "react";

const VerificationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await axios.post("/api/password-recovery/reset-password", formData, {
        withCredentials: true,
      });

      setResponseMessage("Password reset successfully.");
      setIsLoading(false);
      setFormData({ email: "", otp: "", newPassword: "" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (responseMessage === "Password reset successfully.") {
      setTimeout(() => {
        window.location.href = "/auth"; // Redirect after 2 seconds
      }, 3000);
    }
  }, [responseMessage]);

  return (
    <Box
      maxWidth="500px"
      margin="auto"
      mt={40}
      padding={6}
      borderWidth={1}
      borderRadius="lg"
      bgColor="white"
    >
      <Heading mb={6} textAlign="center" textColor="blue.900">
        Reset Password
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          {/* Email Input */}
          <FormControl>
            <Text textColor={"black"}>Email*</Text>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              border="1px solid gray"
              _placeholder={{ color: "gray.500" }}
              _hover={{ borderColor: "gray.400" }}
              required
              textColor={"black"}
            />
          </FormControl>

          {/* OTP Input */}
          <FormControl>
            <Text textColor={"black"}>OTP*</Text>
            <Input
              type="text"
              placeholder="Enter OTP"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              border="1px solid gray"
              _placeholder={{ color: "gray.500" }}
              _hover={{ borderColor: "gray.400" }}
              required
              textColor={"black"}
            />
          </FormControl>

          {/* New Password Input */}
          <FormControl>
            <Text textColor={"black"}>New Password*</Text>
            <Input
              type="password"
              placeholder="Enter new password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              border="1px solid gray"
              _placeholder={{ color: "gray.500" }}
              _hover={{ borderColor: "gray.400" }}
              required
              textColor={"black"}
            />
          </FormControl>

          {/* Submit Button */}
          <Button
            bgColor="blue.800"
            _hover={{ bgColor: "blue.900" }}
            type="submit"
            width="full"
            isLoading={isLoading}
          >
            Reset Password
          </Button>
        </VStack>
      </form>
      {/* Response Message */}
      {responseMessage && (
        <Box mt={4} textAlign="center" color="green.500">
          {responseMessage}
        </Box>
      )}
    </Box>
  );
};

export default VerificationForm;
