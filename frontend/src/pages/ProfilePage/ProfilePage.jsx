import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import ProfileHeader from "../../components/Profile/ProfileHeader";

function ProfilePage() {
  return (
    <Container maxW="container.lg" py={5}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        mx={"auto"}
        flexDirection={"column"}
      >
        <ProfileHeader />
      </Flex>

      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid white"}
        direction={"column"}
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
}

export default ProfilePage;
