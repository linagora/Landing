import React from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import { i18n, withTranslation } from "../../i18n";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Layout = props => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    });
  });
  const version = "1.2.000";
	return (
		<div className="layout" id="landing">
			<Head>
			<script type="text/javascript" dangerouslySetInnerHTML={{__html:`window.$crisp=[];window.CRISP_WEBSITE_ID="9ef1628b-1730-4044-b779-72ca48893161";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}}></script>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-121796059-2"></script>
			<script dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-121796059-2');`}}></script>
			<script type="text/javascript" dangerouslySetInnerHTML={{__html:`window.ltwAsyncInit = function(){init_multiplegl('https://gl.hostcg.com/',[['https://gl.hostcg.com/','2034','hh0r8vrr7i']]);};`}}></script>
			<script type="text/javascript" src="https://gl.hostcg.com/js/genlead.js" defer></script>
			<noscript><img src="https://gl.hostcg.com/js/tracker.php?idsite=2034&clesite=hh0r8vrr7i" style={{border:"0"}} alt="" /></noscript>

				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/medias/logo32x32.png"
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href="/medias/logo16x16.png"
					sizes="16x16"
				/>
				<link rel="apple-touch-icon" href="/medias/logo57x57.png" />
				<link
					rel="stylesheet"
					href={"../../../css/custom.min.css?v=" + version}
				/>
				<link
					rel="stylesheet"
					href={"../../../css/mobile.min.css?v=" + version}
				/>
				<script src={"/js/custom.min.js?v=" + version}></script>
				// Start of HubSpot Embed Code
				<script
					type="text/javascript"
					id="hs-script-loader"
					async
					defer
					src="//js.hs-scripts.com/5865592.js"
				></script>
				// Facebook Pixel Code
				<noscript>
					<img
						height="1"
						width="1"
						style={{ display: "none" }}
						src="https://www.facebook.com/tr?id=603962056782911&ev=PageView&noscript=1"
					/>
				</noscript>
				<title data-trn="index-title">
					{props.t({ router: router }, props.page)}
				</title>
				<meta
					name="description"
					content={props.t({ router: router }, props.page + "Description")}
				/>
				<meta name="image" content="https://twake.app/medias/logo.png" />
				<meta
					itemProp="name"
					content={props.t({ router: router }, props.page)}
				/>
				<meta
					itemProp="description"
					content={props.t({ router: router }, props.page + "Description")}
				/>
				<meta name="language" content={props.t({ router: router }, "locale")} />
				// Twitter -->
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content={props.t({ router: router }, "home")}
				/>
				<meta
					name="twitter:description"
					content={props.t({ router: router }, "homeDescription")}
				/>
				<meta name="twitter:site" content="@TwakeApp" />
				<meta
					name="twitter:image"
					content="https://twake.app/medias/logo_big.png"
				/>
				// Facebook -->
				<meta
					property="og:title"
					content={props.t({ router: router }, "home")}
				/>
				<meta
					property="og:image"
					content="https://twake.app/medias/ogimage.png"
				/>
				<meta property="og:url" content="https://twake.app/" />
				<meta
					property="og:site_name"
					content={props.t({ router: router }, "home")}
				/>
				<meta
					property="og:locale"
					content={props.t({ router: router }, "locale")}
				/>
				<meta property="fb:admins" content="TwakeApp" />
				<meta property="og:type" content="website" />
				<meta property="fb:app_id" content="338720906646130" />
				<meta
					property="og:description"
					content={props.t({ router: router }, "homeDescription")}
				/>
			</Head>
			<Header scrolled={scrolled} />
			<div className="content">{props.children}</div>
			<Footer />
		</div>
	);
};
Layout.getInitialProps = async () => ({
  namespacesRequired: ["layout"]
});
export default withTranslation(["layout"])(Layout);
