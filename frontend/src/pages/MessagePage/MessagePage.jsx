import { Container, Box, Flex } from "@chakra-ui/react";
import Messages from "../../components/UserMessages/Messages";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axiosConfig";
import MessageBox from "../../components/UserMessages/MessageBox";

const MessagePage = () => {
  const navigate = useNavigate();
  const [authStatus, setAuthStatus] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/api/auth/", { withCredentials: true })
      .then((result) => {
        if (result.data === "Success") {
          setAuthStatus("Authenticated");
        } else {
          setAuthStatus("Not authenticated");
          navigate("/auth");
        }
      })
      .catch((err) => {
        console.error(err);
        setAuthStatus("Error");
        navigate("/auth");
      });
  }, [navigate]);

  if (authStatus === "Not authenticated" || authStatus === "Error") {
    return (
      <Box
        bgGradient="linear(to-r, black, gray.800)"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="xl" color="white" />
      </Box>
    );
  }

  return (
    <Container borderLeft="1px solid white" maxW="auto" p={0} h="100%">
      <Flex h="100%">
        {/* Messages List */}
        <Box
          flex={1}
          maxW="full"
          border="3px solid gray.200"
          display={{ base: isChatOpen ? "none" : "block", md: "block" }}
        >
          <Messages onSelectMessage={() => setIsChatOpen(true)} />
        </Box>

        {/* Message Box (Chat Window) */}
        <Box
          flex={3}
          maxW="full"
          border="1px solid gray.200"
          display={{ base: isChatOpen ? "block" : "none", md: "block" }}
        >
          <MessageBox onBack={() => setIsChatOpen(false)} />
        </Box>
      </Flex>
    </Container>
  );
};

export default MessagePage;
