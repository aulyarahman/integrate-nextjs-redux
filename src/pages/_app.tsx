import Navbar from "components/navbar";
import { AppProps } from "next/app";
import React from "react";
import { wrapper } from "../store";
import { ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps }: AppProps) => {
  console.log("-----------------___APP", { pageProps });
  return (
    <React.Fragment>
      <ChakraProvider resetCSS>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </React.Fragment>
  );
};

export default wrapper.withRedux(App);
