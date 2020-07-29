import { withTranslation } from "../../i18n";
import Layout from "../../components/layout/layout";
import { useEffect } from "react";

const Demo = props => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
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
                  className="meetings-iframe-container"
                  data-src="https://meetings.hubspot.com/benoittwake/demonstration?embed=true"
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
