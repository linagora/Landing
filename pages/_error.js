import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout/layout";
import { withTranslation } from "../i18n";

const Error = ({ statusCode }) => {
  if (statusCode == 404) {
    return (
      <Layout>
        <div className="container" style={{ overflowX: "hidden" }}>
          <section>
            <h1 style={{ textAlign: "center" }}>Page not found</h1>
          </section>
        </div>
      </Layout>
    );
  } else {
    return <p>{statusCode}</p>;
  }
};

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null;
  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }
  return {
    namespacesRequired: ["common"],
    statusCode
  };
};

Error.defaultProps = {
  statusCode: null
};

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(Error);
