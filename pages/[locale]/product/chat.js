import { useState } from "react";
import Head from "next/head";
import Layout from "../../../components/layout/layout";
import SimpleChannel from "../../../components/simpleChannel";
import Discussion from "../../../components/discussion";
import History from "../../../components/history";
import { i18n, withTranslation } from "../../../i18n";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class ChatProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <Layout page="productChat">
        <div className="container-fluid" id="product">
          <section className="">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="subline">
                    {this.props.t(this.props, "discover")}
                  </div>
                  <div className="line">
                    <h1>
                      <span className="highlight highlightWithBackground">
                        {this.props.t(this.props, "chat1")}
                      </span>{" "}
                      {this.props.t(this.props, "chat2")}
                    </h1>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="linkBlock">
                    <div className="linkInsideBlock">
                      <a
                        href={
                          "/" +
                          this.props.getLang(this.props) +
                          "/" +
                          "product/chat"
                        }
                        className="demoTitle demoTitleSelected"
                      >
                        {this.props.t(this.props, "chat")}
                      </a>
                      <a
                        href={
                          "/" +
                          this.props.getLang(this.props) +
                          "/" +
                          "product/calendar"
                        }
                        className="demoTitle"
                      >
                        {this.props.t(this.props, "calendar")}
                      </a>
                      <a
                        href={
                          "/" +
                          this.props.getLang(this.props) +
                          "/" +
                          "product/drive"
                        }
                        className="demoTitle"
                      >
                        {this.props.t(this.props, "document")}
                      </a>
                      <a
                        href={
                          "/" +
                          this.props.getLang(this.props) +
                          "/" +
                          "product/task"
                        }
                        className="demoTitle"
                      >
                        {this.props.t(this.props, "task")}
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
                              {this.props.t(this.props, "chat-table")}
                            </Tooltip>
                          }
                        >
                          <div
                            className="roundDemo"
                            style={{ left: "37%", top: "3.2%" }}
                          ></div>
                        </OverlayTrigger>
                        <OverlayTrigger
                          delay={{ show: 50, hide: 400 }}
                          placement="top"
                          overlay={
                            <Tooltip>
                              {this.props.t(this.props, "chat-externe")}
                            </Tooltip>
                          }
                        >
                          <div
                            className="roundDemo"
                            style={{ left: "15.5%", top: "50.5%" }}
                          ></div>
                        </OverlayTrigger>
                        <OverlayTrigger
                          delay={{ show: 50, hide: 400 }}
                          placement="top"
                          overlay={
                            <Tooltip>
                              {this.props.t(this.props, "chat-response")}
                            </Tooltip>
                          }
                        >
                          <div
                            className="roundDemo"
                            style={{ left: "29%", top: "28.9%" }}
                          ></div>
                        </OverlayTrigger>
                        <OverlayTrigger
                          delay={{ show: 50, hide: 400 }}
                          placement="top"
                          overlay={
                            <Tooltip>
                              {this.props.t(this.props, "chat-group")}
                            </Tooltip>
                          }
                        >
                          <div
                            className="roundDemo"
                            style={{ left: "10%", top: "38.3%" }}
                          ></div>
                        </OverlayTrigger>
                        <OverlayTrigger
                          delay={{ show: 50, hide: 400 }}
                          placement="top"
                          overlay={
                            <Tooltip>
                              {this.props.t(this.props, "chat-file")}
                            </Tooltip>
                          }
                        >
                          <div
                            className="roundDemo"
                            style={{ left: "39%", top: "77.8%" }}
                          ></div>
                        </OverlayTrigger>
                        <OverlayTrigger
                          delay={{ show: 50, hide: 400 }}
                          placement="top"
                          overlay={
                            <Tooltip>
                              {this.props.t(this.props, "chat-attachement")}
                            </Tooltip>
                          }
                        >
                          <div
                            className="roundDemo"
                            style={{ left: "89.8%", top: "93.5%" }}
                          ></div>
                        </OverlayTrigger>
                        <img
                          src="/medias/features/chat.jpg"
                          className="demoImg demoImgSelected"
                          alt="Chat"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 featuresCol">
                  <div className="squareBackground">
                    <SimpleChannel />
                    <div className="titleSquare">
                      {this.props.t(this.props, "replaceMail")}
                    </div>
                    <div className="descriptionSquare">
                      {this.props.t(this.props, "replaceMailSub")}
                    </div>
                  </div>
                  <div className="squareBackground" style={{ flex: 1 }}>
                    <div style={{ flex: 1, display: "flex" }}>
                      <div style={{ margin: "auto" }}>
                        <History />
                      </div>
                    </div>
                    <div className="titleSquare">
                      {this.props.t(this.props, "history")}
                    </div>
                    <div className="descriptionSquare">
                      {this.props.t(this.props, "historySub")}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 featuresCol">
                  <div className="squareBackground">
                    <Discussion />
                    <div className="titleSquare">
                      {this.props.t(this.props, "exchange")}
                    </div>
                    <div className="descriptionSquare">
                      {this.props.t(this.props, "exchangeSub")}
                    </div>
                  </div>
                  <div className="squareBackground">
                    <img
                      className="featureImg"
                      src="/medias/features/external.png"
                    />
                    <div className="titleSquare">
                      {this.props.t(this.props, "copain")}
                    </div>
                    <div className="descriptionSquare">
                      {this.props.t(this.props, "copainSub")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

ChatProduct.getInitialProps = async () => ({
  namespacesRequired: ["product"],
  locale: "en"
});

export default withTranslation(["product"])(ChatProduct);
