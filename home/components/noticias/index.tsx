import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Noticias = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h2" marginTop="5">
        Ultimas novedades!
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={["SIP", "MVP"]} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Nuevas funcionalidades!
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              Se agregaron nuevas funcionalidades al MVP, no te olvides dar tu
              opinión para ayudar en seguir mejorando el portal.
            </Text>
            <BlogAuthor
              name="Empleado de HR"
              date={new Date("2021-04-06T19:01:27Z")}
            />
          </Box>
        </WrapItem>

        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={["SIP", "MVP"]} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Nuevos productos!
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              Hay nuevos productos disponibles, no te olvides visitar la sección
              de canje
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date("2021-04-06T19:01:27Z")}
            />
          </Box>
        </WrapItem>
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={["MVP", "Trabajo en equipo"]} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Reconozcamos a nuestros compañeros
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              Recordá que podés regalar puntos a las demás personas de la
              compañia como regalo de cumple.
            </Text>
            <BlogAuthor
              name="Mauricio Fernandez"
              date={new Date("2021-04-06T19:01:27Z")}
            />
          </Box>
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default Noticias;
