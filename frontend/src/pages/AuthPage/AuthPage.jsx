import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={32}>
          {/* L.H.S */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/AuthFinal.png" h={580} maxW="none" alt="Phone img" />
          </Box>
          {/* R.H.S */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
