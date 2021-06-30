import React, { useState } from "react";
import { Flex, Heading, Grid, Stack, Center } from "@chakra-ui/react";
import UserCard from "../../components/userCard";

export default function PreguntaDiaria() {
  return (
    <Flex align="center" justifyContent="center" paddingTop="24px">
      <Stack w="100%" divi>
        <Heading mb="24px" size="xl">
          Cumpleaños el dia de hoy
        </Heading>
        <Center mb="24px" size="lg">
          Ups! Ningun cumpleaños el dia de hoy
        </Center>
        <Heading size="xl">Proximos Cumpleaños</Heading>
        <Grid
          justifyContent="center"
          align="center"
          alignItems="center"
          templateColumns="1fr 1fr 1fr"
          gridGap="24px"
        >
          {[
            {
              id: 1,
              puesto: "Software Engineer",
              nombre: "Gonzalo Esperidioni",
              cumple: "05/12/2021",
            },
            {
              id: 2,
              puesto: "Business Intelligence",
              nombre: "Rolando Biondi",
              cumple: "09/12/2021",
            },
            {
              id: 3,
              puesto: "Business Intelligence",
              nombre: "Rolando Biondi",
              cumple: "12/08/2021",
            },
          ].map((item) => {
            return <UserCard key={item.id} {...item}></UserCard>;
          })}
        </Grid>
      </Stack>
    </Flex>
  );
}
