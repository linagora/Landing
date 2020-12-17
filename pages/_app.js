import React from "react";
import App from "next/app";
import { appWithTranslation } from "../i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-modal-video/scss/modal-video.scss';
import "../css/custom.css";
import "../css/mobile.css";

class Landing extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default appWithTranslation(Landing);
