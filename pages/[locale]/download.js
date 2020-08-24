import { withTranslation } from "../../i18n";
import Layout from "../../components/layout/layout";
import { useEffect, useState } from "react";

const Download = props => {
  let [os, setOs] = useState("");
  useEffect(() => {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
      windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
      iosPlatforms = ["iPhone", "iPad", "iPod"],
      currentOs = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
      currentOs = "Mac";
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      currentOs = "iPhone";
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      currentOs = "Windows";
    } else if (/Android/.test(userAgent)) {
      currentOs = "Android";
    } else if (!os && /Linux/.test(platform)) {
      currentOs = "Linux";
    }
    setOs(currentOs);
  }, []);
  const nameMac = "twake-mac-latest.dmg";
  const nameWindow = "twake-win-latest.exe";
  const nameLinux = "twake-lin-latest.tar.gz";

  return (
    <Layout page="downloadTitle">
      <div
        className="container-fluid"
        style={{ overflowX: "hidden" }}
        id="downloadPage"
      >
        <section className="sectionWithScreen">
          <div className="container">
            <div className="row rowWithScreen">
              <div className="col-lg-6">
                <div className="colTitle">
                  <h1 className="title ">{props.t(props, "downloadTitle")}</h1>
                  <div className="subtitle ">
                    {props.t(props, "downloadSubtitle")}
                  </div>
                  {os == "Mac" && (
                    <div className="btnBloc">
                      <a
                        id="submitFormButtonForCapterra"
                        href={"https://public-medias-downloads.s3.eu-west-3.amazonaws.com/desktop/" + nameMac}
                        className="btn btn-purple"
                        rel="nofollow"
                        target="_blank"
                      >
                        <svg
                          style={{ marginRight: "8px", marginTop: "-2px" }}
                          width="16px"
                          height="16px"
                          viewBox="0 0 16 16"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="Web---Desktop"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              id="001_landing"
                              transform="translate(-395.000000, -477.000000)"
                            >
                              <rect
                                fill="#none"
                                x="0"
                                y="0"
                                width="1440"
                                height="5967"
                              ></rect>
                              <g
                                id="Hero"
                                transform="translate(136.000000, 229.000000)"
                                fill="#FFFFFF"
                              >
                                <g
                                  id="CTA"
                                  transform="translate(0.000000, 232.000000)"
                                >
                                  <g
                                    id="Télécharger"
                                    transform="translate(243.000000, 0.000000)"
                                  >
                                    <g
                                      id="Icon-/-download"
                                      transform="translate(16.000000, 16.000000)"
                                    >
                                      <path
                                        d="M15.2,9.6 C14.7581722,9.6 14.4,9.9581722 14.4,10.4 L14.4,13.6 C14.4,14.0418278 14.0418278,14.4 13.6,14.4 L2.4,14.4 C1.9581722,14.4 1.6,14.0418278 1.6,13.6 L1.6,10.4 C1.6,9.9581722 1.2418278,9.6 0.8,9.6 C0.3581722,9.6 0,9.9581722 0,10.4 L0,13.6 C0,14.9254834 1.0745166,16 2.4,16 L13.6,16 C14.9254834,16 16,14.9254834 16,13.6 L16,10.4 C16,9.9581722 15.6418278,9.6 15.2,9.6 Z M7.432,10.968 C7.50808297,11.0408325 7.59779895,11.0979245 7.696,11.136 C7.8896319,11.2215814 8.1103681,11.2215814 8.304,11.136 C8.40220105,11.0979245 8.49191703,11.0408325 8.568,10.968 L11.768,7.768 C12.0816977,7.45430226 12.0816977,6.94569774 11.768,6.63200001 C11.4543023,6.31830227 10.9456977,6.31830227 10.632,6.632 L8.8,8.472 L8.8,0.8 C8.8,0.3581722 8.4418278,0 8,0 C7.5581722,0 7.2,0.3581722 7.2,0.8 L7.2,8.472 L5.368,6.632 C5.16507315,6.42907313 4.86930081,6.34982117 4.59209756,6.42409755 C4.31489432,6.49837393 4.09837393,6.71489432 4.02409755,6.99209756 C3.94982117,7.26930081 4.02907313,7.56507315 4.232,7.768 L7.432,10.968 Z"
                                        id="Shape"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>{" "}
                        {props.t(props, "downloadFor") + " Mac OS"}
                      </a>
                      <a
                        id="submitFormButtonForCapterra"
                        className="otherLink i18n"
                        href={"https://public-medias-downloads.s3.eu-west-3.amazonaws.com/desktop/" + nameWindow}
                        rel="nofollow"
                        target="_blank"
                      >
                        Windows
                      </a>
                      <a
                        id="submitFormButtonForCapterra"
                        className="otherLink i18n"
                        href={"https://public-medias-downloads.s3.eu-west-3.amazonaws.com/desktop/" + nameLinux}
                        rel="nofollow"
                        target="_blank"
                      >
                        Linux
                      </a>
                    </div>
                  )}
                  {os == "Linux" && (
                    <div className="btnBloc">
                      <a
                        id="submitFormButtonForCapterra"
                        href={"https://public-medias-downloads.s3.eu-west-3.amazonaws.com/desktop/" + nameLinux}
                        rel="nofollow"
                        target="_blank"
                        className="btn btn-purple"
                      >
                        <svg
                          style={{ marginRight: "8px", marginTop: "-2px" }}
                          width="16px"
                          height="16px"
                          viewBox="0 0 16 16"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="Web---Desktop"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              id="001_landing"
                              transform="translate(-395.000000, -477.000000)"
                            >
                              <rect
                                fill="none"
                                x="0"
                                y="0"
                                width="1440"
                                height="5967"
                              ></rect>
                              <g
                                id="Hero"
                                transform="translate(136.000000, 229.000000)"
                                fill="#FFFFFF"
                              >
                                <g
                                  id="CTA"
                                  transform="translate(0.000000, 232.000000)"
                                >
                                  <g
                                    id="Télécharger"
                                    transform="translate(243.000000, 0.000000)"
                                  >
                                    <g
                                      id="Icon-/-download"
                                      transform="translate(16.000000, 16.000000)"
                                    >
                                      <path
                                        d="M15.2,9.6 C14.7581722,9.6 14.4,9.9581722 14.4,10.4 L14.4,13.6 C14.4,14.0418278 14.0418278,14.4 13.6,14.4 L2.4,14.4 C1.9581722,14.4 1.6,14.0418278 1.6,13.6 L1.6,10.4 C1.6,9.9581722 1.2418278,9.6 0.8,9.6 C0.3581722,9.6 0,9.9581722 0,10.4 L0,13.6 C0,14.9254834 1.0745166,16 2.4,16 L13.6,16 C14.9254834,16 16,14.9254834 16,13.6 L16,10.4 C16,9.9581722 15.6418278,9.6 15.2,9.6 Z M7.432,10.968 C7.50808297,11.0408325 7.59779895,11.0979245 7.696,11.136 C7.8896319,11.2215814 8.1103681,11.2215814 8.304,11.136 C8.40220105,11.0979245 8.49191703,11.0408325 8.568,10.968 L11.768,7.768 C12.0816977,7.45430226 12.0816977,6.94569774 11.768,6.63200001 C11.4543023,6.31830227 10.9456977,6.31830227 10.632,6.632 L8.8,8.472 L8.8,0.8 C8.8,0.3581722 8.4418278,0 8,0 C7.5581722,0 7.2,0.3581722 7.2,0.8 L7.2,8.472 L5.368,6.632 C5.16507315,6.42907313 4.86930081,6.34982117 4.59209756,6.42409755 C4.31489432,6.49837393 4.09837393,6.71489432 4.02409755,6.99209756 C3.94982117,7.26930081 4.02907313,7.56507315 4.232,7.768 L7.432,10.968 Z"
                                        id="Shape"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>{" "}
                        {props.t(props, "downloadFor") + " Linux"}
                      </a>
                      <a
                        id="submitFormButtonForCapterra"
                        className="otherLink i18n"
                        href={"https://public-medias-downloads.s3.eu-west-3.amazonaws.com/desktop/" + nameWindow}
                        rel="nofollow"
                        target="_blank"
                      >
                        Windows
                      </a>
                      <a
                        id="submitFormButtonForCapterra"
                        className="otherLink i18n"
                        href={"https://public-medias-downloads.s3.eu-west-3.amazonaws.com/desktop/" + nameMac}
                        rel="nofollow"
                        target="_blank"
                      >
                        Mac OS
                      </a>
                    </div>
                  )}
                  {os == "Windows" && (
                    <div className="btnBloc">
                      <a
                        id="submitFormButtonForCapterra"
                        href={"https://public-medias-downloads.s3.eu-west-3.amazonaws.com/desktop/" + nameWindow}
                        rel="nofollow"
                        target="_blank"
                        className="btn btn-purple"
                      >
                        <svg
                          style={{ marginRight: "8px", marginTop: "-2px" }}
                          width="16px"
                          height="16px"
                          viewBox="0 0 16 16"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="Web---Desktop"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              id="001_landing"
                              transform="translate(-395.000000, -477.000000)"
                            >
                              <rect
                                fill="none"
                                x="0"
                                y="0"
                                width="1440"
                                height="5967"
                              ></rect>
                              <g
                                id="Hero"
                                transform="translate(136.000000, 229.000000)"
                                fill="#FFFFFF"
                              >
                                <g
                                  id="CTA"
                                  transform="translate(0.000000, 232.000000)"
                                >
                                  <g
                                    id="Télécharger"
                                    transform="translate(243.000000, 0.000000)"
                                  >
                                    <g
                                      id="Icon-/-download"
                                      transform="translate(16.000000, 16.000000)"
                                    >
                                      <path
                                        d="M15.2,9.6 C14.7581722,9.6 14.4,9.9581722 14.4,10.4 L14.4,13.6 C14.4,14.0418278 14.0418278,14.4 13.6,14.4 L2.4,14.4 C1.9581722,14.4 1.6,14.0418278 1.6,13.6 L1.6,10.4 C1.6,9.9581722 1.2418278,9.6 0.8,9.6 C0.3581722,9.6 0,9.9581722 0,10.4 L0,13.6 C0,14.9254834 1.0745166,16 2.4,16 L13.6,16 C14.9254834,16 16,14.9254834 16,13.6 L16,10.4 C16,9.9581722 15.6418278,9.6 15.2,9.6 Z M7.432,10.968 C7.50808297,11.0408325 7.59779895,11.0979245 7.696,11.136 C7.8896319,11.2215814 8.1103681,11.2215814 8.304,11.136 C8.40220105,11.0979245 8.49191703,11.0408325 8.568,10.968 L11.768,7.768 C12.0816977,7.45430226 12.0816977,6.94569774 11.768,6.63200001 C11.4543023,6.31830227 10.9456977,6.31830227 10.632,6.632 L8.8,8.472 L8.8,0.8 C8.8,0.3581722 8.4418278,0 8,0 C7.5581722,0 7.2,0.3581722 7.2,0.8 L7.2,8.472 L5.368,6.632 C5.16507315,6.42907313 4.86930081,6.34982117 4.59209756,6.42409755 C4.31489432,6.49837393 4.09837393,6.71489432 4.02409755,6.99209756 C3.94982117,7.26930081 4.02907313,7.56507315 4.232,7.768 L7.432,10.968 Z"
                                        id="Shape"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>{" "}
                        {props.t(props, "downloadFor") + " Windows"}
                      </a>
                      <a
                        id="submitFormButtonForCapterra"
                        className="otherLink i18n"
                        href={"https://public-medias-downloads.s3.eu-west-3.amazonaws.com/desktop/" + nameMac}
                        rel="nofollow"
                        target="_blank"
                      >
                        Mac OS
                      </a>
                      <a
                        id="submitFormButtonForCapterra"
                        className="otherLink i18n"
                        href={"https://public-medias-downloads.s3.eu-west-3.amazonaws.com/desktop/" + nameLinux}
                        rel="nofollow"
                        target="_blank"
                      >
                        Linux
                      </a>
                    </div>
                  )}
                  {os == "iPhone" && (
                    <div className="btnBloc">
                      <a
                        href="https://apps.apple.com/us/app/twake/id1257653795?l=fr&ls=1"
                        rel="nofollow"
                        target="_blank"
                        className="btn btn-purple"
                      >
                        <svg
                          style={{ marginRight: "8px" }}
                          width="16px"
                          height="16px"
                          viewBox="0 0 16 16"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="Web---Desktop"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              id="001_landing"
                              transform="translate(-395.000000, -477.000000)"
                            >
                              <rect
                                fill="none"
                                x="0"
                                y="0"
                                width="1440"
                                height="5967"
                              ></rect>
                              <g
                                id="Hero"
                                transform="translate(136.000000, 229.000000)"
                                fill="#FFFFFF"
                              >
                                <g
                                  id="CTA"
                                  transform="translate(0.000000, 232.000000)"
                                >
                                  <g
                                    id="Télécharger"
                                    transform="translate(243.000000, 0.000000)"
                                  >
                                    <g
                                      id="Icon-/-download"
                                      transform="translate(16.000000, 16.000000)"
                                    >
                                      <path
                                        d="M15.2,9.6 C14.7581722,9.6 14.4,9.9581722 14.4,10.4 L14.4,13.6 C14.4,14.0418278 14.0418278,14.4 13.6,14.4 L2.4,14.4 C1.9581722,14.4 1.6,14.0418278 1.6,13.6 L1.6,10.4 C1.6,9.9581722 1.2418278,9.6 0.8,9.6 C0.3581722,9.6 0,9.9581722 0,10.4 L0,13.6 C0,14.9254834 1.0745166,16 2.4,16 L13.6,16 C14.9254834,16 16,14.9254834 16,13.6 L16,10.4 C16,9.9581722 15.6418278,9.6 15.2,9.6 Z M7.432,10.968 C7.50808297,11.0408325 7.59779895,11.0979245 7.696,11.136 C7.8896319,11.2215814 8.1103681,11.2215814 8.304,11.136 C8.40220105,11.0979245 8.49191703,11.0408325 8.568,10.968 L11.768,7.768 C12.0816977,7.45430226 12.0816977,6.94569774 11.768,6.63200001 C11.4543023,6.31830227 10.9456977,6.31830227 10.632,6.632 L8.8,8.472 L8.8,0.8 C8.8,0.3581722 8.4418278,0 8,0 C7.5581722,0 7.2,0.3581722 7.2,0.8 L7.2,8.472 L5.368,6.632 C5.16507315,6.42907313 4.86930081,6.34982117 4.59209756,6.42409755 C4.31489432,6.49837393 4.09837393,6.71489432 4.02409755,6.99209756 C3.94982117,7.26930081 4.02907313,7.56507315 4.232,7.768 L7.432,10.968 Z"
                                        id="Shape"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>{" "}
                        {props.t(props, "downloadFor") + " IOS"}
                      </a>
                      <a
                        id="submitFormButtonForCapterra"
                        className="otherLink i18n"
                        href="https://apps.apple.com/us/app/twake/id1257653795?l=fr&ls=1"
                        rel="nofollow"
                        target="_blank"
                      >
                        IOS
                      </a>
                    </div>
                  )}
                  {os == "Android" && (
                    <div className="btnBloc">
                      <a
                        id="submitFormButtonForCapterra"
                        href="https://play.google.com/store/apps/details?id=com.twake.twake"
                        rel="nofollow"
                        target="_blank"
                        className="btn btn-purple"
                      >
                        <svg
                          style={{ marginRight: "8px" }}
                          width="16px"
                          height="16px"
                          viewBox="0 0 16 16"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="Web---Desktop"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              id="001_landing"
                              transform="translate(-395.000000, -477.000000)"
                            >
                              <rect
                                fill="none"
                                x="0"
                                y="0"
                                width="1440"
                                height="5967"
                              ></rect>
                              <g
                                id="Hero"
                                transform="translate(136.000000, 229.000000)"
                                fill="#FFFFFF"
                              >
                                <g
                                  id="CTA"
                                  transform="translate(0.000000, 232.000000)"
                                >
                                  <g
                                    id="Télécharger"
                                    transform="translate(243.000000, 0.000000)"
                                  >
                                    <g
                                      id="Icon-/-download"
                                      transform="translate(16.000000, 16.000000)"
                                    >
                                      <path
                                        d="M15.2,9.6 C14.7581722,9.6 14.4,9.9581722 14.4,10.4 L14.4,13.6 C14.4,14.0418278 14.0418278,14.4 13.6,14.4 L2.4,14.4 C1.9581722,14.4 1.6,14.0418278 1.6,13.6 L1.6,10.4 C1.6,9.9581722 1.2418278,9.6 0.8,9.6 C0.3581722,9.6 0,9.9581722 0,10.4 L0,13.6 C0,14.9254834 1.0745166,16 2.4,16 L13.6,16 C14.9254834,16 16,14.9254834 16,13.6 L16,10.4 C16,9.9581722 15.6418278,9.6 15.2,9.6 Z M7.432,10.968 C7.50808297,11.0408325 7.59779895,11.0979245 7.696,11.136 C7.8896319,11.2215814 8.1103681,11.2215814 8.304,11.136 C8.40220105,11.0979245 8.49191703,11.0408325 8.568,10.968 L11.768,7.768 C12.0816977,7.45430226 12.0816977,6.94569774 11.768,6.63200001 C11.4543023,6.31830227 10.9456977,6.31830227 10.632,6.632 L8.8,8.472 L8.8,0.8 C8.8,0.3581722 8.4418278,0 8,0 C7.5581722,0 7.2,0.3581722 7.2,0.8 L7.2,8.472 L5.368,6.632 C5.16507315,6.42907313 4.86930081,6.34982117 4.59209756,6.42409755 C4.31489432,6.49837393 4.09837393,6.71489432 4.02409755,6.99209756 C3.94982117,7.26930081 4.02907313,7.56507315 4.232,7.768 L7.432,10.968 Z"
                                        id="Shape"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                        {props.t(props, "downloadFor") + " Android"}
                      </a>
                      <a
                        className="otherLink i18n"
                        href="https://play.google.com/store/apps/details?id=com.twake.twake"
                        rel="nofollow"
                        target="_blank"
                      >
                        Android
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                {os == "iPhone" || os == "Android" || os == "aze" ? (
                  <img
                    id="submitFormButtonForCapterra"
                    className="imgScreen carousselImgViewed"
                    style={{ marginTop: "24px" }}
                    src="/medias/features/mobile.jpg"
                    alt=""
                  />
                ) : (
                  <img
                    id="submitFormButtonForCapterra"
                    className="imgScreen carousselImgViewed"
                    style={{ borderRadius: "8px" }}
                    src="/medias/features/application.jpg"
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

Download.getInitialProps = async () => ({
  namespacesRequired: ["landing"],
  locale: "en"
});

export default withTranslation(["landing"])(Download);
