import { withTranslation } from "../../i18n";
import Layout from "../../components/layout/layout";
import { useState } from "react";

const Pricing = props => {
  let [open1, setOpen1] = useState(false);
  let [open2, setOpen2] = useState(false);
  let [open3, setOpen3] = useState(false);
  let [open4, setOpen4] = useState(false);
  let [open5, setOpen5] = useState(false);

  let [annualMode, setAnnualMode] = useState(true);

  return (
    <Layout page="pricingTitle">
      <div className="container-fluid" id="pricing">
        <section className="sectionWithScreen">
          <div className="container">
            <div className="rowWithGradientBackground">
              <h1 className="subline">{props.t(props, "pricingTitle")}</h1>
              <div
                className="col-lg-12 line"
                style={{ marginBottom: "24px", marginTop: "8px" }}
              >
                {props.t(props, "titleSub")}
              </div>
              <div className="col-lg-12 buttonPricingBloc">
                <div
                  style={{ marginRight: "4px" }}
                  className={"buttonPricing " + (annualMode ? "" : "selected")}
                  id="buttonPricingMonthly"
                  onClick={() => setAnnualMode(false)}
                >
                  {props.t(props, "monthly")}
                </div>
                <div
                  style={{ marginLeft: "4px" }}
                  className={"buttonPricing " + (annualMode ? "selected" : "")}
                  id="buttonPricingAnnual"
                  onClick={() => setAnnualMode(true)}
                >
                  {props.t(props, "anual")}
                </div>
              </div>
              <div className="col-lg-12" style={{ paddingTop: "1px" }}>
                <div className="pricingBlocks">
                  <div className="pricingBlocksIn">
                    <div className="pricingBlock">
                      <div className="planName planNameYellow">
                        {props.t(props, "free")}
                      </div>
                      <div className="titlePlan">
                        <span
                          className="big amount"
                          id="freeAmountNumber"
                          style={{ fontSize: "40px" }}
                        >
                          {props.t(props, "free")}
                        </span>
                        <span className="small">
                          {props.t(props, "forever")}
                        </span>
                      </div>
                      <div className="features">
                        <div className="feature">
                          <img src="/medias/check-alt-green.png" alt="" />
                          <div className="nameFeature">
                            {props.t(props, "1workspace")}
                          </div>
                        </div>
                        <div className="feature">
                          <img src="/medias/check-alt-green.png" alt="" />
                          <div className="nameFeature">
                            {props.t(props, "unlimitedMessage")}
                          </div>
                        </div>
                        <div className="feature">
                          <img src="/medias/check-alt-green.png" alt="" />
                          <div className="nameFeature">
                            {props.t(props, "limitedhistory")}
                          </div>
                        </div>
                        <div className="feature">
                          <img src="/medias/check-alt-green.png" alt="" />
                          <div className="nameFeature">
                            1 {props.t(props, "gostorage")}
                          </div>
                        </div>
                        <div className="feature">
                          <img src="/medias/check-alt-green.png" alt="" />
                          <div className="nameFeature">
                            {props.t(props, "mailSupport")}
                          </div>
                        </div>
                      </div>
                      <a
                        href="https://app.twakeapp.com"
                        className="btn btn-purple"
                        style={{ width: "100%", padding: "6px 16px" }}
                      >
                        {props.t(props, "useForFree")}
                      </a>
                    </div>
                    <div className="pricingBlock">
                      <div className="planName planNameGreen">Standard</div>
                      <div className="titlePlan">
                        <span
                          className="big amount"
                          style={{ fontSize: "40px" }}
                          id="premiumAmountNumber"
                        >
                          {annualMode ? "9" : "12.5"}€
                        </span>
                        <span className="small">
                          {props.t(props, "byUserByMonth")}
                        </span>
                      </div>
                      <div className="features">
                        <div className="feature">
                          <img src="/medias/check-alt-green.png" alt="" />
                          <div className="nameFeature">
                            {props.t(props, "unlimitedWorkspace")}
                          </div>
                        </div>
                        <div className="feature">
                          <img src="/medias/check-alt-green.png" alt="" />
                          <div className="nameFeature">
                            {props.t(props, "unlimitedMessage")}
                          </div>
                        </div>
                        <div className="feature">
                          <img src="/medias/check-alt-green.png" alt="" />
                          <div className="nameFeature">
                            {props.t(props, "unlimitedstorage")}
                          </div>
                        </div>
                        <div className="feature">
                          <img src="/medias/check-alt-green.png" alt="" />
                          <div className="nameFeature">
                            {props.t(props, "premiumIntegration")}
                          </div>
                        </div>
                        <div className="feature">
                          <img src="/medias/check-alt-green.png" alt="" />
                          <div className="nameFeature">
                            {props.t(props, "freeCopain")}
                          </div>
                        </div>
                        <div className="feature">
                          <img src="/medias/check-alt-green.png" alt="" />
                          <div className="nameFeature">
                            {props.t(props, "phoneSupport")}
                          </div>
                        </div>
                      </div>
                      <a
                        href="https://app.twakeapp.com"
                        className="btn btn-purple"
                        style={{ width: "100%", padding: "6px 16px" }}
                      >
                        {props.t(props, "freeTry")}
                      </a>
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
              <div className="col-lg-12 faqcol">
                <div className="line">{props.t(props, "faq")}</div>
                <div className="faq">
                  <div
                    className={"question " + (open1 ? "" : "closeQuestion")}
                    onClick={() => setOpen1(!open1)}
                  >
                    <div className="faqTitle">
                      <div style={{ display: "inline-block", flex: "1" }}>
                        {props.t(props, "canITry")}
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginTop: "4px",
                          float: "right",
                          height: "16px",
                          width: "16px"
                        }}
                      >
                        <div className="vertB vertB1"></div>
                        <div className="horB"></div>
                      </div>
                    </div>
                    <div className="faqDescription">
                      {props.t(props, "canITryR")}
                    </div>
                  </div>
                  <div className="separator"></div>
                  <div
                    className={"question " + (open2 ? "" : "closeQuestion")}
                    onClick={() => setOpen2(!open2)}
                  >
                    <div className="faqTitle">
                      <div style={{ display: "inline-block", flex: "1" }}>
                        {props.t(props, "adaptation")}
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginTop: "4px",
                          float: "right",
                          height: "16px",
                          width: "16px"
                        }}
                      >
                        <div className="vertB vertB1"></div>
                        <div className="horB"></div>
                      </div>
                    </div>
                    <div className="faqDescription">
                      {props.t(props, "adaptationR")}
                    </div>
                  </div>
                  <div className="separator"></div>
                  <div
                    className={"question " + (open3 ? "" : "closeQuestion")}
                    onClick={() => setOpen3(!open3)}
                  >
                    <div className="faqTitle">
                      <div style={{ display: "inline-block", flex: "1" }}>
                        {props.t(props, "extern")}
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginTop: "4px",
                          float: "right",
                          height: "16px",
                          width: "16px"
                        }}
                      >
                        <div className="vertB vertB1"></div>
                        <div className="horB"></div>
                      </div>
                    </div>
                    <div className="faqDescription">
                      {props.t(props, "externR")}
                    </div>
                  </div>

                  <div className="separator"></div>

                  <div
                    className={"question " + (open4 ? "" : "closeQuestion")}
                    onClick={() => setOpen4(!open4)}
                  >
                    <div className="faqTitle">
                      <div style={{ display: "inline-block", flex: "1" }}>
                        {props.t(props, "secure")}
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginTop: "4px",
                          float: "right",
                          height: "16px",
                          width: "16px"
                        }}
                      >
                        <div className="vertB vertB1"></div>
                        <div className="horB"></div>
                      </div>
                    </div>
                    <div className="faqDescription">
                      {props.t(props, "secureR")}
                    </div>
                  </div>
                  <div className="separator"></div>

                  <div
                    className={"question " + (open5 ? "" : "closeQuestion")}
                    onClick={() => setOpen5(!open5)}
                  >
                    <div className="faqTitle">
                      <div style={{ display: "inline-block", flex: "1" }}>
                        {props.t(props, "onpremise")}
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          marginTop: "4px",
                          float: "right",
                          height: "16px",
                          width: "16px"
                        }}
                      >
                        <div className="vertB vertB1"></div>
                        <div className="horB"></div>
                      </div>
                    </div>
                    <div className="faqDescription">
                      {props.t(props, "onpremiseR")}
                    </div>
                  </div>
                  <div className="separator"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionWithBackground">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 textCenter">
                <div className="line">{props.t(props, "tryEasy")}</div>
                <div className="btn btn-purple" style={{ marginTop: "24px" }}>
                  {props.t(props, "tryNow")}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

Pricing.getInitialProps = async () => ({
  namespacesRequired: ["pricing"],
  locale: "en"
});

export default withTranslation(["pricing"])(Pricing);
