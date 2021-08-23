import Navbar from "components/navbar";
import { AppProps } from "next/app";
import React from "react";
import { wrapper } from "../store";

const App = ({ Component, pageProps }: AppProps) => {
  console.log("-----------------___APP", { pageProps });
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default wrapper.withRedux(App);
