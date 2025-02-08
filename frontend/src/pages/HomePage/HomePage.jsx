import { Container, Box, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import FeedStories from "../../components/FeedStories/FeedStories";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";
const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        {/* Feed */}
        <Box flex={2}>
          <FeedStories />
          <FeedPosts />
        </Box>

        {/* Suggested Users */}
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
          // border={"1px solid red"}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
