import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Flex,
    Heading,
    Button,
    Textarea
} from "@chakra-ui/react"


export default function CreateNewsPage() {
    
    return (
        <Flex width="full" align="left" justifyContent="left" ml={10} mt={0}>
            <Box p={2}>
                <Box textAlign="left">
                    <Heading>Crear noticia</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>
                        <FormControl>
                            <FormLabel>Título</FormLabel>
                            <Input type="text" placeholder="Noticia nueva" />
                            <FormHelperText>Máximo número de caracteres: 20</FormHelperText>
                        </FormControl>

                        <FormControl mt={6}>
                            <FormLabel>Imagen</FormLabel>
                            <Input type="file" />
                            <FormHelperText>Formatos permitidos: jpg, png</FormHelperText>
                         
                        </FormControl>

                        <FormControl mt={6}>
                            <FormLabel>Contenido de la noticia</FormLabel>
                            <Textarea minWidth="600" minHeight="400" />
                            <FormHelperText>Máximo número de caracteres: 500</FormHelperText>
                        </FormControl>


                        <Button width="full" mt={4} type="submit">
                            Crear
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>

    )
}