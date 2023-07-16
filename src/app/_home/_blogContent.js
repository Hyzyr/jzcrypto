import {
  Box,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import ButtonPrimary from "../components/Buttons";
import BlogPost from "./_blogPost";

const BlogContent = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ["for you", "following"];
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      {/* title */}
      <Stack spacing={6} px={4} borderBottom={"1px"} borderColor={"gray.200"}>
        <Heading as="h4" size={"md"}>
          Home
        </Heading>
        <Tabs index={tabIndex} onChange={handleTabsChange} variant="unstyled">
          <TabList justifyContent="space-around" px={6}>
            {tabs.map((title, index) => (
              <CustomTab key={index} isSelected={tabIndex === index}>
                {title}
              </CustomTab>
            ))}
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="red.600"
            borderRadius="1px"
          />
        </Tabs>
      </Stack>
      {/* post form  */}
      <HStack p="4" spacing={2} borderBottom={"1px"} borderColor={"gray.200"}>
        <Image
          borderRadius="full"
          boxSize="40px"
          src="https://100k-faces.glitch.me/random-image"
          alt={`Avatar of user`}
        />
        <Input
          placeholder="What is Happening ?!"
          size="md"
          variant="unstyled"
        />
        <ButtonPrimary>Post</ButtonPrimary>
      </HStack>
      <BlogSeperatorButton />
      <BlogPost
        user={{
          name: "sam sam",
          username: "@samsam",
        }}
      >
        <Text color={"gray.500"}>
          What is Cryptocurrency?
          <br />
          Cryptocurrency is a decentralized digital currency that employs
          cryptography for secure financial transactions and controls the
          creation of additional units. It operates on a technology called
          blockchain, a transparent and immutable ledger that records all
          transactions.
        </Text>
        <Text color={"gray.500"}>
          The Rise of Bitcoin <br />
          Bitcoin, created in 2009, is the first and most well-known
          cryptocurrency. It gained significant attention for its potential to
          disrupt traditional financial systems. Bitcoin&apos;s limited supply
          and decentralized nature sparked a wave of innovation, leading to the
          development of numerous other cryptocurrencies known as altcoins.
        </Text>

        {/* post image */}
        <Image src="images/post-image.png" w={"full"} alt="post-image" />

        <Text color={"gray.500"}>
          What is Cryptocurrency?
          <br />
          Cryptocurrency is a decentralized digital currency that employs
          cryptography for secure financial transactions and controls the
          creation of additional units. It operates on a technology called
          blockchain, a transparent and immutable ledger that records all
          transactions.
        </Text>
        <Text color={"gray.500"}>
          The Rise of Bitcoin <br />
          Bitcoin, created in 2009, is the first and most well-known
          cryptocurrency. It gained significant attention for its potential to
          disrupt traditional financial systems. Bitcoin&apos;s limited supply
          and decentralized nature sparked a wave of innovation, leading to the
          development of numerous other cryptocurrencies known as altcoins.
        </Text>
      </BlogPost>
    </>
  );
};
const CustomTab = ({ isSelected, ...props }) => {
  return (
    <Tab
      textTransform={"capitalize"}
      fontWeight={"bold"}
      color={isSelected ? "red.600" : "gray.500"}
      {...props}
    />
  );
};
const BlogSeperatorButton = () => {
  return (
    <Box
      px="4"
      py="3"
      borderBottom={"1px"}
      borderColor={"gray.200"}
      textAlign={"center"}
      fontWeight={500}
      color={"red.600"}
      w={"100%"}
      as="button"
      transition={"0.2s"}
      _hover={{
        color: "red",
      }}
    >
      Show More
    </Box>
  );
};

export default BlogContent;
