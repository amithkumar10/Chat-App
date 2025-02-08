import { Grid, VStack, Skeleton, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

function ProfilePosts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>imxwmm</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <ProfilePost username={"buraorkmezz"} img="/img1.png" />
          <ProfilePost username={"josh"} img="/img2.png" />
          <ProfilePost username={"janedoe"} img="/img3.png" />
          <ProfilePost username={"johndoe"} img="/img4.png" />
        </>
      )}
    </Grid>
  );
}

export default ProfilePosts;
