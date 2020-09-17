import { i18n, withTranslation } from "../../i18n";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";

const Header = ({ t, scrolled, getLang }) => {
  const router = useRouter();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      className={"navbar " + (scrolled ? "navBarScrolled" : "")}
    >
      <div className="container">
        <Navbar.Brand className="navbar-brand" href={"/"}>
          <img
            src="/medias/logo_blue.png"
            alt="Logo Twake"
            style={{ height: "24px", marginRight: "8px" }}
          />
          Twake
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item className="nav-item">
              <Nav.Link
                className="nav-link"
                href={"/" + getLang({ router: router }) + "/" + "product/chat"}
              >
                {t({ router: router }, "product")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link
                className="nav-link"
                href={"/" + getLang({ router: router }) + "/" + "pricing"}
              >
                {t({ router: router }, "pricing")}
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title={t({ router: router }, "community")} id="basic-nav-dropdown">
              <NavDropdown.Item href={"/" + getLang({ router: router }) + "/" + "contribute"}>{t({ router: router }, "contribute")}</NavDropdown.Item>
              <NavDropdown.Item href="https://doc.twake.app/">{t({ router: router }, "documentation")}</NavDropdown.Item>
              <NavDropdown.Item href="https://community.twake.app">{t({ router: router }, "forum")}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Item className="nav-item">
						<a href="https://www.producthunt.com/posts/twake?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-twake" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=261899&theme=light" alt="Twake - Best open source collaboration platform for team | Product Hunt Embed" style={{width: "250px", height:"54px"}} width="250" height="54" /></a>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link className="nav-link" href="https://app.twakeapp.com">
              {t({ router: router }, "connection")}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link
              className="nav-link btn-purple"
              href={"/" + getLang({ router: router }) + "/" + "demonstration"}
            >
              {t({ router: router }, "askDemo")}
            </Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
Header.getInitialProps = async () => ({
  namespacesRequired: ["layout"]
});

export default withTranslation(["layout"])(Header);
