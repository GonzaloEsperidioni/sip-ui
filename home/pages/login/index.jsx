import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";

import { useAppContext } from "/context/state";
import { useState } from "react";
import { useRouter } from "next/router";
export default function LoginForm() {
  const { setUser } = useAppContext();
  const [email, setEmail] = useState();
  const router = useRouter();
  const login = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:8080/usuario/mail?mail=${email}`);
    const user = await res.json();
    setUser(user);
    router.push("/games");
  };
  return (
    <Flex align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="test@test.com"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>
            <Button
              colorScheme="primary"
              width="full"
              mt={4}
              onClick={login}
              type="submit"
            >
              Ingresar
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
