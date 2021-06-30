import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
const Component = () => {
  const router = useRouter();

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const slides = [
    {
      href: "/games",
      img: "https://revistadigital.inesem.es/gestion-empresarial/files/2018/08/destacada-1020x679.jpg",
    },
    {
      href: "/birthday",
      img: "https://ichef.bbci.co.uk/news/640/cpsprodpb/1462D/production/_104910538_gettyimages-871610664.jpg",
    },
    {
      href: "/preguntadiaria",
      img: "https://emprendedoresnews.com/wp-content/uploads/2018/06/A0CG0002140-e1528395408432.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      w="full"
      bg="primary"
      p={10}
      alignItems="center"
      maxH="600px"
      overflow="hidden"
      borderRadius="12px"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="full" w="full" {...carouselStyle} borderRadius="12px">
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                cursor="pointer"
                onClick={() => router.push(slide.href)}
                boxSize="full"
                backgroundSize="cover"
                borderRadius="12px"
              />
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack
          justify="center"
          pos="absolute"
          bottom="8px"
          borderRadius="12px"
          w="full"
        >
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", , "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              borderRadius="12px"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};
export default Component;
