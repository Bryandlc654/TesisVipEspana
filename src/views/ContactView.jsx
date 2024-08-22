import Cards from "../components/contacto/Cards";
import Form from "../components/generals/Form";
import InfoMap from "../components/contacto/InfoMap";
import Footer from "../components/generals/Footer";
import Header from "../components/generals/Header";
import WspButton from "../components/generals/WspButton";
import useScrollToTop from "../hooks/useScrollToTop";


function ContactView() {

  useScrollToTop("/contacto");

  return (
    <>
      <Header>
      <section className="hero__main container">
            <div className="hero__content">
                <h1 className="hero__title center title">
                    <span className="resalt">Contáctanos</span>
                </h1>
            </div>
        </section>
      </Header>
       <main>
       <section className="texts container center">
            <h2 className="texts__title title">Ponte en contacto con nosotros <br/> para asesorarte</h2>
            <p className="texts__paragraph paragraph"> Nuestro equipo está listo para ofrecerte el apoyo y la orientación que necesitas, ya sea para tu proyecto académico, profesional o personal.</p>
        </section>

        <section className="contact contact--form container">
            <div className="contact__texts">
                <p className="guide">Contacta con nosotros</p>
                <h2 className="contact__title title"><span className="resalt">Déjanos tus</span> <br/> datos</h2>
                <Form />
            </div>
            <figure className="figure">
                <img className="img" src="./assets/img/imagen-4.webp"
                    alt="Una mujer con bata de graduación contestando una llamada sosteniendo en una mano su celular junto a su oreja, y con la otra mano sostiene un diploma"/>
            </figure>
        </section>

        <section className="info-contact container">
            <Cards />
            <InfoMap />
        </section>
       </main>
      <Footer />
      <WspButton />
    </>
  );
}

export default ContactView;