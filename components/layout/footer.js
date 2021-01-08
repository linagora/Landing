import { i18n, withTranslation } from "../../i18n";
import { useRouter } from "next/router";

const Footer = ({ t, getLang }) => {
  const router = useRouter();
  return (
    <div className="footer">
      <footer className="">
        <section>
          <div className="container text-center text-lg-left">
            <div className="row">
              <div className="col-lg-3 offset-lg-2">
                <div className="footerTitle">
                  {t({ router: router }, "product")}
                </div>
                <a
                  className="linkFooter"
                  href={"/" + getLang({ router: router }) + "/" + "download"}
                >
                  {t({ router: router }, "download")}
                </a>
                <a
                  className="linkFooter"
                  href={
                    "/" + getLang({ router: router }) + "/" + "product/chat"
                  }
                >
                  {t({ router: router }, "features")}
                </a>
                <a className="linkFooter" href="https://beta.twake.app" onClick = {()=>{
										analytics.track('TryForFree_click',{
											from : "openTwake_foother"
										});
									}}
									>
                  {t({ router: router }, "openTwake")}
                </a>
                <a
                  className="linkFooter"
                  href={"/" + getLang({ router: router }) + "/" + "pricing"}
									onClick={()=>{
										analytics.track('pricingLink_click',{
											from : 'footer'
										});
									}}
                >
                  {t({ router: router }, "pricing")}
                </a>
              </div>
              <div className="col-lg-3">
                <div className="footerTitle">
                  {t({ router: router }, "community")}
                </div>
                <a
                  className="linkFooter"
                  href={"/" + getLang({ router: router }) + "/" + "contribute"}
                >
                  {t({ router: router }, "contribute")}
                </a>
                <a
                  className="linkFooter"
                  target="_blank"
                  href="https://doc.twake.app/"
                >
                  {t({ router: router }, "documentation")}
                </a>
                <a
                  className="linkFooter"
                  target="_blank"
                  href="https://community.twake.app"
                >
                  {t({ router: router }, "Forum")}
                </a>
                <a
                  className="linkFooter"
                  target="_blank"
                  href="https://headwayapp.co/twake-changelog"
                >
                  {t({ router: router }, "changelog")}
                </a>
                <a
                  className="linkFooter"
                  target="_blank"
                  href="https://www.notion.so/Twake-Public-Roadmap-7c52a3afd0de4b6b8eee1d08e0a9d8b9"
                >
                  {t({ router: router }, "roadmap")}
                </a>
              </div>
              <div className="col-lg-3">
                <div className="footerTitle">
                  {t({ router: router }, "social")}
                </div>
                <a
                  className="linkFooter"
                  target="_blank"
                  href="https://facebook.com/TwakeApp"
                >
                  Facebook
                </a>
                <a
                  className="linkFooter"
                  target="_blank"
                  href="https://twitter.com/Twake"
                >
                  Twitter
                </a>
                <a
                  className="linkFooter"
                  target="_blank"
                  href="https://linkedin.com/company/twake/"
                >
                  Linkedin
                </a>
                <a
                  className="linkFooter"
                  target="_blank"
                  href="https://github.com/TwakeApp/Twake"
                >
                  Github
                </a>
              </div>
            </div>
            <div className="row" style={{ marginTop: "32px" }}>
              <div className="col-lg-3 offset-lg-2">
                <div className="footerTitle">
                  {t({ router: router }, "features")}
                </div>
                <a
                  className="linkFooter"
                  href={
                    "/" + getLang({ router: router }) + "/" + "product/chat"
                  }
                >
                  {t({ router: router }, "chat")}
                </a>
                <a
                  className="linkFooter"
                  href={
                    "/" + getLang({ router: router }) + "/" + "product/calendar"
                  }
                >
                  {t({ router: router }, "calendar")}
                </a>
                <a
                  className="linkFooter"
                  href={
                    "/" + getLang({ router: router }) + "/" + "product/task"
                  }
                >
                  {t({ router: router }, "task")}
                </a>
                <a
                  className="linkFooter"
                  href={
                    "/" + getLang({ router: router }) + "/" + "product/drive"
                  }
                >
                  {t({ router: router }, "drive")}
                </a>
              </div>
              <div className="col-lg-3">
                <div className="footerTitle">
                  {t({ router: router }, "legals")}
                </div>
                <a
                  className="linkFooter"
                  href={
                    "/" + getLang({ router: router }) + "/" + "legals/privacy"
                  }
                >
                  {t({ router: router }, "legals_privacy")}
                </a>
                <a
                  className="linkFooter"
                  href={"/" + getLang({ router: router }) + "/" + "legals/tos"}
                >
                  {t({ router: router }, "legals_tos")}
                </a>
                <a
                  className="linkFooter"
                  href={"/" + getLang({ router: router }) + "/" + "documents/presskit"}
                >
                  {t({ router: router }, "presskit")}
                </a>
								{
	                /*<a
	                  className="linkFooter"
	                  href={"/" + getLang({ router: router }) + "/" + "legals/security"}
	                >
	                  {t({ router: router }, "legals_security")}
	                </a>*/
								}
              </div>
              <div className="col-lg-3">
                <div className="footerTitle">
                  {t({ router: router }, "language")}
                </div>
                <a
                  className="linkFooter"
                  onClick={() => i18n.changeLanguage("fr")}
                >
                  Français
                </a>
                <a
                  className="linkFooter"
                  onClick={() => i18n.changeLanguage("en")}
                >
                  English
                </a>
                <a
                  className="linkFooter"
                  onClick={() => i18n.changeLanguage("ru")}
                >
                  Русский
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12" style={{textAlign: "center",opacity: "0.8"}}>
                {t({ router: router }, "developpedby")} <a href="https://linagora.com">LINAGORA</a>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

Footer.getInitialProps = async () => ({
  namespacesRequired: ["layout"]
});

export default withTranslation(["layout"])(Footer);
