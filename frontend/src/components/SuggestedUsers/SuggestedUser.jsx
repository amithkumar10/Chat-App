import { Flex, Button, Avatar, VStack, Box } from "@chakra-ui/react";
import { useState } from "react";

const SuggestedUser = ({ followers, name, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex gap={3} alignItems={"center"}>
        <Avatar src={avatar} name={name} boxSize={"3.2rem"} />
        <VStack spacing={1}>
          <Box fontSize={14} cursor={"pointer"} fontWeight={"bold"}>
            {name}
          </Box>

          <Box fontSize={12} color={"gray.400"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={14}
        bg={"transparent"}
        h={"max-content"}
        p={0}
        fontWeight={"bold"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
