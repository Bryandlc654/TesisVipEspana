import Footer from "../components/generals/Footer";
import Header from "../components/generals/Header";
import WspButton from "../components/generals/WspButton";
import Cards from "../components/services/Cards";
import useScrollToTop from "../hooks/useScrollToTop";

function ServicesView() {

  useScrollToTop("/servicios");

  return (
    <>
            <Header>
            <section className="hero__main container">
            <div className="hero__content">
                <h1 className="hero__title center title hero__title--services">
                    <span className="resalt">Nuestros</span>
                    <span>Servicios</span>
                </h1>
            </div>
        </section>
            </Header>
      <main>
      <section className="page-services container">
            <div className="page-services__texts center">
                <p className="guide">Lo que hacemos</p>
                <h2 className="page-services__title title">Nuestros Servicios</h2>
                <p className="page-services__paragraph paragraph">Nuestro enfoque es personalizado y nos comprometemos con tu éxito académico, garantizando calidad, confidencialidad y apoyo continuo.</p>
            </div>
            <Cards />
        </section>
      </main>
      <Footer />
      <WspButton />
    </>
  );
}

export default ServicesView;