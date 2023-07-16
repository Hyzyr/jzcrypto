import { Button, useColorModeValue } from "@chakra-ui/react";

const ButtonPrimary = (props) => {
  return (
    <Button
      px={8}
      py={2}
      bg={useColorModeValue("#1B190C", "gray.900")}
      color={"white"}
      rounded={"none"}
      height={12}
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "lg",
        bg: useColorModeValue("gray.700", "gray.900"),
      }}
      {...props}
    />
  );
};

export default ButtonPrimary;
