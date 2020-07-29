import { withTranslation } from "../../i18n";
import Layout from "../../components/layout/layout";

const Contribute = props => {
  return (
    <Layout page={"contributeTitle"}>
      <div
        className="container-fluid"
        style={{ overflowX: "hidden" }}
        id="contribute"
      >
        <section className="sectionWithScreen">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <h2 className="subline">{props.t(props, "contributeSubTitle")}</h2>
                <h1 className="title">{props.t(props, "contributeTitle")}</h1>
              </div>
              <div className="col-lg-6 offset-lg-3 textCenter">
                <div className="subtitle ">{props.t(props, "contributeText")}</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title" style={{textAlign:"left"}}>{props.t(props,"twakeSuccess")}</div>
            </div>
          </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="">
                  <div className="contribution">
                    <img src="/medias/check-alt-green.png" alt=""/>
                    <span dangerouslySetInnerHTML={{__html:props.t(props,"starGithub")}} />
                  </div>
                  <div className="contribution">
                    <img src="/medias/check-alt-green.png" alt=""/>
                    <span dangerouslySetInnerHTML={{__html:props.t(props,"likeAlternative")}} />
                  </div>
                  <div className="contribution">
                    <img src="/medias/check-alt-green.png" alt=""/>
                    <span dangerouslySetInnerHTML={{__html:props.t(props,"twitter")}} />
                  </div>
                  <div className="contribution">
                    <img src="/medias/check-alt-green.png" alt=""/>
                    <span dangerouslySetInnerHTML={{__html:props.t(props,"forum")}} />
                  </div>
                  <div className="contribution">
                    <img src="/medias/check-alt-green.png" alt=""/>
                    <span dangerouslySetInnerHTML={{__html:props.t(props,"repportIssue")}} />
                  </div>
                  <div className="contribution">
                    <img src="/medias/check-alt-green.png" alt=""/>
                    <span dangerouslySetInnerHTML={{__html:props.t(props,"documentation")}} />
                  </div>
                  <div className="contribution">
                    <img src="/medias/check-alt-green.png" alt=""/>
                    <span dangerouslySetInnerHTML={{__html:props.t(props,"fix")}} />
                  </div>
                  <div className="contribution">
                    <img src="/medias/check-alt-green.png" alt=""/>
                    <span dangerouslySetInnerHTML={{__html:props.t(props,"feature")}} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/medias/twakeDevice.png" style={{width:"100%",marginTop:"0"}}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

Contribute.getInitialProps = async () => ({
  namespacesRequired: ["contribute"],
  locale: "en"
});

export default withTranslation(["contribute"])(Contribute);
