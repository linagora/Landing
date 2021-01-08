import Sharecalendar from "../../../components/shareCalendar";
import SynchCalendar from "../../../components/synchCalendar";
import MailInvitationCalendar from "../../../components/mailInvitationCalendar";
import DeadlineCalendar from "../../../components/deadlineCalendar";
import Layout from "../../../components/layout/layout";
import { withTranslation } from "../../../i18n";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Calendar = props => {
  React.useEffect(() => {
		window.analytics.page({
			name: "Calendar",
			category: "Product",
		});
  });
  return(
  <Layout page="productCalendar">
    <div className="container-fluid" id="product">
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subline">{props.t(props, "discover")}</div>
              <div className="line">
                <h1>
                  <span className="highlight highlightWithBackground">
                    {props.t(props, "calendar1")}
                  </span>{" "}
                  {props.t(props, "calendar2")}
                </h1>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="linkBlock">
                <div className="linkInsideBlock">
                  <a
                    href={"/" + props.getLang(props) + "/" + "product/chat"}
                    className="demoTitle "
                  >
                    {props.t(props, "chat")}
                  </a>
                  <a
                    href={"/" + props.getLang(props) + "/" + "product/calendar"}
                    className="demoTitle demoTitleSelected"
                  >
                    {props.t(props, "calendar")}
                  </a>
                  <a
                    href={"/" + props.getLang(props) + "/" + "product/drive"}
                    className="demoTitle"
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
                          {props.t(props, "calendar-calendars")}
                        </Tooltip>
                      }
                    >
                      <div
                        className="roundDemo"
                        style={{ left: "88%", top: "46.8%" }}
                      ></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      delay={{ show: 50, hide: 400 }}
                      placement="top"
                      overlay={
                        <Tooltip>{props.t(props, "calendar-export")}</Tooltip>
                      }
                    >
                      <div
                        className="roundDemo"
                        style={{ left: "98.7%", top: "46.8%" }}
                      ></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      delay={{ show: 50, hide: 400 }}
                      placement="top"
                      overlay={
                        <Tooltip>{props.t(props, "calendar-team")}</Tooltip>
                      }
                    >
                      <div
                        className="roundDemo"
                        style={{ left: "83.5%", top: "79.1%" }}
                      ></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      delay={{ show: 50, hide: 400 }}
                      placement="top"
                      overlay={
                        <Tooltip>{props.t(props, "calendar-view")}</Tooltip>
                      }
                    >
                      <div
                        className="roundDemo"
                        style={{ left: "40%", top: "14.4%" }}
                      ></div>
                    </OverlayTrigger>
                    <img
                      src="/medias/features/calendar.jpg"
                      className="demoImg demoImgSelected"
                      alt="Calendar"
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
              <div className="col-lg-6 colWithPaddingBottom featuresCol">
                <div className="squareBackground">
                  <Sharecalendar />
                  <div className="titleSquare">
                    {props.t(props, "sharedCalendar")}
                  </div>
                  <div className="descriptionSquare">
                    {props.t(props, "sharedCalendarSub")}
                  </div>
                </div>
                <div className="squareBackground">
                  <SynchCalendar />
                  <div className="titleSquare">
                    {props.t(props, "synchCalendar")}
                  </div>
                  <div className="descriptionSquare">
                    {props.t(props, "synchCalendarSub")}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 colWithPaddingBottom featuresCol">
                <div className="squareBackground">
                  <MailInvitationCalendar />

                  <div className="titleSquare">
                    {props.t(props, "sendMail")}
                  </div>
                  <div className="descriptionSquare">
                    {props.t(props, "sendMailSub")}
                  </div>
                </div>
                <div className="squareBackground" style={{ flex: 1 }}>
                  <div style={{ flex: "1", display: "flex" }}>
                    <div style={{ width: "100%", margin: "auto" }}>
                      <DeadlineCalendar />
                    </div>
                  </div>
                  <div className="">
                    <div className="titleSquare">
                      {props.t(props, "visibility")}
                    </div>
                    <div className="descriptionSquare">
                      {props.t(props, "visibilitySub")}
                    </div>
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
}

Calendar.getInitialProps = async () => ({
  namespacesRequired: ["product"],
  locale: "en"
});

export default withTranslation(["product"])(Calendar);
