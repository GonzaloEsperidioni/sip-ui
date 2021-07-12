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
              imagen: "https://images.unsplash.com/photo-1589992896844-9b720813d1cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8eW91bmclMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
              id: 2,
              puesto: "Business Intelligence",
              nombre: "Rolando Biondi",
              cumple: "09/12/2021",
              imagen: "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

            },
            {
              id: 3,
              puesto: "Business Intelligence",
              nombre: "Rafael Espinosa",
              cumple: "12/08/2021",
              imagen: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW91bmclMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
          ].map((item) => {
            return <UserCard key={item.id} {...item}></UserCard>;
          })}
        </Grid>
      </Stack>
    </Flex>
  );
}
