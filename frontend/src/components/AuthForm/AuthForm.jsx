import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} px={10} py={10}>
        <VStack spacing={4}>
          <Image
            src="/PerfectLogoo.png"
            h={16}
            cursor={"pointer"}
            alt="Instagram"
          />
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            ChatBytes
          </Text>

          {isLogin ? <Login /> : <Signup />}

          {/* OR text */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"} align="center" justifyContent="center">
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <GoogleAuth />
        </VStack>
      </Box>

      {/* Switch between Login and Sign in */}
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>

          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in "}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
