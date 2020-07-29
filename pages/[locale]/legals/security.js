import Layout from "../../../components/layout/layout";
const Security = () => (
  <Layout>
    <div class="container" style={{ overflowX: "hidden" }}>
      <section>
        <h2>Twake Security</h2>
        <br />
        <br />
        Read about how we manage our security here :{" "}
        <a href="/files/security.pdf" target="_BLANK">
          security.pdf
        </a>
        <br />
        <br />
        <br />
        <hr />
        <script>document.location = "/files/security.pdf";</script>
      </section>
    </div>
  </Layout>
);
Security.getInitialProps = async () => ({
  locale: "en"
});

export default Security;
