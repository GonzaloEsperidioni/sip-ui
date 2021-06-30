import { color, Heading } from "@chakra-ui/react";
import Link from "next/link";

import {
  SimpleGrid,
  Box,
  HStack,
  Text,
  Center,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";

const IMAGE =
  "https://images.unsplash.com/photo-1585338107529-13afc5f02586?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80";

export default function ProductCard({
  picture,
  playedTimes,
  title,
  playUrl,
  disabled,
}) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bgColor="gray.500"
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
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
            backgroundImage: `url(${picture})`,
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
            src={picture}
          />
        </Box>
        <Stack align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {playedTimes}
          </Text>
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
            color={"black"}
          >
            <strong>{title}</strong>
          </Heading>
          <Stack direction={"row"} align={"center"}>
            {disabled ? (
              <Button disabled>Proximamente</Button>
            ) : (
              <Text fontWeight={800} fontSize={"xl"}>
                <Link href={playUrl}>
                  <a>Jugar</a>
                </Link>
              </Text>
            )}
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
