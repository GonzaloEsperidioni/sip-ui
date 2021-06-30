import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  Stack,
  Button,
  CircularProgress,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAppContext } from "/context/state";

export default function PreguntaDiaria() {
  const toast = useToast();
  const router = useRouter();
  const { user } = useAppContext();
  console.log(user);
  const [respondio, setRespondio] = useState(false);
  const responderPregunta = async (id) => {
    setRespondio(true);
    const response = await fetch(`http://localhost:8080/usuario/sumarpuntos`, {
      method: "POST",
      body: JSON.stringify({
        id: user.id,
        idjuego: 2,
        puntos: 50,
      }),
      headers: new Headers({ "content-type": "application/json" }),
    });
    if (response.status === 200) {
      toast({
        title: "Respuesta enviada correctamente.",
        description:
          "Gracias por colaborar a mejorar la cultura de la empresa.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      router.push("/");
    } else {
      setRespondio(false);
      toast({
        title: "Error al enviar la peticion, intenta nuevamente.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };
  if (respondio) {
    return (
      <Flex align="center" justifyContent="center" paddingTop="48px">
        <CircularProgress isIndeterminate size="120px" />
      </Flex>
    );
  }

  const pregunta = {
    pregunta: "Estas conforme con los beneficios que brinda la empresa?",
    respuestas: ["Muy Conforme", "Conforme", "Podrian mejorar", "No"],
  };
  return (
    <Flex align="center" justifyContent="center" paddingTop="48px">
      <Stack>
        <Heading size="xl" mb="24px">
          {pregunta.pregunta}
        </Heading>
        <Stack>
          {pregunta.respuestas.map((r, i) => (
            <Button key={i} onClick={responderPregunta}>
              {r}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
}
