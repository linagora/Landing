import Layout from "../../../components/layout/layout";
const Tos = () => (
  <Layout>
    <div className="container" style={{ overflowX: "hidden" }}>
      <section>
        <h2>Twake Terms of Service</h2>
        <br />
        <br />
        Read more :{" "}
        <a href="/files/TOS.pdf" target="_BLANK">
          tos.pdf
        </a>
        <br />
        <br />
        <br />
        <hr />
        <script>document.location = "/files/TOS.pdf";</script>
      </section>
    </div>
  </Layout>
);

Tos.getInitialProps = async () => ({
  locale: "en"
});

export default Tos;
