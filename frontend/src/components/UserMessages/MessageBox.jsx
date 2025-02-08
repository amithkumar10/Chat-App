import { Box, Flex, Avatar, Text, Input } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const MessageBox = ({ onBack }) => {
  return (
    <div>
      <Box width={"full"} border={"1px solid gray"} minH={"100px"}>
        <Flex alignItems={"center"} gap={4} p={5}>
          <Box display={{ base: "block", md: "none" }} onClick={onBack}>
            <HiOutlineArrowSmLeft size={30} cursor="pointer" />
          </Box>
          <Avatar avatar={"Amith"} username={"Amith"} size={"lg"} src={"/"} />
          <Text>Varad Pednekar</Text>
        </Flex>
      </Box>

      <Box
        minW={"full"}
        border={"1px solid gray"}
        minH={{ base: "550px", md: "500px" }}
      ></Box>

      <Box width={"full"} border={"1px solid gray"} minH={"full"} p={6}>
        <Flex alignItems={"center"} gap={4}>
          <Input />
          <IoSend size={30} cursor={"pointer"} />
        </Flex>
      </Box>
    </div>
  );
};

export default MessageBox;
