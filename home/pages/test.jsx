import { Heading, VStack, StackDivider } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

import {
  SimpleGrid,
  Box,
  HStack,
  Text,
  Center,
  useColorModeValue,
  Image,
  Stack,
} from "@chakra-ui/react";

export default function Test() {
  return (
    <div>
      <Head>
        <title>Test | Sip Grupo 8</title>
        <meta name="description" content="MVP app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack spacing="4">
        <Heading as="h3">
          Volver{" "}
          <Link href="/">
            <a>al inicio</a>
          </Link>
        </Heading>
      </VStack>
      <SimpleGrid columns={[2, null, 4]} spacing="40px">
        <Box>
          <ProductSimple />
        </Box>
        <Box>
          <ProductSimple />
        </Box>
        <Box>
          <ProductSimple />
        </Box>
        <Box>
          <ProductSimple />
        </Box>
        <Box>
          <ProductSimple />
        </Box>
      </SimpleGrid>
      <StackEx></StackEx>
    </div>
  );
}

function Feature({ title, desc, ...rest }) {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      {...rest}
    >
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

export function StackEx() {
  return (
    <HStack spacing={8}>
      <Feature
        title="Lorem Ipsum"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Feature
        title="Lorem Ipsum"
        desc="Sed pellentesque tincidunt ipsum, a vulputate lectus pellentesque non."
      />
    </HStack>
  );
}

const IMAGE =
  "https://images.unsplash.com/photo-1585338107529-13afc5f02586?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80";

export function ProductSimple() {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("green.100", "green.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        {/*  */}
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Lorem
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {/* */}
            Crucigrama
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {/* */}
              <Link href="/">
                <a>Jugar</a>
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
