import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const UserInfo = ({ name, username, wrapperProps }) => {
  return (
    <HStack spacing="2" display="flex" alignItems="center" {...wrapperProps}>
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${name}`}
      />
      <Stack spacing={1} maxW={"calc(100% - 55px)"}>
        <Text fontWeight="medium" fontSize="14" isTruncated>
          {name}
        </Text>
        <Text fontSize="14" isTruncated>
          {username}
        </Text>
      </Stack>
    </HStack>
  );
};

export default UserInfo;
