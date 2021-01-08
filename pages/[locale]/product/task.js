import TodolistGlobal from "../../../components/todolistGlobal";
import TeamTask from "../../../components/taskTeam";
import DeadlineCalendar from "../../../components/deadlineCalendar";
import Layout from "../../../components/layout/layout";
import { withTranslation } from "../../../i18n";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Task = props => {
  React.useEffect(() => {
		window.analytics.page({
			name: "Task",
			category: "Product",
		});
	});
  return(
  <Layout page="productTask">
    <div className="container-fluid" id="product">
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subline">{props.t(props, "discover")}</div>
              <div className="line">
                <h1>
                  <span className="highlight highlightWithBackground">
                    {props.t(props, "task1")}
                  </span>{" "}
                  {props.t(props, "task2")}
                </h1>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="linkBlock taskSelected">
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
                    className="demoTitle"
                  >
                    {props.t(props, "document")}
                  </a>
                  <a
                    href={"/" + props.getLang(props) + "/" + "product/task"}
                    className="demoTitle demoTitleSelected"
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
                          {props.t(props, "tasks-features-general")}
                        </Tooltip>
                      }
                    >
                      <div
                        className="roundDemo"
                        style={{ left: "27%", top: "3.2%" }}
                      ></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      delay={{ show: 50, hide: 400 }}
                      placement="top"
                      overlay={
                        <Tooltip>
                          {props.t(props, "tasks-features-task")}
                        </Tooltip>
                      }
                    >
                      <div
                        className="roundDemo"
                        style={{ left: "40%", top: "24.5%" }}
                      ></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      delay={{ show: 50, hide: 400 }}
                      placement="top"
                      overlay={
                        <Tooltip>
                          {props.t(props, "tasks-features-list")}
                        </Tooltip>
                      }
                    >
                      <div
                        className="roundDemo"
                        style={{ left: "67.5%", top: "17.5%" }}
                      ></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      delay={{ show: 50, hide: 400 }}
                      placement="top"
                      overlay={
                        <Tooltip>
                          {props.t(props, "tasks-features-views")}
                        </Tooltip>
                      }
                    >
                      <div
                        className="roundDemo"
                        style={{ left: "96.5%", top: "15.6%" }}
                      ></div>
                    </OverlayTrigger>
                    <img
                      src="/medias/features/task.jpg"
                      className="demoImg demoImgSelected"
                      alt="Task"
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
              <div className="col-lg-6 featuresCol">
                <div className="squareBackground">
                  <div style={{ flex: "1", display: "flex" }}>
                    <div style={{ margin: "auto", width: "100%" }}>
                      <TodolistGlobal />
                    </div>
                  </div>
                  <div className="titleSquare">
                    {props.t(props, "todolist")}
                  </div>
                  <div className="descriptionSquare">
                    {props.t(props, "todolistSub")}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 featuresCol">
                <div className="squareBackground" style={{ flex: "1" }}>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <div style={{ margin: "auto", width: "100%" }}>
                      <TeamTask />
                    </div>
                    <div className="titleSquare">
                      {props.t(props, "teamTask")}
                    </div>
                    <div className="descriptionSquare">
                      {props.t(props, "teamTaskSub")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="squareBackground">
                  <DeadlineCalendar />
                  <div className="titleSquare">
                    {props.t(props, "deadlineCalendar")}
                  </div>
                  <div className="descriptionSquare">
                    {props.t(props, "deadlineCalendarSub")}
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

Task.getInitialProps = async () => ({
  namespacesRequired: ["product"],
  locale: "en"
});

export default withTranslation(["product"])(Task);
