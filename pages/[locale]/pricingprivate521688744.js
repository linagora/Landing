import { withTranslation } from "../../i18n";
import Layout from "../../components/layout/layout";
import { useState } from "react";

const Pricing = props => {
  let [open1, setOpen1] = useState(false);
  let [open2, setOpen2] = useState(false);
  let [open3, setOpen3] = useState(false);
  let [open4, setOpen4] = useState(false);
  let [open5, setOpen5] = useState(false);

	let features = [
		{
			title : "features",
			features : [
				{
					name : "chat",
					available : [true,true,true],
				},
				{
					name : "drive",
					options : ["1TB","5TB",props.t(props,"unlimited")]
				},
				{
					name : "calendar",
					available : [true,true,true],
				},
				{
					name : "task",
					available : [true,true,true],
				},
				{
					name : "video",
					available : [true,true,true],
				},
				{
					name : "office",
					available : [true,true,true],
				},
				{
					name : "guest",
					available : [false,true,true],
				},
				{
					name : "email",
					options : ["",props.t(props,"comingsoon"),props.t(props,"comingsoon")],
				},
				{
					name : "teamSpace",
					options : ["",props.t(props,"comingsoon"),props.t(props,"comingsoon")],
				}
			],
		},
		{
			title : "privacy",
			features : [
				{
					name : "strongpasswordpolicy",
					available : [true,true,true],
				},
				{
					name : "2fa",
					available : [true,true,true],
				},
				{
					name : "ssoauthentification",
					available : [true,true,true],
				},
				{
					name : "dataeurope",
					available : [true,true,true],
				},
				{
					name : "cloudact",
					available : [true,true,true],
				},
				{
					name : "gdpr",
					available : [true,true,true],
				},
				{
					name : "tsl",
					available : [true,true,true],
				},
				{
					name : "encryption",
					available : [false,true,true],
				},
				{
					name : "fileEncryption",
					available : [false,true,true],

				},
				{
					name : "advancedSecurity",
					available : [false,true,true],
				},
				{
					name : "deviceManagement",
					available : [false,true,true],
				}
			]
		},
		{
			title : "support",
			features : [
				{
					name : "chat",
					available : [true,true,true],
				},
				{
					name : "email",
					available : [true,true,true],
				},
				{
					name : "phone",
					available : [true,true,true],
				},
				{
					name : "inPerson",
					available : [false,true,true],
				},
				{
					name : "99uptime",
					available : [false,true,true],
				},
				{
					name : "accountTeam",
					available : [false,false,true],
				}
			]
		},
		{
			title : "access",
			features : [
				{
					name : "web",
					available : [true,true,true],
				},
				{
					name : "mobile",
					available : [true,true,true],
				},
				{
					name : "desktop",
					available : [true,true,true],
				}
			]
		},
		{
			title : "integration",
			features : [
				{
					name : "jitsi",
					available : [true,true,true],
				},
				{
					name : "onlyoffice",
					available : [true,true,true],
				}
			]
		}
	]

  let [saasMode, setSaasMode] = useState(true);

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
                  style={{borderRadius : "4px 0px 0px 4px"}}
                  className={"buttonPricing " + (saasMode ? "" : "selected")}
                  id="buttonPricingMonthly"
                  onClick={() => setSaasMode(false)}
                >
									<div className="pricingTitle">{props.t(props, "onPremTitle")}</div>
									<div className="pricingSubTitle">{props.t(props, "onPremSubTitle")}</div>
                </div>
                <div
                  style={{ borderRadius :"0px 4px 4px 0px" }}
                  className={"buttonPricing " + (saasMode ? "selected" : "")}
                  id="buttonPricingAnnual"
                  onClick={() => setSaasMode(true)}
                >
									<div className="pricingTitle">{props.t(props, "saasTitle")}</div>
									<div className="pricingSubTitle">{props.t(props, "saasSubTitle")}</div>
                </div>
              </div>
              <div className="col-lg-12" style={{ paddingTop: "1px" }}>
                <div className="pricingBlocks">
                  <div className="pricingBlocksIn">
                    <div className="pricingBlock">
                      <div className="titlePlan">
                        <span
                          className="big amount"
                          style={{ fontSize: "40px" }}
                        >
													{props.t(props, "standard")}
                        </span>
                      </div>
											<div className="subTitlePlan">{props.t(props,"standardSubTitle")}</div>
											<div className="pricingAmount">5 € <span style={{fontWeight:"400",fontSize:"16px"}}>{props.t(props,"byUserByMonth")}</span></div>
                      <a
                        href="https://app.twakeapp.com"
                        className="btn btn-purple"
                        style={{ width: "100%", padding: "6px 16px" }}
                      >
                        {props.t(props, "freeTry")}
                      </a>
                    </div>
                    <div className="pricingBlock">
                      <div className="titlePlan">
                        <span
                          className="big amount"
                          style={{ fontSize: "40px" }}
                        >
												{props.t(props, "premium")}
                        </span>
                      </div>
											<div className="subTitlePlan">{props.t(props,"premiumSubTitle")}</div>
											<div className="pricingAmount">7 € <span style={{fontWeight:"400",fontSize:"16px"}}>{props.t(props,"byUserByMonth")}</span></div>

                      <a
                        href="https://app.twakeapp.com"
                        className="btn btn-purple"
                        style={{ width: "100%", padding: "6px 16px" }}
                      >
                        {props.t(props, "freeTry")}
                      </a>
                    </div>
                    <div className="pricingBlock">
                      <div className="titlePlan">
                        <span
                          className="big amount"
                          style={{ fontSize: "40px" }}
                        >
												{props.t(props, "entreprise")}
                        </span>
                      </div>
											<div className="subTitlePlan">{props.t(props,"entrepriseSubTitle")}</div>
											<div className="pricingAmount">{props.t(props,"")} <span style={{fontWeight:"400",fontSize:"16px"}}>{props.t(props,"contactSale")}</span></div>
                      <a
                        href="https://app.twakeapp.com"
                        className="btn btn-purple"
                        style={{ width: "100%", padding: "6px 16px" }}
                      >
                        {props.t(props, "contactSale")}
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
	              <div className="line">{props.t(props, "compare")}</div>
							</div>
						</div>
						<div className="row" style={{marginTop:"32px"}}>
							<div className="col-lg-12">
								<table className="pricingTable">
									<thead>
										<tr>
											<th style={{border:"none"}}></th>
											<th>Standard</th>
											<th>Premium</th>
											<th>Entreprise</th>
										</tr>
									</thead>
									<tbody>
										{
											features.map(section => {
												let ret = [
													<tr>
														<td colSpan="4" className="tsection">{props.t(props,section.title)}</td>
													</tr>
												];
												section.features.forEach(feat => {
													ret.push(
														<tr className="tfeature">
															<td className="featureName">{props.t(props,feat.name)}</td>
															{
																feat.available &&
																[
																	<td>{feat.available[0]?<img style={{width:"16px"}} src="/medias/check-alt-green.png" alt="" />:""}</td>,
																	<td>{feat.available[1]?<img style={{width:"16px"}} src="/medias/check-alt-green.png" alt="" />:""}</td>,
																	<td>{feat.available[2]?<img style={{width:"16px"}} src="/medias/check-alt-green.png" alt="" />:""}</td>
																]
															}
															{
																feat.options &&
																[
																	<td>{feat.options[0]}</td>,
																	<td>{feat.options[1]}</td>,
																	<td>{feat.options[2]}</td>,
																]
															}
														</tr>
													)
												});
												return ret;
											})
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
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
