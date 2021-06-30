import React from "react";
import {
  Box,
  Badge,
  Image,
  StarIcon,
  Text,
  Array,
  Button,
} from "@chakra-ui/react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";

export default function BoxCard(props) {
  const toast = useToast();

  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const { imageUrl, title, descr, price, codigo } = props;
  return (
    <div>
      <a href="#" onClick={() => setIsOpen(true)}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image className="imgbox" src={imageUrl} alt="" />

          <Box p="6">
            <Box d="flex" alignItems="">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                NUEVO
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {title}
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {descr}
            </Box>

            <Box color="" fontSize="xl">
              {price}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>
          </Box>
        </Box>
      </a>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Cupón de canje
            </AlertDialogHeader>

            <AlertDialogBody>
              <div id="Idtext">¿Desea canjear esta promocion?</div>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button
                colorScheme="blue"
                ml={3}
                onClick={() => {
                  toast({
                    title: "Se ha realizado su canje correctamente.",
                    description: `CODIGO DE CANJE: ${codigo}3441245`,
                    status: "success",
                    duration: 300000,
                    isClosable: true,
                    position: "top",
                  });
                  setIsOpen(false);
                }}
              >
                Canjear
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}
