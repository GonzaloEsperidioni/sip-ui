import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Badge,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "/components/logo";
import { useAppContext } from "/context/state";
import { useRouter } from "next/router";
import ColorModeSwitcher from "/components/colorModeSwitcher";


const Links = [
  { title: "Inicio", path: "" },
  { title: "Juegos", path: "games" },
  { title: "Estadisticas", path: "scoreboard" },
  { title: "Cumpleaños", path: "birthday" },
  { title: "Beneficios", path: "beneficios" },
  { title: "Canje", path: "prizes" },
];

const NavLink = ({ path, children }) => (
  <NextLink href={`/${path.toLowerCase()}`}>
    <Link
      px={2}
      py={1}
      color="white"
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("rgba(255,0,0,0.2)", "rgba(255,0,0,0.2)"),
      }}
    >
      {children}
    </Link>
  </NextLink>
);

export default function Simple() {
  const { user, logout } = useAppContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const noRespondio = true;
  //const colorButton = useColorModeValue("red","blue");
  return (
    <>
      <Box px={1}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Logo />
            </Box>
            <HStack as={"nav"} spacing={4}>
              {Links.map((link) => {
                return (
                  <NavLink key={link.path} path={link.path}>
                    {link.title}
                  </NavLink>
                );
              })}
              {user.nombre && noRespondio && (
                <NavLink path="preguntadiaria">
                  <Button colorScheme="red">
                    Pregunta diaria!
                    <Badge ml="1" fontSize="0.8em" colorScheme="green">
                      BETA
                    </Badge>
                  </Button>
                </NavLink>
              )}
              {user.rol === "ADMIN" && (
                <NavLink path="backoffice">
                  <Button colorScheme="red">
                    Backoffice
                    <Badge ml="1" fontSize="0.8em" colorScheme="green">
                      Nuevo!
                    </Badge>
                  </Button>
                </NavLink>
              )}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {user && user.nombre && (
              <Menu>
                {user.puntos} Puntos
                <MenuButton
                  marginLeft="16px"
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  onClick={() => router.push("/profile")}
                >
                  <Avatar
                    size={"sm"}
                    name={`${user.nombre} ${user.apellido}`}
                  />
                </MenuButton>
              </Menu>
            )}
            {
              <NavLink path="login">
                {!user.nombre && <Button>Login</Button>}
              </NavLink>
            }
            {user && user.nombre && <Button onClick={logout}>Logout</Button>}
            <ColorModeSwitcher/>

          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
