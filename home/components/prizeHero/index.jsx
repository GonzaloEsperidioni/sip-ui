import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";

export default function PrizeHero() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Canjea tus puntos por premios</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Mira todos los premios que tenemos para vos!
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          ></Stack>
        </Stack>

        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1541051279467-e07e60ac6e5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            }
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
