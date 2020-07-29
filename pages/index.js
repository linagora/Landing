import { useState } from "react";
import {
  i18n,
  withTranslation,
  locales,
  getPreferedLang,
  changePath
} from "../i18n";
import Home from "./[locale]/index";

class Index extends React.Component {
  componentDidMount() {
    //Redirect to page with /[locale]/ or 404
    let path = document.location.pathname;
    path = changePath(path);
    if (path) {
      document.location = path;
    }
  }
  render() {
    return <Home />;
  }
}

Index.getInitialProps = async () => ({
  namespacesRequired: ["landing"],
  locale: "en"
});

export default withTranslation(["landing"])(Index);
