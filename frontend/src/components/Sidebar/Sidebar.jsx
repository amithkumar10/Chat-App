import {
  Avatar,
  Box,
  Flex,
  Button,
  Link,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import axios from "../../utils/axiosConfig";
import { useNavigate } from "react-router-dom";
import { Image } from "@chakra-ui/react";

import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  MessagesLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const sidebarItems = [
    {
      icon: <AiFillHome size={32} />,
      text: "Home",
      link: "/",
    },

    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <MessagesLogo />,
      text: "Messages",
      link: "/messages",
    },

    {
      icon: <Avatar size={"md"} name="Burak Orkmez" src="/profilepic.png" />,
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];

  const handleLogout = () => {
    axios
      .post("/api/auth/logout", {
        withCredentials: true,
      })
      .then(() => {
        navigate("/auth");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"WhiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/messages"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
          ml={4}
          _hover={{ textDecoration: "none" }}
        >
          <Box>
            <Image
              src="/PerfectLogoo.png"
              h={20}
              cursor={"pointer"}
              alt="Instagram"
              ml={4}
              mt={3}
            />
            <Text fontSize={"2xl"} fontWeight={"semibold"}>
              ChatBytes
            </Text>
          </Box>
        </Link>

        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{ bg: "WhiteAlpha.200" }}
          w={10}
          cursor={"pointer"}
        >
          <Image
            src="/PerfectLogoo.png"
            h={8}
            cursor={"pointer"}
            alt="Instagram"
          />
        </Link>

        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              hasArrow
              label={item.text}
              placement="right"
              key={index}
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "gray.900" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }} fontSize="lg">
                  {item.text}
                </Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>

        {/* LOGOUT */}
        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "gray.900" }}
            borderRadius={6}
            mt={"auto"}
            p={2}
            w={{ base: 10, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <CiLogout size={25} onClick={handleLogout} />
            <Button
              display={{ base: "none", md: "block" }}
              fontSize="lg"
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
