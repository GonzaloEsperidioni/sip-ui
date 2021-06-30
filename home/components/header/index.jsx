import { Box, Flex, Heading } from "@chakra-ui/react";
import Navbar from "/components/navbar";
import Link from "next/link";
export default function Header() {
  return (
    <Box px="4" pt="4" borderBottomColor="gray.700" borderBottomWidth="1px">
      <Flex justifyContent="space-between">

      </Flex>
      <Navbar></Navbar>
    </Box>
  );
}
