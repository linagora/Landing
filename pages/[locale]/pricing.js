import { withTranslation } from "../../i18n";
import Layout from "../../components/layout/layout";
import { useState } from "react";

const Pricing = (props) => {
  let [open1, setOpen1] = useState(false);
  let [open2, setOpen2] = useState(false);
  let [open3, setOpen3] = useState(false);
  let [open4, setOpen4] = useState(false);
  let [open5, setOpen5] = useState(false);

	let plans = {
		saas : [
			"free",
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
				title: "Pricing",
				features : [
					{
						name : "",
						available : [props.t(props,"free"),'<span style="text-decoration:line-through;margin-right:8px">4.19 €</span>2.99 €',"10.39 €","Contact Sales"]
					}
				],
			},
			{
				title : "features",
				features : [
					{
						name : "chat",
						available : [true,true,true,true],
					},
					{
						name : "drive",
						available : ["6 GB " +props.t(props,"peruser"),"11 GB "+props.t(props,"peruser"),"25 GB " +props.t(props,"peruser"),"1 TB " +props.t(props,"peruser")]
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
						name : "video",
						available : [props.t(props,"comingsoon"),props.t(props,"comingsoon"),true,true],
					},
					{
						name : "office",
						available : [props.t(props,"comingsoon"),props.t(props,"comingsoon"),true,true],
					},
					{
						name : "guest",
						available : [true,true,true,true],
					},
					{
						name : "email",
						available : ["",props.t(props,"comingsoon"),true,true],
					},
				],
			},
			{
				title : "privacy",
				features : [
					{
						name : "strongpasswordpolicy",
						available : [props.t(props,"comingsoon"),props.t(props,"comingsoon"),true,true],
					},
					{
						name : "2fa",
						available : [props.t(props,"comingsoon"),props.t(props,"comingsoon"),props.t(props,"comingsoon"),props.t(props,"comingsoon")],
					},
					{
						name : "ssoauthentification",
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
						available : [false,true,true,true],
					},
					{
						name : "fileEncryption",
						available : [true,true,true,true],

					},
					{
						name : "advancedSecurity",
						available : [false,true,true,true],
					},
					{
						name : "deviceManagement",
						available : [false,true,true,true],
					}
				]
			},
			{
				title : "support",
				features : [
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
						available : [false,true,true,true],
					},
					{
						name : "inPerson",
						available : [false,true,true,true],
					},
					{
						name : "99uptime",
						available : [false,true,true,true],
					},
					{
						name : "accountTeam",
						available : [false,false,false,true],
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

  React.useEffect(() => {
	window.analytics.page({
	  category: "Pricing",
	  name: "Pricing",
	});
});
  return (
    <Layout page="pricingTitle">
      <div className="container-fluid" id="pricing" className="ces">
        <section className="sectionWithScreen">
          <div className="container">
            <div className="rowWithGradientBackground">
              <h1 className="subline">{props.t(props, "ces.dealrefuse")}</h1>
              <div className="col-lg-12 row" style={{ paddingTop: "32px" }}>
					<div className="col-lg-5 col-md-12">
						<div className="tittleOffer line" style={{"text-align" : "left", marginBottom:"12px"}}>
							{props.t(props, "cesoffer.join1")}
						</div>
						<div className="" style={{marginBottom:"8px"}}>
							{props.t(props, "cesoffer.join2")}
						</div>
						<div className="" style={{marginBottom:"8px"}}>
							{props.t(props, "cesoffer.join3")}
						</div>
						<a
						href="https://console.twake.app/signup?plan=early-bird-offer-free-per-unit"
						className="discoverLink"
						style={{ fontWeight:"500"}}
						onClick = {()=>{
							analytics.track('TryForFree_click',{
								from : "Pricing_join1"
							});
						}}

                      >
                        {props.t(props, "cesoffer.joinus")}
					<img
						style={{ marginLeft: "8px" }}
                          className="icon"
                          src="/medias/arrow-right.svg"
                          alt="join us"
                        />
                      </a>
					</div>
					<div className="pricingBlock col-lg-5 offset-lg-2 offset-md-2 col-md-8">
						<div className="titlePlan">
							{props.t(props, "cesoffer.titleoffer")}
						</div>
						<div className="divider"></div>
						<div className="dividertag">Early Bird</div>
						<div className="pricingAmount"><span className="lined">4.19€</span>2.99€<span style={{fontWeight:"400",fontSize:"14px"}}>{props.t(props,"byUserByMonth")}</span></div>
						{/* <div className="feature"><img src="/medias/check-alt-green.png" alt=""/><div className="nameFeature">{props.t(props,"cesoffer.av1")}</div></div> */}
						<div className="feature"><img src="/medias/check-alt-green.png" alt=""/><div className="nameFeature">{props.t(props,"cesoffer.av2")}</div></div>
						<div className="feature"><img src="/medias/check-alt-green.png" alt=""/><div className="nameFeature">{props.t(props,"cesoffer.av3")}</div></div>
						<div className="feature"><img src="/medias/check-alt-green.png" alt=""/><div className="nameFeature">{props.t(props,"cesoffer.av4")}</div></div>
						<a
							href="https://console.twake.app/signup?plan=early-bird-offer-free-per-unit"
							className="btn btn-purple"
							style={{ width: "100%", padding: "8px 8px",marginTop:"24px" }}
							onClick = {()=>{
								analytics.track('TryForFree_click',{
									from : "Pricing_join2"
								});
							}}
						>
							{props.t(props, "cesoffer.joinfamily")}
						</a>
					</div>
              </div>
            </div>
          </div>
        </section>
				<section className="pricing-compare">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 faqcol">
	              <div className="line">{props.t(props, "cesoffer.compare")}</div>
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
																	<td style={{verticalAlign:"middle"}}>{
																		(available.length && available.length)>0?
																			<span dangerouslySetInnerHTML={{__html:available}}></span>
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
												/*ret.push(
													<tr colSpan="20" className="emptyTr"><td className="" style={{border: "none",height:"54px"}}></td></tr>
												)*/
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
                          width: "16px",
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
                          width: "16px",
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
                          width: "16px",
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
                          width: "16px",
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
  locale: "en",
});

export default withTranslation(["pricing"])(Pricing);
