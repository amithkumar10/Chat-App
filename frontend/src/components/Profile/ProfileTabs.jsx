import { Flex, Box, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";
import React from "react";

function ProfileTabs() {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 20, sm: 40 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
    >
      <Flex alignItems={"center"} borderTop={"1px solid white"}>
        <Box fontSize={20}>
          <BsGrid3X3 />
        </Box>

        <Text
          fontSize={12}
          display={{ base: "none", sm: "block" }}
          p="3"
          gap={1}
          cursor={"pointer"}
        >
          Posts
        </Text>
      </Flex>

      <Flex alignItems={"center"}>
        <Box fontSize={20}>
          <BsBookmark />
        </Box>

        <Text
          fontSize={12}
          display={{ base: "none", sm: "block" }}
          p="3"
          gap={1}
          cursor={"pointer"}
        >
          Saved
        </Text>
      </Flex>

      <Flex alignItems={"center"}>
        <Box fontSize={20}>
          <BsSuitHeart fontWeight={"bold"} />
        </Box>

        <Text
          fontSize={12}
          display={{ base: "none", sm: "block" }}
          p="3"
          gap={1}
          cursor={"pointer"}
        >
          Likes
        </Text>
      </Flex>
    </Flex>
  );
}

export default ProfileTabs;
