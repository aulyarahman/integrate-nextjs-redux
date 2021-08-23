import { AppProps } from "next/dist/shared/lib/router/router";
import React from "react";
import { wrapper } from "../store";

const App = ({ Component, pageProps }: AppProps) => {
  console.log("-----------------___APP", { pageProps });
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
