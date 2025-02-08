import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axiosConfig";

const Signup = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("/api/users/signup", formdata, {
        withCredentials: true,
      });

      setIsLoading(false);
      setResponseMessage("Sign up successful. Kindly login");

      console.log(response.data);
      setFormdata({ email: "", username: "", password: "" });

      navigate("/auth");
    } catch (error) {
      console.error(error);

      if (error.response) {
        const statusCode = error.response.status;

        if (statusCode === 409) {
          setResponseMessage("Username already taken");
        } else if (statusCode === 400) {
          setResponseMessage("All fields are required");
        } else {
          setResponseMessage("Something went wrong");
        }
      } else {
        // Error not related to server response
        setResponseMessage("Network error or server unavailable");
      }

      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{ minWidth: "250px", margin: "0 auto" }}
      >
        {/* Username Input */}
        <Input
          placeholder="Username"
          fontSize={14}
          type="text"
          name="username"
          value={formdata.username}
          onChange={handleChange}
          mb={3}
        />

        {/* Email Input */}
        <Input
          placeholder="Email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
          fontSize={14}
          type="email"
          mb={3}
        />

        {/* Password Input */}
        <Input
          placeholder="Password"
          fontSize={14}
          type="password"
          name="password"
          value={formdata.password}
          onChange={handleChange}
          mb={3}
        />
        {responseMessage && (
          <Alert
            mb={3}
            status={
              responseMessage === "Sign up successful. Kindly login"
                ? "success"
                : "error"
            }
          >
            <AlertIcon />
            {responseMessage}
          </Alert>
        )}

        {/* Signup Button */}
        <Button
          type="submit"
          w={"full"}
          colorScheme="blue"
          size={"sm"}
          fontSize={14}
          mt={4}
          isLoading={isLoading}
        >
          Sign up
        </Button>
      </form>
    </>
  );
};

export default Signup;
