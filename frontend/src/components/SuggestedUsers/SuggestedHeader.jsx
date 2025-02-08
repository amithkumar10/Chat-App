import { Flex, Avatar, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a Programmer" size={"lg"} src="/profilepic.png" />
        <Link
          as={RouterLink}
          to={"/asaprogrammer"}
          style={{ textDecoration: "none" }}
          cursor={"pointer"}
          fontSize={14}
          fontWeight={"bold"}
        >
          asaprogrammer_
        </Link>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"bold"}
        _hover={{ color: "white" }}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Switch
      </Link>
    </Flex>
  );
}

export default SuggestedHeader;
