import Layout from "../../../components/layout/layout";
const Tos = () => (
  <Layout>
    <div className="container" style={{ overflowX: "hidden" }}>
      <section>
        <h2>Twake Terms of Service</h2>
        <br />
        <br />
        Read more :{" "}
        <a href="/files/tos.md" target="_BLANK">
          tos.md
        </a>
        <br />
        <br />
        <br />
        <hr />
        <script>document.location = "/files/tos.md";</script>
      </section>
    </div>
  </Layout>
);

Tos.getInitialProps = async () => ({
  locale: "en"
});

export default Tos;
