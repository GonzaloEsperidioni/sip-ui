import React from "react";
import {
  chakra,
  Box,
  Image,
  Button,
  useColorModeValue,
  Link,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useAppContext } from "../../context/state";

const Ma = ({ nombre, puesto, cumple, imagen }) => {
  const { discountPoints } = useAppContext();
  const donatePoints = (points) => {
    discountPoints(points);
    onClose(true);
  };
  const toast = useToast();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = (send) => {
    setIsOpen(false);
    if (send === true) {
      toast({
        title: "Se han enviado sus puntos correctamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };
  const cancelRef = React.useRef();
  return (
    <>
      <AlertDialog
        onClose={() => {}}
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Regala 50 puntos!
            </AlertDialogHeader>

            <AlertDialogBody>
              Estas seguro que queres regalar 50 puntos?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button
                colorScheme="primary"
                onClick={() => donatePoints(50)}
                ml={3}
              >
                Aceptar!
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image w="full" h={56} fit="cover" src={imagen} alt="avatar" />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            {nombre}
          </Link>
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            {puesto}
          </chakra.span>
          <chakra.span display="block" fontWeight="bold" fontSize="sm">
            {cumple}
          </chakra.span>
          <Button
            onClick={() => setIsOpen(true)}
            leftIcon={<StarIcon />}
            mt="12px"
            variant="outline"
          >
            Regal?? puntos
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Ma;
