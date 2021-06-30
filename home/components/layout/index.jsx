import { Grid, GridItem } from "@chakra-ui/react"
import Header from "/components/header"
import Footer from "/components/footer"
export default function Layout({ children }) {
    return <Grid minHeight="100vh" templateRows="fit-content(100%) 1fr fit-content(100%)">
        <GridItem ><Header /></GridItem>
        <GridItem justifyItems="stretch" p="4">{children}</GridItem>
        <GridItem alignSelf="end"><Footer /></GridItem>
    </Grid>
}