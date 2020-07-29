import { useState } from "react";
import { i18n, withTranslation, locales } from "../../i18n";
import Layout from "../../components/layout/layout";

class NotFound extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container" style={{ overflowX: "hidden" }}>
          <section>
            <h1 style={{ textAlign: "center" }}>Page not found</h1>
          </section>
        </div>
      </Layout>
    );
  }
}

NotFound.getInitialProps = async () => ({
  namespacesRequired: ["common"],
  locale: "en"
});

export default withTranslation(["common"])(NotFound);
