import React, { useState } from 'react';
import { withTranslation } from "../../i18n";
import Layout from "../../components/layout/layout";

const Webinar = props => {
	const [name,setName] = useState("");
	const [firstname,setFirstName] = useState("");
	const [email,setEmail] = useState("");
	const [company,setCompany] = useState("");
	const [newsletter,setNewsletter] = useState(false);


  return (
    <Layout page={"Webinar"}>
      <div
        className="container-fluid"
        style={{ overflowX: "hidden" }}
        id="contribute"
      >
				<section className="sectionWithScreen">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <h2 className="subline">WEBINAR</h2>
                	<h1 className="title">Une nouvelle façon de collaborer</h1>
									<h2 className="subtitle textCenter">5 novembre 2020 à 10h30</h2>
              </div>
              <div className="col-lg-6 offset-lg-3 textCenter">
								<div className="subtitle" style={{textAlign:"justify",marginTop:"24px"}}>
								</div>
              </div>
            </div>
          </div>
        </section>
				<section className="">
					<div className="container">
						<div className="row">
							<div className="title col-md-12 textCenter">Merci de votre inscription</div>
							<div className="subtitle col-md-12 textCenter"> Nous vous enverrons un mail avec le lien du webinar le 5 novembre </div>
						</div>
					</div>
				</section>
      </div>
    </Layout>
  );
};

Webinar.getInitialProps = async () => ({
  namespacesRequired: ["contribute"],
  locale: "en"
});

export default withTranslation(["contribute"])(Webinar);
