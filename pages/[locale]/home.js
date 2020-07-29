import { useState } from "react";
import Home from "./index";
import { i18n, withTranslation } from "../../i18n";

class H extends React.Component {
  render() {
    return <Home />;
  }
}

H.getInitialProps = async () => ({
  namespacesRequired: ["landing"],
  locale: "en"
});

export default withTranslation(["landing"])(H);
