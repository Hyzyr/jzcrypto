"use client";
import React from "react";

import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Container,
  Image,
  Stack,
  HStack,
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import MenuSvg from "@/assets/icons/menu.svg";
import {
  BoorkmarkSVG,
  HomeSVG,
  ListSVG,
  MenuBurgerSVG,
  MenuSVG,
  MessageSVG,
  MoreSVG,
  NotificationsSVG,
  ProfileSVG,
  SearchSVG,
  VerifiedSVG,
} from "@/assets/icons/SVGs";
import ButtonPrimary from "./Buttons";
import UserInfo from "./UserInfo";

const LinkItems = [
  {
    icon: HomeSVG,
    name: "Home",
    link: "/",
  },
  {
    icon: SearchSVG,
    name: "Explore",
    link: "/explore",
  },
  {
    icon: NotificationsSVG,
    name: "Notifications",
    link: "/notifications",
  },
  {
    icon: MessageSVG,
    name: "Messages",
    link: "/messages",
  },
  {
    icon: ListSVG,
    name: "List",
    link: "/list",
  },
  {
    icon: BoorkmarkSVG,
    name: "Bookmarks",
    link: "/bookmarks",
  },
  {
    icon: VerifiedSVG,
    name: "Verified",
    link: "/verified",
  },
  {
    icon: ProfileSVG,
    name: "Profile",
    link: "/profile",
  },

  {
    icon: MoreSVG,
    name: "More",
    link: "/more",
  },
];

export default function Navbar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container
      minH="100vh"
      maxW="1130px"
      p={{
        base: 0,
        lg: 4,
      }}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", lg: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", lg: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, lg: 60 }} minH={"100vh"} display={"flex"}>
        {children}
      </Box>
    </Container>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", lg: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Stack h="full" spacing="1">
        <Flex
          h="20"
          alignItems="center"
          mx="8"
          justifyContent="space-between"
          order={{
            base: -1,
            lg: 0,
          }}
        >
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Logo
          </Text>
          <CloseButton
            display={{ base: "flex", lg: "none" }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link, index) => (
          <NavItem
            key={`${link.name}-${index}`}
            icon={link.icon}
            link={link.link}
          >
            {link.name}
          </NavItem>
        ))}
        <ButtonPrimary py={3} mx="4" my={3} maxW="300px">
          Posts
        </ButtonPrimary>
        <HStack
          spacing={2}
          mx="4"
          pb={6}
          mt={{
            lg: "auto",
          }}
          order={{
            base: -1,
            lg: 0,
          }}
        >
          <UserInfo
            name="Sam Smith asda sd sad xzc as"
            username="@sams"
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
          />
        </HStack>
      </Stack>
    </Stack>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, lg: 60 }}
      px={{ base: 4, lg: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        ml="auto"
        icon={<MenuBurgerSVG />}
      />
    </Flex>
  );
};
