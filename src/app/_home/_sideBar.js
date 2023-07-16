import { AddSVG, SearchSVG } from "@/assets/icons/SVGs";
import {
  Divider,
  HStack,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ButtonPrimary from "../components/Buttons";
import UserInfo from "../components/UserInfo";

const SideBar = () => {
  return (
    <Stack position={"sticky"} top={6} spacing={4}>
      <InputGroup size={"lg"}>
        <InputLeftElement pointerEvents="none" color={"gray.500"}>
          <SearchSVG />
        </InputLeftElement>
        <Input type="tel" placeholder="Search " />
      </InputGroup>
      <Divider my={2} borderColor="gray.300" />
      <GetVerified />
      <Divider my={2} borderColor="gray.300" />
      <TrendingList
        title="what’s happening"
        data={[
          {
            subTitle: "Trending in United Kingdom",
            title: "#NFT",
          },
          {
            subTitle: "Trending in japan",
            title: "#Crypto",
          },
          {
            subTitle: "Trending in canada",
            title: "#Bitcoin",
          },
          {
            subTitle: "Trending in USA",
            title: "#Coin",
          },
        ]}
      />
      <Divider my={2} borderColor="gray.300" />
      <UsersList
        title={"Who to follow"}
        data={[
          {
            name: "CryptoFactory 1",
            username: "@CFactory",
          },
          {
            name: "CryptoFactory 2",
            username: "@CFactory",
          },
          {
            name: "CryptoFactory 3",
            username: "@CFactory",
          },
        ]}
      />
    </Stack>
  );
};

const GetVerified = () => {
  return (
    <>
      <Heading as="h4" size={"md"} mb={2} textTransform={"capitalize"}>
        get verified
      </Heading>
      <Heading as="strong" fontSize={"14px"} textTransform={"capitalize"}>
        subscribe to unlock new features
      </Heading>
      <ButtonPrimary alignSelf="flex-start">Get Verified</ButtonPrimary>
    </>
  );
};
const TrendingList = ({ title, data }) => {
  return (
    <>
      <Heading as="h4" size={"md"} mb={2} textTransform={"capitalize"}>
        {title}
      </Heading>
      {data.map((item, index) => (
        <Stack spacing={0} key={index}>
          <Text color="gray.400" fontSize={"xsm"}>
            {item.subTitle}
          </Text>
          <Heading as="strong" size={"md"} textTransform={"capitalize"}>
            {item.title}
          </Heading>
        </Stack>
      ))}
    </>
  );
};
const UsersList = ({ title, data }) => {
  return (
    <>
      <Heading as="h4" size={"md"} mb={2} textTransform={"capitalize"}>
        {title}
      </Heading>
      {data.map((item, index) => (
        <HStack spacing={2} pb={6} key={index}>
          <UserInfo
            name={item.name}
            username={item.username}
            wrapperProps={{
              maxW: "calc(100% - 55px)",
              flexGrow: 1,
            }}
          />
          <IconButton
            aria-label="More "
            icon={<AddSVG />}
            variant="solid"
            w="fit-content"
            color={"white"}
            borderRadius={0}
            bg="black"
            _hover={{
              bg: "gray.700",
            }}
          />
        </HStack>
      ))}
    </>
  );
};
export default SideBar;
