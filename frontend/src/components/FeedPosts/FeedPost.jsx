import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";

const FeedPost = ({ img, username, avatar }) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box overflow={"hidden"} borderRadius={3}>
        <Image src={img} alt="Profile Pic" />
      </Box>
      <PostFooter username={username} />
    </>
  );
};

export default FeedPost;
