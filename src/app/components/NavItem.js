"use client";
import { Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ icon, children, link, ...rest }) => {
  const pathname = usePathname();
  const isActive = pathname === link;
  console.log("router", link, pathname, isActive);

  return (
    <Link
      href={link}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      _hover={{ background: "none" }}
    >
      <Flex
        align="center"
        px="4"
        py={3}
        mx="4"
        borderRadius="sm"
        transition={".4s"}
        role="group"
        cursor="pointer"
        _hover={{
          color: "black",
          backgroundColor: "gray.100",
          fontWeight: "inherit",
        }}
        fontWeight={isActive ? "bold" : "normal"}
        color={isActive ? "black" : "gray.900"}
        {...rest}
      >
        {icon && (
          <Flex
            mr="4"
            w={4}
            h={4}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Icon fontSize="14" as={icon} color={isActive ? "red" : "black"} />
          </Flex>
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
