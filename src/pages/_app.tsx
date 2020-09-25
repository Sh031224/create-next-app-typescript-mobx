import React from "react";
import App from "next/app";
import { useStaticRendering, Provider } from "mobx-react";
import stores from "../stores";
import "../util/util.scss";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={stores}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
export default MyApp;
