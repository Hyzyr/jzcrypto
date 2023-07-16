"use client";
import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import BlogContent from "./_home/_blogContent";
import Home from "./_home/Home";

export default function Page() {
  return (
    <main>
      <Navbar>
        <Home />
      </Navbar>
    </main>
  );
}
