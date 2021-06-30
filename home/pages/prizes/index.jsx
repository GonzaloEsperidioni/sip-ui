import React, { useEffect, useState } from "react";
import { Flex, Stack, Box } from "@chakra-ui/react";
import PrizeItem from "../../components/prizeItem";
import PrizeHero from "../../components/prizeHero";

const IMAGE =
  "https://images.unsplash.com/photo-1565692936545-c23bd329340a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
const REMERA =
  "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80";
const HAMBURGESA =
  "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80";

export default function PrizesPage() {
  const [data, setData] = useState(null);
  useEffect(async () => {
    const res = await fetch("http://localhost:8080/premio");
    const premios = await res.json();
    setData(premios);
  }, []);
  const claimPrize = () => {};
  return (
    <Box>
      <PrizeHero />
      <Flex align="center" justifyContent="center" pb="12">
        <Stack direction="row" spacing="24">
          {data &&
            data
              .filter((item) => item.activo)
              .map(({ id, descripcion, puntos, stock }) => (
                <PrizeItem
                  key={id}
                  title={descripcion}
                  price={puntos}
                  picture={IMAGE}
                  stock={stock}
                  onClick={() => claimPrize(id)}
                />
              ))}
        </Stack>
      </Flex>
    </Box>
  );
}
