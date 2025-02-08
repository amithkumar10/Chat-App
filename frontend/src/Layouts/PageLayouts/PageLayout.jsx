import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

// HomePage Layout
const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* Sidebar on L.H.S */}
      {pathname !== "/auth" &&
      pathname !== "/" &&
      pathname !== "/auth/forgot-password" &&
      pathname !== "/auth/verify" ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* Content on R.H.S */}

      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100%-240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
