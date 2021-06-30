import { Center, Text } from "@chakra-ui/react";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiGift } from "react-icons/fi";
import { BasicUsageModal } from "../../components/prizeModal/index.jsx";

export default function PrizeItem({ picture, price, title, stock, onClick }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      <Image src={picture} alt={`Picture of ${title}`} roundedTop="lg" />

      <Box p="6">
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>
          <Tooltip
            label="Canjear"
            bg="white"
            placement={"top"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <chakra.a onClick={onClick} display={"flex"}>
              <Icon as={FiGift} h={7} w={7} alignSelf={"center"} />
            </chakra.a>
          </Tooltip>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            {price}
            <Box ml="6px" as="span" color={"gray.600"} fontSize="lg">
              puntos
            </Box>
          </Box>
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            {stock}
            <Box ml="6px" as="span" color={"gray.600"} fontSize="lg">
              Stock
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
