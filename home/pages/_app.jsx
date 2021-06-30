import "../styles/globals.css";
import '../styles/NewHome.css';
import '../styles/carrousel.css';

import { ChakraProvider } from "@chakra-ui/react";
import { AppWrapper } from "/context/state";

import Layout from "/components/layout";
import theme from "/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
