import { VStack, Text, Heading } from "@chakra-ui/react";

function Error({ statusCode }) {
    return (
        <VStack>
            <Heading as="h2">Ups! Encontramos un error :(</Heading>
            <Text>
                {statusCode
                    ? `Un error ${statusCode} ocurrio en el servidor, porfa, intenta mas tarde!`
                    : 'Se encontro un error en el cliente, porfavor, recarga la web!'}
            </Text>
        </VStack>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error