import { withTranslation } from "../../i18n";
import Layout from "../../components/layout/layout";
import { useEffect } from "react";
import useHubspotForm from '@aaronhayes/react-use-hubspot-form';

const Demo = props => {
	const { loaded, error, formCreated } = useHubspotForm({
		portalId: '5865592',
		formId: '7ddb2595-6a13-4c39-9e18-b0d880e82ac1',
		target: '#my-hubspot-form'
	});
  return (
    <Layout page={"demonstrationTitle"}>
      <div
        className="container-fluid"
        style={{ overflowX: "hidden" }}
        id="requestDemo"
      >
        <section className="sectionWithScreen">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="subline">{props.t(props, "subTitle")}</h2>
                <h1 className="title">{props.t(props, "demoTitle")}</h1>
              </div>
              <div className="col-lg-6 offset-lg-3 textCenter">
                <div className="subtitle ">{props.t(props, "text")}</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  id="my-hubspot-form"
									style={{display:"block",maxWidth:"600px",margin:"auto"}}
                  data-src=""
                ></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

Demo.getInitialProps = async () => ({
  namespacesRequired: ["demo"],
  locale: "en"
});

export default withTranslation(["demo"])(Demo);
