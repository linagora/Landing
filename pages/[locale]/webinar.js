import React, { useState } from 'react';
import { withTranslation } from "../../i18n";
import Layout from "../../components/layout/layout";

const Webinar = props => {
	const [name,setName] = useState("");
	const [firsname,setFistName] = useState("");
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
							<div className="col-lg-6 offset-lg-3">
								<div className="title" style={{textAlign:"center"}}>La collaboration d'équipe à porté de clic</div>
									<p style={{marginBottom:"24px"}}>Une bonne collaboration d'équipe est synonyme succès. C'est une clé nécessaire au bon déroulement de vos projets.</p>
									<p style={{marginBottom:"24px"}}>Comment mieux collaborer à l'ère du tout digital et du télétravail ? Les logiciels collaboratifs sont là pour répondre à vos besoins.</p>
									<p style={{marginBottom:"24px"}}>Linagora a décidé de vous montrer les bonnes pratiques de la collaboration et comment sa solution Twake, peut vous aider au quotidien.</p>
									<p style={{marginBottom:"24px"}}>Découvrez la collaboration en mode Twake le jeudi 5 novembre 2020 à 10h lors d'un webinar conçu spécialement pour les collectivités.</p>

							</div>
						</div>
					</div>
				</section>
				<section className="sectionWithLiteBackground">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 offset-lg-3">
								<div className="title" style={{textAlign:"center"}}>Intervenants</div>
								<div className="" style={{display:"flex",marginTop:"48px"}}>
								<div className="" style={{flex:0.5}}>
									<div className="" style={{display:""}}>
										<img style={{boxShadow:"0px 0px 16px 0px rgba(0,0,0,0.16)",borderRadius:"50%",width:"100px",heigth:"100px",display:"block",margin:"auto"}} src="https://pbs.twimg.com/profile_images/1285934551827718145/UQ0OkMVB_400x400.jpg"/>
										<div className="subtitle" style={{textAlign:"center",marginTop:"24px",marginBottom:"8px"}}>Benoît Tallandier</div>
										<div className="" style={{textAlign:"center"}}>Chef produit de Twake</div>
										<div className="" style={{marginTop:"16px",textAlign:"center"}}><a href="https://www.linkedin.com/in/btallandier/"><img style={{width:"24px"}} src="/medias/linkedin.svg"/></a></div>
									</div>
								</div>
								<div className="" style={{flex:0.5}}>
									<div className="" style={{display:""}}>
										<img style={{boxShadow:"0px 0px 16px 0px rgba(0,0,0,0.16)",borderRadius:"50%",width:"100px",heigth:"100px",display:"block",margin:"auto"}} src="https://pbs.twimg.com/profile_images/1285934551827718145/UQ0OkMVB_400x400.jpg"/>
										<div className="subtitle" style={{textAlign:"center",marginTop:"24px",marginBottom:"8px"}}>Benoît Tallandier</div>
										<div className="" style={{textAlign:"center"}}>Chef produit de Twake</div>
										<div className="" style={{marginTop:"16px",textAlign:"center"}}><a href="https://www.linkedin.com/in/btallandier/"><img style={{width:"24px"}} src="/medias/linkedin.svg"/></a></div>
									</div>
								</div>
								</div>
							</div>
						</div>
					</div>
				</section>
        <section>
          <div className="container">
						<div className="row">
							<div className="col-lg-6 offset-lg-3">
								<div className="title" style={{textAlign:"center"}}>Le menu</div>
								<div className="" style={{marginBottom:"32px",marginTop:"48px"}}>
									<div className="subtitle" style={{marginBottom:"12px"}}>
										<div style={{display:"inline-block",width:"6px",height:"6px",background:"var(--secondary)",borderRadius:"10px",verticalAlign:"middle",marginRight:"8px"}}></div>
										L'évolution de la collaboration en entreprise
									</div>
									<div className="">De plus en plus, le travail se fait à distance. Comment apréhender cette nouvelle façon de travailler en équipe</div>
								</div>
								<div className="" style={{marginBottom:"32px"}}>
									<div className="subtitle" style={{marginBottom:"12px"}}><div style={{display:"inline-block",width:"6px",height:"6px",background:"var(--secondary)",borderRadius:"10px",verticalAlign:"middle",marginRight:"8px"}}></div>Mettre en place une plateforme collaborative</div>
									<div className="">Comment plannifier et emmener ses collaborateurs vers une nouvelle solution.</div>
								</div>
								<div className="" style={{marginBottom:"32px"}}>
									<div className="subtitle" style={{marginBottom:"12px"}}><div style={{display:"inline-block",width:"6px",height:"6px",background:"var(--secondary)",borderRadius:"10px",verticalAlign:"middle",marginRight:"8px"}}></div>Découvrir Twake</div>
									<div className="">Quels sont les grandes fonctionnalités de Twake. Comment Twake aide à travailler au quotidien en équipe</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="container">
						<div className="row">
							<div className="col-lg-6 offset-lg-3">
							<div className="" style={{position:"relative"}}>
								<div className="title" style={{position:"absolute", top:"150px",left:"0px",right:"0px",margin:"auto"}}>Le webinar aura lieu le 5 novembre 2020 à 10h</div>

								<svg viewBox="0 0 600 460">
										<g stroke="none" stroke-width="1" fill="#f8f8ff" fill-rule="evenodd">
											<g transform="translate(-57.000000, -56.000000)">
												<path class="hsg-countdown__blob-fill" d="M536.816285,463.144448 C338.596456,450.94142 221.253554,600.801377 121.432324,497.420489 C21.6111067,394.039572 67.8167304,275.956772 171.184634,176.122983 C274.552525,76.2891998 443.416893,-8.18922323 543.238114,95.1916869 C643.059336,198.572593 735.036114,475.347447 536.816285,463.144448 Z" transform="translate(360.000053, 291.000011) rotate(7.000000) translate(-360.000053, -291.000011) "></path>
											</g>
										</g>
									</svg>
							</div>

							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="title" style={{textAlign:"center"}}>S'inscrire au webinar</div>
							</div>
						</div>
            <div className="row">
              <div className="col-lg-6 offset-lg-3" style={{height:"800px"}}>
								{/*<form action="https://dislack.com/send/5cbf2421f44fc51b27d70b45" method="post">
								  <input type="text" name="lastName" placeholder="Nom" required />
								  <input type="text" name="firstName" placeholder="Prénom" required />
								  <input type="email" name="email" placeholder="Email" required />
								  <input type="text" name="companyName" placeholder="Nom de l'entreprise" required />
								  <button>Submit</button>
								</form>*/}
								<iframe style={{border: 0, width:"90%", height: "100%", position: "absolute"}} src="https://dislack.com/f/5cbf2421f44fc51b27d70b45/?type=embed&padding=&background=true&branding=true"></iframe>
              </div>
              {/*<div className="col-lg-6">
                <img src="/medias/twakeDevice.png" style={{width:"100%",marginTop:"0"}}/>
              </div>*/}
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
