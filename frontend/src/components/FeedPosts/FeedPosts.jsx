import {
  Container,
  VStack,
  Skeleton,
  SkeletonCircle,
  Flex,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="12" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton
                  display={{ base: "none", md: "block" }}
                  h={"30px"}
                  w={"300px"}
                />
                <Skeleton
                  display={{ base: "none", md: "block" }}
                  h={"600px"}
                  w={"500px"}
                />

                <Skeleton
                  display={{ base: "block", md: "none" }}
                  h={"20px"}
                  w={"200px"}
                />
                <Skeleton
                  display={{ base: "block", md: "none" }}
                  h={"300px"}
                  w={"200px"}
                />
              </VStack>
            </Flex>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <FeedPost img="/img1.png" username="buraorkmezz" avatar="/img1.png" />
          <FeedPost img="/img2.png" username="josh" avatar="/img2.png" />
          <FeedPost img="/img3.png" username="janedoe" avatar="/img3.png" />
          <FeedPost img="/img4.png" username="johndoe" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
