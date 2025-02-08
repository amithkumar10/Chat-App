import {
  Flex,
  Box,
  Button,
  Text,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

function PostFooter({ username, isProfilePage }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box mb={10}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={4} mb={2} mt={"auto"}>
        <Box cursor={"pointer"} onClick={handleLike} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"small"}>
        {likes} likes
      </Text>

      {!isProfilePage && (
        <>
          <Text fontWeight={600} fontSize={"md"} cursor={"pointer"}>
            {username}_{" "}
            <Text as="span" fontWeight={200}>
              {" "}
              Feeling Good
            </Text>
          </Text>

          <Text fontSize={"md"} color={"gray"} cursor={"pointer"}>
            View all 1,000 comments
          </Text>
        </>
      )}

      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={"md"}
          />
          <InputRightElement>
            <Button
              fontSize={"md"}
              color={"gray.500"}
              cursor={"pointer"}
              fontWeight={600}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}

export default PostFooter;
