import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import BlogContent from "./_blogContent";
import SideBar from "./_sideBar";

const Home = () => {
  return (
    <Flex
      w="full"
      flexDirection={{
        base: "column-reverse",
        lg: "row",
      }}
    >
      <Box
        flex={1}
        py={7}
        borderRight={{
          lg: "1px",
        }}
        borderColor={{
          lg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        <BlogContent />
      </Box>
      <Box
        w={[null, null, null, "40%"]}
        maxW={[null, null, null, "260px"]}
        px={4}
        py={7}
      >
        <SideBar></SideBar>
      </Box>
    </Flex>
  );
};

export default Home;
