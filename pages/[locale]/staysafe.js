import { useState } from "react";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import { i18n, withTranslation } from "../../i18n";
import { Fork, Star } from 'react-github-buttons';

class StaySafe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  componentDidMount() {
		window.analytics.page({
			name: "StaySafe",
		})
  }

	openTwake(){
		setTimeout(()=>{
			document.location.href="https://beta.twake.app";
		},500);
	}
  render() {
    return (
      <Layout page="home">
        <div
          className="container-fluid staySafe"
          style={{ overflowX: "hidden" }}
          id="landing"
        >
          <section className="sectionWithScreen">
            <div className="container">
              <div className="row rowWithScreen">
                <div className="col-lg-6">
                  <div className="colTitle">
                    <h1 className="title ">
                      {this.props.t(this.props, "staysafe-title")}
                    </h1>
                    <div className="subtitle ">
                      {this.props.t(this.props, "staysafe-subtitle")}
                    </div>
                    <div className="btnBloc">
                      <a
                        id="submitFormButtonForCapterra"
                        href="https://beta.twake.app"
                        className="btn btn-purple"
                      >
                        {this.props.t(this.props, "staysafe-signInForFree")}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 my-auto">
                  <img
                    className="imgScreen placeholderImage"
                    src="/medias/staysafe.png"
                    alt="Twake Messages"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="sectionWithScreen">
            <div className="container">
              <div className="row rowWithScreen">
                <div className="col-lg-6 my-auto">
                  <img
                    className="imgScreen placeholderImage"
										style={{}}
                    src="/medias/curve.png"
                    alt="Twake Messages"
                  />
                </div>
								<div className="col-lg-6">
									<div className="colTitle">
										<h1 className="title ">
											{this.props.t(this.props, "staysafe-helptitle")}
										</h1>
										<div className="subtitle ">
											{this.props.t(this.props, "staysafe-helpsubtitle")}
										</div>
										<div className="" style={{display:"flex",marginTop:"16px",cursor: "pointer"}}>
											<div className="my-auto" >
												<input type="checkbox" checked={this.state.checked} onChange={this.openTwake}id="staySafeCheckbox"/>
											</div>
											<div className="" style={{flex:"1",marginLeft:"8px"}} onClick={()=>{this.setState({checked:true});this.openTwake()}}>
												{this.props.t(this.props,"staySafe-agreement")}
											</div>
										</div>
									</div>
								</div>
              </div>
            </div>
          </section>
          <section className="desktop-60-top">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-12 subline"
                  style={{ textTransform: "uppercase" }}
                >
                  {this.props.t(this.props, "goFar")}
                </div>
                <div className="col-lg-12 line">
                  {this.props.t(this.props, "adaptedSolution1")}{" "}
                  <div className="highlight">
                    {this.props.t(this.props, "adaptedSolution2")}
                  </div>
                </div>
              </div>
              <div className="row align-items-center desktop-60-top">
                <div className="col-lg-6">
                  <h2>{this.props.t(this.props, "allinone")}</h2>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: this.props.t(this.props, "allinone_desc")
                    }}
                  ></div>
                  <div className="startFree">
                    <a href="#">
                      {this.props.t(this.props, "startForFree")}
                      <img
                        src="/medias/right.png"
                        style={{ width: "12px", marginLeft: "8px" }}
                        alt="right"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6" style={{ marginTop: "40px" }}>
                  <iframe
                    src="/medias/features/all_in_one_image.html"
                    style={{
                      width: "653px",
                      height: "430px",
                      border: "0",
                      maxWidth: "90vw",
                      maxHeight: "75vw"
                    }}
                  >
                  </iframe>
                </div>
              </div>
              <div className="row align-items-center desktop-100-top">
                <div className="col-lg-6 nomobile">
                  <iframe
                    src="/medias/features/telework.html"
                    style={{
                      marginLeft: "-150px",
                      marginBottom: "-70px",
                      width: "653px",
                      height: "340px",
                      border: "0",
                      maxWidth: "90vw",
                      maxHeight: "75vw"
                    }}
                  >
                  </iframe>
                </div>
                <div className="col-lg-6 d-lg-block">
                  <h2>{this.props.t(this.props, "collaborators")}</h2>
                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: this.props.t(this.props, "collaborators_desc")
                    }}
                  ></div>
                  <div className="startFree">
                    <a href="#">
                      {this.props.t(this.props, "startProject")}
                      <img
                        src="/medias/right.png"
                        style={{ width: "12px", marginLeft: "8px" }}
                        alt="right"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12 subline colWithPaddingTop">
                  {this.props.t(this.props, "discover")}
                </div>
                <div className="col-lg-12 line">
                  <div className="highlight">
                    {this.props.t(this.props, "oneTool1")}
                  </div>{" "}
                  {this.props.t(this.props, "oneTool2")}
                </div>
              </div>
              <div className="row desktop-60-top">
                <div className="col-lg-6 featuresCol">
                  <div className="squareBackground">
                    <div className="oval1">
                      <div className="oval2">
                        <img className="man" alt="men" src="/medias/man.png" />
                        <div className="greenDot"></div>
                      </div>
                    </div>
                    <div className="titleSquare">
                      {this.props.t(this.props, "call")}
                    </div>
                    <div className="descriptionSquare">
                      {this.props.t(this.props, "callSub")}
                    </div>
                  </div>
                  <div
                    id="organize"
                    className="squareBackground"
                    style={{ flex: "1" }}
                  >
                    <img
                      src="/medias/features/landing_organize.svg"
                      style={{ marginTop: "20px", marginBottom: "20px" }}
                    />
                    <div className="titleSquare">
                      {this.props.t(this.props, "organize")}
                    </div>
                    <div className="descriptionSquare">
                      {this.props.t(this.props, "organizeSub")}
                    </div>
                  </div>
                  <div className="squareBackground">
                    <img
                      src="/medias/features/share_secure.svg"
                      style={{ marginTop: "40px", marginBottom: "20px" }}
                    />
                    <div className="titleSquare">
                      {this.props.t(this.props, "share")}
                    </div>
                    <div className="descriptionSquare">
                      {this.props.t(this.props, "shareSub")}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 featuresCol">
                  <div className="squareBackground">
                    <img src="/medias/features/landing_plan.svg" />
                    <div className="titleSquare">
                      {this.props.t(this.props, "plan")}
                    </div>
                    <div className="descriptionSquare">
                      {this.props.t(this.props, "planSub")}
                    </div>
                  </div>
                  <div className="squareBackground">
                    <img
                      src="/medias/features/office_edition_image.svg"
                      style={{ marginTop: "30px", marginBottom: "30px" }}
                    />
                    <div className="titleSquare">
                      {this.props.t(this.props, "editOnline")}
                    </div>
                    <div className="descriptionSquare">
                      {this.props.t(this.props, "editOnlineSub")}
                    </div>
                  </div>
                  <div
                    id="organize"
                    className="squareBackground"
                    style={{ flex: 1 }}
                  >
                    <img
                      src="/medias/features/GlobalSearch.svg"
                      style={{ marginTop: "10px", marginBottom: "10px" }}
                    />
                    <div className="titleSquare">
                      {this.props.t(this.props, "globalsearch")}
                    </div>
                    <div className="descriptionSquare">
                      {this.props.t(this.props, "globalsearchSub")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sectionWithLiteBackground">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="subline">
                    {this.props.t(this.props, "integrations")}
                  </div>
                  <div
                    className="col-lg-12 line"
                    style={{ marginBottom: "24px" }}
                  >
                    {this.props.t(this.props, "integrationsSub")}
                  </div>
                </div>
                <div
                  className="col-lg-6 offset-lg-3 textCenter"
                  dangerouslySetInnerHTML={{
                    __html: this.props.t(this.props, "integrationsDescription")
                  }}
                ></div>
                <div
                  className="col-lg-12 integration"
                  style={{ textAlign: "center", marginTop: "64px" }}
                >
                  <img src="/medias/features/integrations.svg" />
                </div>
              </div>
            </div>
          </section>
          {
					// 	<section className="sectionWithLiteBackground">
          //   <div className="container">
          //     <div className="row">
          //       <div className="col-lg-12">
          //         <div className="subline">
          //           {this.props.t(this.props, "review_are_important")}
          //         </div>
          //         <div
          //           className="col-lg-12 line"
          //           style={{ marginBottom: "24px" }}
          //         >
          //           {this.props.t(this.props, "review_title")}
          //         </div>
          //       </div>
          //       <div className="col-lg-12 offset-lg-0 textCenter row">
          //         {(
          //           Array.from(
          //             this.props.t(this.props, "reviews", {
          //               returnObjects: true
          //             })
          //           ) || []
          //         ).map(review => {
          //           return (
          //             <div className="col-lg-4 review_parent">
          //               <div className="review">
          //                 <div
          //                   className="review-head"
          //                   style={{
          //                     backgroundImage: "url('" + review.head + "')"
          //                   }}
          //                 ></div>
          //                 <div className="customer-title">
          //                   <div className="review-title">
          //                     {review.name}
          //                     <br />
          //                     <span className="company">{review.company}</span>
          //                   </div>
          //                 </div>
          //                 <div
          //                   className="review-text"
          //                   style={{ marginBottom: "8px" }}
          //                 >
          //                   {review.message}
          //                 </div>
          //                 {this.renderNote(review)}
          //               </div>
          //             </div>
          //           );
          //         })}
          //       </div>
          //     </div>
          //   </div>
          // </section>
				}
          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="subline">
                    {this.props.t(this.props, "security")}
                  </div>
                  <div
                    className="col-lg-12 line"
                    style={{ marginBottom: "24px" }}
                  >
                    {this.props.t(this.props, "securitySub")}
                  </div>
                </div>
                <div
                  className="col-lg-6 offset-lg-3 textCenter"
                  dangerouslySetInnerHTML={{
                    __html: this.props.t(this.props, "securityDescription")
                  }}
                />
                <div
                  className="col-lg-10 offset-lg-1 row"
                  style={{ marginTop: "60px" }}
                >
                  <div className="col-lg-3 textCenter securityInfo">
                    <img
                      src="/medias/secure/encrypted_data.svg"
                      alt="Encrypted Data"
                    />
                    <br />
                    <b>{this.props.t(this.props, "security_encrypted_data")}</b>
                    <br />
                    <span>
                      {this.props.t(this.props, "security_encrypted_data_desc")}
                    </span>
                  </div>
                  <div className="col-lg-3 textCenter securityInfo">
                    <img
                      src="/medias/secure/location.svg"
                      alt="Located in France"
                    />
                    <br />
                    <b>{this.props.t(this.props, "security_location")}</b>
                    <br />
                    <span>
                      {this.props.t(this.props, "security_location_desc")}
                    </span>
                  </div>
                  <div className="col-lg-3 textCenter securityInfo">
                    <img
                      src="/medias/secure/transfers.svg"
                      alt="Secure Transfers"
                    />
                    <br />
                    <b>{this.props.t(this.props, "security_transfers")}</b>
                    <br />
                    <span>
                      {this.props.t(this.props, "security_transfers_desc")}
                    </span>
                  </div>
                  <div className="col-lg-3 textCenter securityInfo">
                    <img
                      src="/medias/secure/onpremise.svg"
                      alt="On-premise Offers"
                    />
                    <br />
                    <b>{this.props.t(this.props, "security_onpremise")}</b>
                    <br />
                    <span>
                      {this.props.t(this.props, "security_onpremise_desc")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sectionWithLiteBackground">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="subline">
                    {this.props.t(this.props, "opensource")}
                  </div>
                  <div
                    className="col-lg-12 line"
                    style={{ marginBottom: "24px" }}
                  >
                    {this.props.t(this.props, "opensourceSub")}
                  </div>
                </div>
                <div
                  className="col-lg-6 offset-lg-3 textCenter"
                  dangerouslySetInnerHTML={{
                    __html: this.props.t(this.props, "opensourceDescription")
                  }}
                />
                <div className="col-lg-12" style={{textAlign:"center"}}>
                  <Star style={{display : "inline-block"}} owner='TwakeApp' repo='Twake' />
                  <Fork style={{display : "inline-block"}} owner='TwakeApp' repo='Twake' />
                </div>
              </div>
            </div>
          </section>
          <section className="everywhere">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 line">
                  {this.props.t(this.props, "available")}{" "}
                  <div className="highlight" style={{ display: "inline" }}>
                    {this.props.t(this.props, "available1")}
                  </div>
                </div>
                <div className="col-lg-4" style={{ marginTop: "64px" }}>
                  <div className="browser">
                    <div
                      style={{
                        width: "237px",
                        margin: "auto",
                        marginBottom: "25px",
                        textAlign: "center"
                      }}
                    >
                      <img
                        className="store"
                        src="/medias/plateform/app-store.svg"
                        alt=""
                      />
                      <img
                        className="store"
                        src="/medias/plateform/playstore.png"
                        alt=""
                      />
                    </div>
                    <div className="textEverywhere">
                      {this.props.t(this.props, "mobileApp")}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4" style={{ marginTop: "64px" }}>
                  <div className="browser">
                    <div
                      style={{
                        width: "237px",
                        margin: "auto",
                        marginBottom: "25px",
                        textAlign: "center"
                      }}
                    >
                      <img
                        className="store"
                        src="/medias/plateform/safari.png"
                        alt=""
                      />
                      <img
                        className="store"
                        src="/medias/plateform/firefox.png"
                        alt=""
                      />
                      <img
                        className="store"
                        src="/medias/plateform/chrome.png"
                        alt=""
                      />
                      <img
                        className="store"
                        src="/medias/plateform/edge.png"
                        alt=""
                      />
                    </div>
                    <div className="textEverywhere">
                      {this.props.t(this.props, "webApp")}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4" style={{ marginTop: "64px" }}>
                  <div className="desktop">
                    <div
                      style={{
                        width: "177px",
                        margin: "auto",
                        marginBottom: "25px",
                        textAlign: "center"
                      }}
                    >
                      <img
                        className="store"
                        src="/medias/plateform/mac.png"
                        alt=""
                      />
                      <img
                        className="store"
                        src="/medias/plateform/linux.png"
                        alt=""
                      />
                      <img
                        className="store"
                        src="/medias/plateform/windows.png"
                        alt=""
                      />
                    </div>
                    <div className="textEverywhere">
                      {this.props.t(this.props, "desktopApp")}
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

StaySafe.getInitialProps = async () => ({
  namespacesRequired: ["landing"],
  locale: "en"
});

export default withTranslation(["landing"])(StaySafe);
