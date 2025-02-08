import { Flex, Avatar, Link, Text } from "@chakra-ui/react";

function Comment({ createdAt, username, profilePic, text }) {
  return (
    <Flex gap={4}>
      <Link>
        <Avatar src={profilePic} size={"sm"} />
      </Link>

      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Link>
            <Text fontWeight={"bold"} fontSize={14}>
              {username}
            </Text>
          </Link>
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Comment;
