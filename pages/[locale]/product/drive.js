import DocumentEdition from "../../../components/documentEdition";
import Version from "../../../components/version";
import ShareFile from "../../../components/shareFolder";
import SecureLink from "../../../components/secureLink";
import Layout from "../../../components/layout/layout";
import { withTranslation } from "../../../i18n";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Drive = props => (
  <Layout page="productDrive">
    <div className="container-fluid" id="product">
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subline">{props.t(props, "discover")}</div>
              <div className="line">
                <h1>
                  <span className="highlight highlightWithBackground">
                    {props.t(props, "drive1")}
                  </span>{" "}
                  {props.t(props, "drive2")}
                </h1>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="linkBlock documentSelected">
                <div className="linkInsideBlock">
                  <a
                    href={"/" + props.getLang(props) + "/" + "product/chat"}
                    className="demoTitle "
                  >
                    {props.t(props, "chat")}
                  </a>
                  <a
                    href={"/" + props.getLang(props) + "/" + "product/calendar"}
                    className="demoTitle"
                  >
                    {props.t(props, "calendar")}
                  </a>
                  <a
                    href={"/" + props.getLang(props) + "/" + "product/drive"}
                    className="demoTitle demoTitleSelected"
                  >
                    {props.t(props, "document")}
                  </a>
                  <a
                    href={"/" + props.getLang(props) + "/" + "product/task"}
                    className="demoTitle"
                  >
                    {props.t(props, "task")}
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 demoImgBloc">
                  <div className="imgContain">
                    <OverlayTrigger
                      delay={{ show: 50, hide: 400 }}
                      placement="top"
                      overlay={
                        <Tooltip>
                          {props.t(props, "drive-features-general")}
                        </Tooltip>
                      }
                    >
                      <div
                        className="roundDemo"
                        style={{ left: "31%", top: "3.2%" }}
                      ></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      delay={{ show: 50, hide: 400 }}
                      placement="top"
                      overlay={
                        <Tooltip>
                          {props.t(props, "drive-features-file")}
                        </Tooltip>
                      }
                    >
                      <div
                        className="roundDemo"
                        style={{ left: "22.5%", top: "56.7%" }}
                      ></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      delay={{ show: 50, hide: 400 }}
                      placement="top"
                      overlay={
                        <Tooltip>
                          {props.t(props, "drive-features-advanced")}
                        </Tooltip>
                      }
                    >
                      <div
                        className="roundDemo"
                        style={{ left: "94%", top: "28.1%" }}
                      ></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      delay={{ show: 50, hide: 400 }}
                      placement="top"
                      overlay={
                        <Tooltip>
                          {props.t(props, "drive-features-more")}
                        </Tooltip>
                      }
                    >
                      <div
                        className="roundDemo"
                        style={{ left: "97.3%", top: "9.5%" }}
                      ></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      delay={{ show: 50, hide: 400 }}
                      placement="top"
                      overlay={
                        <Tooltip>
                          {props.t(props, "drive-features-add")}
                        </Tooltip>
                      }
                    >
                      <div
                        className="roundDemo"
                        style={{ left: "93.3%", top: "86.5%" }}
                      ></div>
                    </OverlayTrigger>
                    <img
                      src="/medias/features/document.jpg"
                      className="demoImg demoImgSelected"
                      alt="Storage space"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 featuresCol colWithPaddingBottom">
                <div className="squareBackground">
                  <DocumentEdition />
                  <div className="titleSquare">
                    {props.t(props, "onlineEdition")}
                  </div>
                  <div className="descriptionSquare">
                    {props.t(props, "onlineEditionSub")}
                  </div>
                </div>
                <div className="squareBackground">
                  <Version />
                  <div className="titleSquare">{props.t(props, "version")}</div>
                  <div className="descriptionSquare">
                    {props.t(props, "versionSub")}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 featuresCol colWithPaddingBottom">
                <div className="squareBackground">
                  <ShareFile />
                  <div className="titleSquare">
                    {props.t(props, "sharedFile")}
                  </div>
                  <div className="descriptionSquare">
                    {props.t(props, "sharedFileSub")}
                  </div>
                </div>
                <div className="squareBackground" style={{ flex: 1 }}>
                  <div style={{ flex: 1, display: "flex" }}>
                    <div style={{ margin: "auto", width: "100%" }}>
                      <SecureLink />
                    </div>
                  </div>
                  <div className="titleSquare">
                    {props.t(props, "secureLink")}
                  </div>
                  <div className="descriptionSquare">
                    {props.t(props, "secureLinkSub")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

Drive.getInitialProps = async () => ({
  namespacesRequired: ["product"],
  locale: "en"
});

export default withTranslation(["product"])(Drive);
