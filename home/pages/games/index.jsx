import React from "react";
import {
  Flex,
  Stack,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import ProductCard from "../../components/productCard";

export default function GamesPage() {
  return (
    <Flex align="center" justifyContent="center">
      <Stack direction="row" spacing="24">
        <ProductCard
          disabled
          title="Crucigrama"
          playedTimes="123"
          playUrl="/game/crucigrama"
          picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzQW3bGRT51oAxy3tgRGpG2t0OMNbeoBugA&usqp=CAU"
        />
        <ProductCard
          disabled
          title="Ta Te Ti"
          playedTimes="321"
          playUrl="/game/tateti"
          picture="https://www.purochamuyo.com/wp-content/uploads/2020/08/tateti.png"
        />
        <ProductCard
          title="Quiz Battle"
          playedTimes="123"
          playUrl="/game/quiz"
          picture="https://generacionxbox.com/wp-content/uploads/2018/01/its-quiz-time-analisis.jpg"
        />
      </Stack>
    </Flex>
  );
}
