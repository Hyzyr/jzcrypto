import { MenuSVG } from "@/assets/icons/SVGs";
import { HStack, IconButton, Stack } from "@chakra-ui/react";
import React from "react";
import UserInfo from "../components/UserInfo";

const BlogPost = ({ user, children }) => {
  return (
    <Stack
      px="4"
      py="4"
      borderBottom={"1px"}
      borderColor={"gray.200"}
      w={"100%"}
      spacing={4}
    >
      <HStack spacing={2}>
        <UserInfo
          name={user.name}
          username={user.username}
          wrapperProps={{
            maxW: "calc(100% - 55px)",
            flexGrow: 1,
          }}
        />
        <IconButton
          aria-label="More "
          icon={<MenuSVG />}
          variant="solid"
          w="fit-content"
          bg="white"
          ml={"auto"}
        />
      </HStack>
      {children}
    </Stack>
  );
};

export default BlogPost;
