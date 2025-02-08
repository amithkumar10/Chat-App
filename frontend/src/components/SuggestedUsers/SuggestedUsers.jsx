import { VStack, Flex, Text, Box, Link } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";

function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={14} fontWeight={"bold"} color={"gray.400"}>
          Suggested for you
        </Text>

        <Text
          fontSize={13}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See all
        </Text>
      </Flex>

      <SuggestedUser
        name="Ryan Florence"
        followers={567}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Dan Abrahmov"
        followers={1392}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Christin Nwamba"
        followers={759}
        avatar="https://bit.ly/code-beast"
      />

      <Box fontSize={12} color={"gray.500"} mt={5}>
        © 2024 Built By {""}
        <Link
          href="https://www.linkedin.com/in/amithkumar-p-radhakrishnan-7179b8283/"
          target="blank"
          color={"blue.500"}
          fontSize={12}
          style={{ textDecoration: "none" }}
        >
          Amith Kumar
        </Link>
      </Box>
    </VStack>
  );
}

export default SuggestedUsers;
