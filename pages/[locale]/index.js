import { useState } from "react";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import { i18n, withTranslation } from "../../i18n";
import { Fork, Star } from 'react-github-buttons';
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import TasksPlayer from "../../components/reactTasksPlayer";
import ChannelsPlayer from "../../components/reactChannelsPlayer";
import CalendarPlayer from "../../components/reactCalendarPlayer";
import FilePlayer from "../../components/reactFilePlayer";
import { Modal } from "react-responsive-modal";
import { Tabs, Tab, Panel } from '@bumaga/tabs';
import { AiOutlineDown, AiFillPlayCircle } from 'react-icons/ai';
import ModalVideo from 'react-modal-video';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousselImg: 0,
      open: false,
      open1: true,
      open2: false,
      open3: false,
      open4: false,
			isOpen : false,
			openCalendar : false,
			openChat : false,
			openDocument : false,
			openTask : false,
    };
  }

  componentDidMount() {
    window.analytics.page({
			category: "Home",
			name: "Home",
		})
    // setInterval(() => {
    //   this.setState({ carousselImg: (this.state.carousselImg + 1) % 4 });
    // }, 5000);
  }

  renderNote(review) {
    let ret = [];
    for (let i = 1; i < 6; i++) {
      ret.push(
        <img
          src={
            "/medias/icons/star" +
            (i == parseInt(review.note) + 1 &&
            parseInt(review.note) != review.note
              ? "_semi_grey"
              : i > review.note
              ? "_grey"
              : "") +
            ".png"
          }
        />
      );
    }
    return ret;
  }

  render() {
    console.log(this.state);
    return (
      <Layout page="home">
        <div
          className="container-fluid"
          style={{ overflowX: "hidden" }}
          id="landing"
        >
          <section className="sectionWithScreen">
            <div className="container">
              <div className="row rowWithScreen">
                <div className="col-lg-6">
                  <div className="colTitle">
										<ModalVideo channel='youtube' autoplay isOpen={this.state.isOpen} videoId="WjWz5uaupXM" onClose={() => this.setState({isOpen:false})} />
                    <h1 className="title ">
                      {this.props.t(this.props, "ces-title")}
                    </h1>
                    <div className="subtitle ">
                      {this.props.t(this.props, "ces-subtitle")}<br/>
                      {this.props.t(this.props, "ces-subtitle2")}
                    </div>
                    <div className="btnBloc">
                      <a
                        id="submitFormButtonForCapterra"
                        href="https://console.twake.app/signup?plan=early-bird-offer-free-per-unit"
                        className="btn btn-purple"
												onClick={()=>{
													analytics.track('TryForFree_click',{
														from : "bigfirst_home"
													});
												}}
                      >
                        {this.props.t(this.props, "tryForFree")}
                      </a>
                      <a
                        className="discoverLink"
                        style={{ marginLeft: "16px",fontWeight:"500"}}
												onClick={()=>{
                          this.setState({isOpen:true})
                          analytics.track('LandingVideo_click',{
                            from : "home"
                          });
                        }}
                      >
                        {this.props.t(this.props, "discoverTwake")}
												<img
													style={{ marginLeft: "8px" }}
                          className="icon"
                          src="/medias/arrow-right.svg"
                          alt="download"
                        />
                      </a>
                    </div>
                    <div className="customers d-none d-lg-block">
											<Star style={{display : "inline-block"}} owner='TwakeApp' repo='Twake' />
											<Fork style={{display : "inline-block"}} owner='TwakeApp' repo='Twake' />
                    </div>
										{/* <a href="#GT4G" className="gtfgHeaderLink"><div className="gtfgHeader">#GOODTECH4GOOD</div></a> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div style={{ position: "relative" }}>
                    <img
                      className="imgScreen placeholderImage carousselImgViewed overview"
                      src="/medias/whatistwake.png"
                      alt="Twake Messages"
											onClick={()=>this.setState({isOpen : true})}
                    />

                    {/*
											<img
												className="playCircle"
												src="/medias/play.svg"
												/>
											<img
                      className={
                        "imgScreen caroussel " +
                        (this.state.carousselImg == 0
                          ? "carousselImgViewed"
                          : "")
                      }
                      src="/medias/features/app_demo_2.jpg"
                      alt="Twake Tasks"
                    />
                    <img
                      className={
                        "imgScreen caroussel " +
                        (this.state.carousselImg == 1
                          ? "carousselImgViewed"
                          : "")
                      }
                      src="/medias/features/app_demo_3.jpg"
                      alt="Twake Documents"
                    />
                    <img
                      className={
                        "imgScreen caroussel " +
                        (this.state.carousselImg == 2
                          ? "carousselImgViewed"
                          : "")
                      }
                      src="/medias/features/app_demo_4.jpg"
                      alt="Twake Calendar"
                    />
                    <img
                      className={
                        "imgScreen caroussel " +
                        (this.state.carousselImg == 3
                          ? "carousselImgViewed"
                          : "")
                      }
                      src="/medias/features/app_demo_1.jpg"
                      alt="Twake Messages"
                    />*/}
                  </div>
                </div>
                <div className="col-lg-6 d-visible d-lg-none">
                  <div className="customers center">
										<Star style={{display : "inline-block"}} owner='TwakeApp' repo='Twake' />
										<Fork style={{display : "inline-block"}} owner='TwakeApp' repo='Twake' />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row rowWithScreen">
                  <div className="col-lg-5">
                    <h1 className="title ">
                      {this.props.t(this.props, "team-collaboration")}
                    </h1>
                    <div className="subtitle " style={{marginBottom:"24px"}}>
                      {this.props.t(this.props, "team-collaboration-desc")}
                    </div>
                    <div className="">
                          <Accordion defaultActiveKey="0">
                              <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className={"accordion-header " + (this.state.open1 ? "active-accordion" : "disabled-accordion")}
                                  onClick={() => this.setState({ open1: true, open2: false, open3: false, open4: false })}>
                                    <h4 className="pull-left">
                                      {this.props.t(this.props, "tasks-accordion-title")}
                                    </h4>
                                  <a onClick={(e)=>{this.setState({openTask:true});e.preventDefault();e.stopPropagation();}} className="pull-right more-videos">{this.props.t(this.props, "more-on-tasks")} <AiFillPlayCircle /> </a>
                                  {!this.state.open1 && <img className="svgDown" src="/medias/arrow-down.svg"/>}
                                  <ModalVideo channel='youtube' autoplay isOpen={this.state.openTask} videoId="bgXWvjdk8ic" onClose={(e) => {this.setState({openTask:false});e.preventDefault();e.stopPropagation();}} />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>{this.props.t(this.props, "tasks-accordion-title-desc")}</Card.Body>
                                </Accordion.Collapse>
                              </Card>
                              <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="1" className={"accordion-header " + (this.state.open2 ? "active-accordion" : "disabled-accordion")}
                                onClick={() => this.setState({ open1: false, open2: true, open3: false, open4: false })}>
                                <h4 className="pull-left">
                                    {this.props.t(this.props, "channels-accordion-title")}
                                  </h4>

                                <a onClick={()=>this.setState({openChannel:true})} className="pull-right more-videos">
                                  <div style={{display:"inline-block",marginRight:"4px"}}>
                                    {this.props.t(this.props, "more-on-channels")}
                                  </div> 
                                  <AiFillPlayCircle /></a>
                                  {!this.state.open2 && <img className="svgDown" src="/medias/arrow-down.svg"/>}
                                  <ModalVideo channel='youtube' autoplay isOpen={this.state.openChannel} videoId="Yl98t9rzaII" onClose={() => this.setState({openChannel:false})} />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                  <Card.Body>{this.props.t(this.props, "channels-accordion-title-desc")}</Card.Body>
                                </Accordion.Collapse>
                              </Card>
                              <Card>
                              <Accordion.Toggle as={Card.Header} eventKey="2" className={"accordion-header " + (this.state.open3 ? "active-accordion" : "disabled-accordion")}
                                onClick={() => this.setState({ open1: false, open2: false, open3: true, open4: false })}>
                                <h4 className="pull-left">
                                    {this.props.t(this.props, "calendar-accordion-title")}
                                  </h4>

                                <a onClick={()=>this.setState({openCalendar:true})} className="pull-right more-videos">{this.props.t(this.props, "more-on-calendar")} <AiFillPlayCircle /></a>
                                {!this.state.open3 && <img className="svgDown" src="/medias/arrow-down.svg"/>}
                                  <ModalVideo channel='youtube' autoplay isOpen={this.state.openCalendar} videoId="k0-3xHGQRXA" onClose={() => this.setState({openCalendar:false})} />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                  <Card.Body>{this.props.t(this.props, "calendar-accordion-title-desc")}</Card.Body>
                                </Accordion.Collapse>
                              </Card>
                              <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3" className={"accordion-header " + (this.state.open4 ? "active-accordion" : "disabled-accordion")}
                                  onClick={() => this.setState({ open1: false, open2: false, open3: false, open4: true })}>
                                  <h4 className="pull-left">
                                      {this.props.t(this.props, "file-storage-accordion-title")}
                                    </h4>
                                  <a onClick={()=>this.setState({openDocument:true})} className="pull-right more-videos">{this.props.t(this.props, "more-on-storage")} <AiFillPlayCircle /></a>
                                  {!this.state.open4 && <img className="svgDown" src="/medias/arrow-down.svg"/>}
                                  <ModalVideo channel='youtube' autoplay isOpen={this.state.openDocument} videoId="2IbmJc9KdQA" onClose={() => this.setState({openDocument:false})} />
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey="3">
                                    <Card.Body>{this.props.t(this.props, "file-storage-accordion-title-desc")}</Card.Body>
                                  </Accordion.Collapse>
                              </Card>
                          </Accordion>
                      </div>
                  </div>
                  <div className="col-lg-5 pics-tabs offset-lg-1" style={{}}>
                      <img
                        src="/medias/features/app_demo_2.jpg"
                        alt="Twake Messages"
                        onClick={(e)=>{this.setState({openTask:true});e.preventDefault();e.stopPropagation();}}
                        className={this.state.open1?"":"hide"}
                      />
                      <img
                        src="/medias/features/app_demo_1.jpg"
                        alt="Twake Messages"
                        onClick={(e)=>{this.setState({openChat:true});e.preventDefault();e.stopPropagation();}}
                        className={this.state.open2?"":"hide"}
                      />
                      <img
                        src="/medias/features/app_demo_4.jpg"
                        alt="Twake Messages"
                        onClick={(e)=>{this.setState({openCalendar:true});e.preventDefault();e.stopPropagation();}}
                        className={this.state.open3?"":"hide"}
                      /><img
                        src="/medias/features/app_demo_3.jpg"
                        alt="Twake Messages"
                        onClick={(e)=>{this.setState({openDocument:true});e.preventDefault();e.stopPropagation();}}
                        className={this.state.open4?"":"hide"}
                      />
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
                  <a href="https://console.twake.app/signup?plan=early-bird-offer-free-per-unit"
										onClick={()=>{
											analytics.track('TryForFree_click',{
												from : "tryforfree1_home"
											});
										}}>
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
                    <img src="/medias/features/all_in_one_image.svg" />
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
                    <img src="/medias/features/telework.svg" />
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
                    <a href="https://console.twake.app/signup?plan=early-bird-offer-free-per-unit"
                        onClick={()=>{
                          analytics.track('TryForFree_click',{
                            from : "tryforfree2_home"
                          });
                      }}
                      >
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
          <section >
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

					{/* <section className="sectionWithLiteBackground" id="GT4G" style={{backgroundImage : "linear-gradient(#f5fff4, #f5fff494)"}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="subline" style={{color:"var(--greenNature)"}}>
                    {this.props.t(this.props, "goodtech4good")}
                  </div>
                  <div
                    className="col-lg-12 line"
                    style={{ marginBottom: "24px" }}
                  >
                    {this.props.t(this.props, "goodtech4goodSub")}
                  </div>
                </div>
							</div>
							<div className="row">
								<div className="col-lg-3 textCenter gt4gCardContainer">
									<div className="gt4gCard">
										<img src="/medias/un_sdg.png"  className="imgGtfg" />
											<div className="titleCard">{this.props.t(this.props, "gt4g1Title")}</div>
											<div className="descriptionCard">{this.props.t(this.props, "gt4g1Description")}</div>
										</div>
									</div>
								<div className="col-lg-3 textCenter gt4gCardContainer" >
									<div className="gt4gCard">
										<img src="/medias/Bcorp.png"  className="imgGtfg"/>
										<div className="titleCard">{this.props.t(this.props, "gt4g2Title")}</div>
										<div className="descriptionCard">{this.props.t(this.props, "gt4g2Description")}</div>
									</div>
								</div>
								<div className="col-lg-3 textCenter gt4gCardContainer" >
									<div className="gt4gCard">
										<img src="/medias/tfg.png" className="imgGtfg" />
										<div className="titleCard">{this.props.t(this.props, "gt4g3Title")}</div>
										<div className="descriptionCard">{this.props.t(this.props, "gt4g3Description")}</div>
										</div>
								</div>
								<div className="col-lg-3 textCenter gt4gCardContainer" >
									<div className="gt4gCard">
										<img src="/medias/carbonnegative.png" className="imgGtfg"/>
										<div className="titleCard">{this.props.t(this.props, "gt4g4Title")}</div>
										<div className="descriptionCard">{this.props.t(this.props, "gt4g4Description")}</div>
									</div>
								</div>
              </div>
            </div>
          </section> */}
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
                      {"Coming soon" /* this.props.t(this.props, "mobileApp") */}
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

Home.getInitialProps = async () => ({
  namespacesRequired: ["landing"],
  locale: "en"
});

export default withTranslation(["landing"])(Home);
