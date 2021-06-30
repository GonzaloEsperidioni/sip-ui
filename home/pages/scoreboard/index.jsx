import React from "react";
import {
  Flex,
  Stack,
  Table,
  Heading,
  TableCaption,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Spinner,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

export default function GamesPage() {
  const [data, setData] = useState(null);
  useEffect(async () => {
    const res = await fetch("http://localhost:8080/usuario");
    const userData = await res.json();
    setData(userData);
  }, []);
  if (!data) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }
  return (
    <Stack spacing="8" px="36" paddingTop="8">
      <Heading>Tabla de puntuaciones</Heading>
      <Stack px="4" mt="8">
        <Table variant="striped" colorScheme="primary">
          <TableCaption>Tabla de puntuaciones </TableCaption>
          <Thead>
            <Tr>
              <Th>Jugador</Th>
              <Th>Equipo</Th>
              <Th isNumeric>juegos totales</Th>
              <Th isNumeric>Puntaje</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(({ id, nombre, apellido, puntos, puntajes }) => (
              <Tr key={id}>
                <Td>{`${nombre} ${apellido}`}</Td>
                <Td>User Experience</Td>
                <Td isNumeric>{puntajes.length}</Td>
                <Td isNumeric>{puntos}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Stack>
    </Stack>
  );
}
