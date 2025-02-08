import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import axios from "../../utils/axiosConfig";

// ForgotPasswordForm Component
const ForgotPasswordForm = ({ onSuccess }) => {
  const [email, setEmail] = useState(""); // Email state
  const [responseMessage, setResponseMessage] = useState(""); // API response message
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setEmail(e.target.value); // Update email state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true); // Start loading indicator
      await axios.post(
        "/api/password-recovery/forgot-password",
        { email },
        { withCredentials: true }
      );

      // Success: Call the onSuccess prop to show VerificationForm
      onSuccess();
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false); // Stop loading indicator
    }
  };

  return (
    <Box
      maxWidth="500px"
      margin="auto"
      mt={40}
      padding={6}
      borderWidth={1}
      borderRadius="lg"
      bgColor="white"
      boxShadow="lg"
    >
      <Heading mb={6} textAlign="center" color="blue.900">
        Forgot Password
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <Text textColor={"black"}>Email*</Text>
            <Input
              type="email"
              placeholder="Enter your email"
              _placeholder={{ color: "gray.100", fontSize: "sm" }}
              value={email}
              onChange={handleChange}
              border="1px solid gray"
              _hover={{ borderColor: "gray.400" }}
              textColor={"black"}
            />
          </FormControl>

          <Button
            bgColor="blue.800"
            _hover={{ bgColor: "blue.900" }}
            type="submit"
            width="full"
            isLoading={isLoading}
            loadingText="Sending..."
          >
            Reset Password
          </Button>
        </VStack>
      </form>
      {responseMessage && (
        <Text
          mt={4}
          textAlign="center"
          color={responseMessage.includes("sent") ? "green.600" : "red.600"}
        >
          {responseMessage}
        </Text>
      )}
    </Box>
  );
};

export default ForgotPasswordForm;
