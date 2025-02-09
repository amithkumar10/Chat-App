import { Input, Button, Alert, AlertIcon, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "../../utils/axiosConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("/api/auth/login", formData, {
        withCredentials: true,
      });
      setIsLoading(false);
      setResponseMessage("Login successful.");
      console.log(response.data);
      setFormData({ email: "", password: "" });
      navigate("/auth/verify");
    } catch (error) {
      console.error(error);
      setIsLoading(false);

      if (error.response) {
        const statusCode = error.response.status;
        if (statusCode === 401) {
          setResponseMessage("Invalid credentials. Please try again.");
        } else {
          setResponseMessage("An error occurred. Please try again.");
        }
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <Input
          placeholder="Email"
          fontSize={14}
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          mb={3}
          w={64}
        />

        <Input
          placeholder="Password"
          fontSize={14}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          mb={3}
          w={64}
        />

        <Text
          fontSize={12}
          color={"blue.500"}
          align={"right"}
          cursor={"pointer"}
          _hover={{ color: "blue.300" }}
          mb={1}
          onClick={() => navigate("/auth/forgot-password")}
        >
          Forgot password?
        </Text>

        {responseMessage && (
          <Alert status="error" mb={3}>
            <AlertIcon />
            {responseMessage}
          </Alert>
        )}

        <Button
          w={"full"}
          colorScheme="blue"
          size={"sm"}
          fontSize={14}
          isLoading={isLoading}
          type="submit"
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default Login;
