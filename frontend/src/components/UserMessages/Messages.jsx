import { Box, Flex, Avatar, Text } from "@chakra-ui/react";

function Messages({ onSelectMessage }) {
  return (
    <Box>
      {/* Example of a message item */}

      <Flex
        alignItems="center"
        gap={4}
        _hover={{ bg: "gray.700" }}
        py={2}
        px={4}
        cursor="pointer"
        onClick={onSelectMessage} // Open MessageBox when clicked
      >
        <Avatar size="lg" src={"/"} />
        <Box>
          <Text fontSize={14} fontWeight="bold">
            Varad Pednekar
          </Text>
          <Text fontSize={12} fontWeight="light" textColor="gray.400">
            I have something crazy to tell!!
          </Text>
        </Box>
      </Flex>

      {/* Delete */}
      <Flex
        alignItems="center"
        gap={4}
        _hover={{ bg: "gray.700" }}
        py={2}
        px={4}
        cursor="pointer"
        onClick={onSelectMessage} // Open MessageBox when clicked
      >
        <Avatar size="lg" src={"/"} />
        <Box>
          <Text fontSize={14} fontWeight="bold">
            Varad Pednekar
          </Text>
          <Text fontSize={12} fontWeight="light" textColor="gray.400">
            I have something crazy to tell!!
          </Text>
        </Box>
      </Flex>

      {/* Delete */}
      <Flex
        alignItems="center"
        gap={4}
        _hover={{ bg: "gray.700" }}
        py={2}
        px={4}
        cursor="pointer"
        onClick={onSelectMessage} // Open MessageBox when clicked
      >
        <Avatar size="lg" src={"/"} />
        <Box>
          <Text fontSize={14} fontWeight="bold">
            Varad Pednekar
          </Text>
          <Text fontSize={12} fontWeight="light" textColor="gray.400">
            I have something crazy to tell!!
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Messages;
