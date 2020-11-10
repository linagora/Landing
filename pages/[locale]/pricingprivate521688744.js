import { withTranslation } from "../../i18n";
import Layout from "../../components/layout/layout";
import { useState } from "react";

const Pricing = props => {
  let [open1, setOpen1] = useState(false);
  let [open2, setOpen2] = useState(false);
  let [open3, setOpen3] = useState(false);
  let [open4, setOpen4] = useState(false);
  let [open5, setOpen5] = useState(false);

	let plans = {
		saas : [
			"standard",
			"premium",
			"entreprise"
		],
		selhosted :[
			"community",
			"standard",
			"premium",
			"entreprise"
		]
	}

	let features = {
		saas : [
			{
				title : "features",
				features : [
					{
						name : "chat",
						available : [true,true,true],
					},
					{
						name : "drive",
						available : ["1TB","5TB",props.t(props,"unlimited")]
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
						available : ["",props.t(props,"comingsoon"),props.t(props,"comingsoon")],
					},
					{
						name : "teamSpace",
						available : ["",props.t(props,"comingsoon"),props.t(props,"comingsoon")],
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
		],
		selhosted : [
			{
				title : "features",
				features : [
					{
						name : "chat",
						available : [true,true,true,true],
					},
					{
						name : "drive",
						available : [true,true,true,true],
					},
					{
						name : "calendar",
						available : [true,true,true,true],
					},
					{
						name : "task",
						available : [true,true,true,true],
					},
					{
						name : "guest",
						available : [true,true,true,true],
					},
					{
						name : "video",
						available : [false,true,true,true],
					},
					{
						name : "office",
						available : [true,true,true,true],
					},
					{
						name : "email",
						available : [false,false,true,true],
					},
					{
						name : "fileSharing",
						available : [false,false,true,true],
					},
					{
						name : "teamSpace",
						available : [false,false,true,true],
					}
				],
			},
			{
				title : "privacy",
				features : [
					{
						name : "strongpasswordpolicy",
						available : [false,true,true,true],
					},
					{
						name : "2fa",
						available : [false,true,true,true],
					},
					{
						name : "ssoauthentification",
						available : [false,true,true,true],
					},
					{
						name : "activedirectory",
						available : [false,false,true,true],
					},
					{
						name : "dataeurope",
						available : [true,true,true,true],
					},
					{
						name : "cloudact",
						available : [true,true,true,true],
					},
					{
						name : "gdpr",
						available : [true,true,true,true],
					},
					{
						name : "tsl",
						available : [true,true,true,true],
					},
					{
						name : "encryption",
						available : [false,false,true,true],
					},
					{
						name : "fileEncryption",
						available : [false,false,true,true],

					},
					{
						name : "advancedSecurity",
						available : [false,false,true,true],
					},
					{
						name : "deviceManagement",
						available : [false,false,true,true],
					}
				]
			},
			{
				title : "resources",
				features : [
					{
						name : "documentation",
						available : [true,true,true,true],
					},
					{
						name : "tutovideo",
						available : [true,true,true,true],
					},
					{
						name : "forum",
						available : [true,true,true,true],
					},
					{
						name : "featuresbugs",
						available : [true,true,true,true],
					},
				]
			},
			{
				title : "support",
				features : [
					{
						name : "ticket",
						available : [false,true,true,true],
					},
					{
						name : "chat",
						available : [false,true,true,true],
					},
					{
						name : "email",
						available : [false,true,true,true],
					},
					{
						name : "phone",
						available : [false,false,true,true],
					},
					{
						name : "inPerson",
						available : ["","",props.t(props,"ondemand"),props.t(props,"ondemand")]
					},
					{
						name : "99uptime",
						available : [false,false,false,true],
					},
					{
						name : "accountTeam",
						available : [false,false,false,true],
					}
				]
			},
			{
				title : "onboarding",
				features : [
					{
						name : "obcall",
						available : [false,true,true,true],
					},
					{
						name : "migration",
						available : [false,true,props.t(props,"ondemand"),true],
					},
					{
						name : "upgrade",
						available : [false,true,props.t(props,"ondemand"),true],
					}
				]
			},
			{
				title : "deployment",
				features : [
					{
						name : "onprem",
						available : [true,true,true,true],
					},
					{
						name : "privatehosted",
						available : [false,true,true,true],
					}
				]
			},
			{
				title : "access",
				features : [
					{
						name : "web",
						available : [true,true,true,true],
					},
					{
						name : "mobile",
						available : [true,true,true,true],
					},
					{
						name : "desktop",
						available : [true,true,true,true],
					}
				]
			},
			{
				title : "integration",
				features : [
					{
						name : "jitsi",
						available : [false,true,true,true],
					},
					{
						name : "onlyoffice",
						available : [false,true,true,true],
					}
				]
			}
		]
	}

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

									{!saasMode &&
                  <div className="pricingBlocksIn">
										<div className="pricingBlock col-lg-3 col-md-3 col-sm-3">
												<div className="titlePlan">
													<span
														className="big amount"
														style={{ fontSize: "24px" }}
													>
														{props.t(props, "community")}
													</span>
												</div>
												<div className="subTitlePlan">{props.t(props, "selfhostedCommunautySubTitle")}</div>
												<div className="pricingAmount"><span style={{ fontWeight: "400", fontSize: "16px" }}>{props.t(props, "free")}</span></div>
												<a
													href="https://app.twakeapp.com"
													className="btn btn-purple"
													style={{ width: "100%", padding: "6px 16px" }}
												>
													{props.t(props, "freeTry")}
												</a>
											</div>
										<div className="pricingBlock col-lg-3 col-md-3 col-sm-3">
                      	<div className="titlePlan">
													<span
														className="big amount"
														style={{ fontSize: "24px" }}
													>
														{props.t(props, "standard")}
													</span>
												</div>
												<div className="subTitlePlan">{props.t(props,"selfhostedStandardSubTitle")}</div>
											<div className="pricingAmount" style={{ marginTop: "72px" }}>35 € <span style={{fontWeight:"400",fontSize:"14px"}}>{props.t(props,"byUserByMonth")}</span></div>
												<a
													href="https://app.twakeapp.com"
													className="btn btn-purple"
													style={{ width: "100%", padding: "6px 16px" }}
												>
													{props.t(props, "freeTry")}
												</a>
											</div>
										<div className="pricingBlock col-lg-3 col-md-3 col-sm-3">
												<div className="titlePlan">
													<span
														className="big amount"
														style={{ fontSize: "24px" }}
													>
													{props.t(props, "premium")}
													</span>
												</div>
												<div className="subTitlePlan">{props.t(props,"selfhostedPremiumSubTitle")}</div>
												<div className="pricingAmount" style={{marginTop:"72px"}}>70 € <span style={{fontWeight:"400",fontSize:"14px"}}>{props.t(props,"byUserByMonth")}</span></div>
												<a
													href="https://app.twakeapp.com"
													className="btn btn-purple"
													style={{ width: "100%", padding: "6px 16px" }}
												>
													{props.t(props, "freeTry")}
												</a>
											</div>
											<div className="pricingBlock col-lg-3 col-md-3 col-sm-3">
												<div className="titlePlan">
													<span
														className="big amount"
														style={{ fontSize: "24px" }}
													>
													{props.t(props, "entreprise")}
													</span>
												</div>
												<div className="subTitlePlan">{props.t(props,"selfhostedEntrepriseSubTitle")}</div>
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
										}
										{saasMode &&

										<div className="pricingBlocksIn col-lg-9 col-md-9 col-sm-9">
											<div className="pricingBlock">
												<div className="titlePlan">
													<span
														className="big amount"
														style={{ fontSize: "24px" }}
													>
														{props.t(props, "standard")}
													</span>
												</div>
												<div className="subTitlePlan">{props.t(props,"saasStandardSubTitle")}</div>
												<div className="pricingAmount">5 € <span style={{fontWeight:"400",fontSize:"14px"}}>{props.t(props,"byUserByMonth")}</span></div>
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
														style={{ fontSize: "24px" }}
													>
													{props.t(props, "premium")}
													</span>
												</div>
												<div className="subTitlePlan">{props.t(props,"saasPremiumSubTitle")}</div>
											<div className="pricingAmount" style={{ marginTop: "72px" }}>7 € <span style={{fontWeight:"400",fontSize:"14px"}}>{props.t(props,"byUserByMonth")}</span></div>

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
														style={{ fontSize: "24px" }}
													>
													{props.t(props, "entreprise")}
													</span>
												</div>
												<div className="subTitlePlan">{props.t(props,"saasEntrepriseSubTitle")}</div>
											<div className="pricingAmount" style={{ marginTop: "72px" }}>{props.t(props,"")} <span style={{fontWeight:"400",fontSize:"16px"}}>{props.t(props,"contactSale")}</span></div>
												<a
													href="https://app.twakeapp.com"
													className="btn btn-purple"
													style={{ width: "100%", padding: "6px 16px" }}
												>
													{props.t(props, "contactSale")}
												</a>
											</div>
										</div>
										}
                </div>
              </div>
            </div>
          </div>
        </section>
				<section className="pricing-compare">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 faqcol">
	              <div className="line">{props.t(props, "compare")}</div>
							</div>
						</div>
						<div className="row" style={{marginTop:"32px"}}>
							<div className="table-responsive">
								<table className="pricingTable table">
									<thead>
										<tr>
											<th style={{ border: "none" }} scope="col"></th>
											{plans[saasMode?"saas":"selhosted"].map(plan =>(
												<th>{props.t(props,plan)}</th>
											))}
										</tr>
									</thead>
									<tbody>
										{
											features[saasMode?"saas":"selhosted"].map(section => {
												let ret = [
													<tr scope="row">
														<td colSpan="20" className="tsection">{props.t(props,section.title)}</td>
													</tr>
												];
												section.features.forEach(feat => {
													ret.push(
														<tr className="tfeature">
															<td className="featureName">{props.t(props,feat.name)}</td>
															{
																feat.available.map(available =>(
																	<td>{
																		(available.length && available.length)>0?
																			available
																		:
																			available==true
																			?
																				<img style={{width:"16px"}} src="/medias/check-alt-green.png" alt="" />
																			:
																				""
																	}</td>
																))
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
