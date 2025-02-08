import React from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ChatBytesLanding = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/auth");
  };
  return (
    <Box
      minH="100vh"
      bg="white"
      fontFamily="'Plus Jakarta Sans', 'Noto Sans', sans-serif"
      position="relative"
      overflow="hidden"
      bgColor={"black"}
    >
      <Container maxW="960px" h="full" py={5}>
        <Flex justify="center" flex={1}>
          <VStack
            spacing={0}
            width="full"
            border={"4px solid #a7cbe2"}
            borderRadius={"2xl"}
            pb={6}
          >
            {/* Hero Image */}
            <Box
              w="full"
              minH="420px"
              bg="#97C2DD"
              backgroundImage="/PerfectLogoo.png"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="fit"
              overflow="hidden"
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              px={{ base: 0, sm: 4 }}
              py={{ base: 0, sm: 3 }}
            />

            {/* Title */}
            <Heading
              color="#1C160C"
              fontSize="22px"
              fontWeight="bold"
              letterSpacing="-0.015em"
              textAlign="center"
              px={4}
              pb={3}
              pt={5}
              textColor={"white"}
            >
              Welcome to ChatBytes!
            </Heading>

            {/* Description */}
            <Text
              color="#1C160C"
              fontSize="base"
              textAlign="center"
              pb={3}
              pt={1}
              px={4}
              textColor={"white"}
            >
              Connect with friends, family, and colleagues in real time. Share
              your thoughts, photos, and videos in a secure, private
              environment. Stay tuned for our latest feature updates and
              community events.
            </Text>

            {/* CTA Button */}
            <Box px={4} py={3}>
              <Button
                minW="84px"
                maxW="480px"
                h="48px"
                px={10}
                bg="#019863"
                color="white"
                fontSize="base"
                fontWeight="bold"
                letterSpacing="0.015em"
                borderRadius="full"
                _hover={{ bg: "#018756" }}
                gap={2}
                onClick={handleClick}
              >
                Get Started
                <HiOutlineArrowSmRight size={30} cursor="pointer" />
              </Button>
            </Box>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default ChatBytesLanding;
