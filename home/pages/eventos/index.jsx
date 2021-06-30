import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Grid,
  Stack,
  Button,
  CircularProgress,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAppContext } from "/context/state";
import NewsCard from "../../components/newsCard";

const eventos = [
  {
    id: 1,
    title: "Sprint Review 3",
    description: "Se mostrarán avances del desarrollo del MVP",
    fecha: "Hoy",
    author: "Biondi, rolando",
  },
  {
    id: 2,
    title: "Fin Sprint 4",
    description: "Entrega Final",
    fecha: "30 de Junio a las 18.30",
    author: "Biondi, rolando",
  },
  {
    id: 3,
    title: "Presentación Final",
    description: "Arrancan las presentaciones de los MVP",
    fecha: "07 de Julio a las 18:30",
    author: "Biondi, rolando",
  },
  {
    id: 4,
    title: "Inscripcion UADE",
    description: "No te olvides de anotarte en las materias.",
    fecha: "01 de Julio de 2021 a las 12:00",
    author: "Biondi, rolando",
  },
];

export default function PreguntaDiaria() {
  return (
    <>
      <Heading size="xl">Eventos</Heading>
      <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" autoRows alignItems="stretch">
        {eventos && eventos.map((e) => <NewsCard {...e}></NewsCard>)}
      </Grid>
    </>
  );
}
