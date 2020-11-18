import Layout from "../../../components/layout/layout";
const Security = () => (
  <Layout>
    <div className="container" style={{ overflowX: "hidden" }}>
      <section>
        <h2>Twake Presskit</h2>
        <br />
        <br />
        Get our presskit here :{" "}
        <a href="/medias/presskit.zip" target="_BLANK">
          presskit.zip
        </a>
        <br />
        <br />
        <br />
        <hr />
        <script>document.location = "/medias/presskit.zip";</script>
      </section>
    </div>
  </Layout>
);
Security.getInitialProps = async () => ({
  locale: "en"
});

export default Security;
