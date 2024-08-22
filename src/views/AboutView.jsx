import { Link } from "react-router-dom";
import Header from "../components/generals/Header";

import { useInView } from 'react-intersection-observer';
import Footer from "../components/generals/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

function AboutView() {

    useScrollToTop("/nosotros");
    const inViewOptionsOnce = {
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
        triggerOnce: true
    }
    const inViewOptions = {
        threshold: 0,
        rootMargin: "0px 0px -200px 0px",
    }
    const {ref: missionFigureRef, inView: inMissionFigureView} = useInView(inViewOptionsOnce);
    const {ref: missionTextsRef, inView: inMissionTextsView} = useInView(inViewOptionsOnce);
    const {ref: visionFigureRef, inView: inVisionFigureView} = useInView(inViewOptionsOnce);
    const {ref: visionTextsRef, inView: inVisionTextsView} = useInView(inViewOptionsOnce);
    const {ref: aboutUsRef, inView: inAboutUsView} = useInView(inViewOptions);

  return (
    <>
      <Header>
        <section className="hero__main container">
            <div className="hero__content">
                <h1 className="hero__title center title hero__title--services">
                    <span className="resalt">Sobre</span>
                    <span>Nosotros</span>
                </h1>
            </div>
        </section>
       </Header>
    <main>
        <section className="about-us container">
            <figure ref={aboutUsRef} className={`about-us__figure translate-x ${inAboutUsView ? "active" : ""}`}>
                <img className="img" src="../assets/img/imagen-5.webp" alt="Imágenes que muestran un equipo unido y trabajando"/>
            </figure>
            <div className="about-us__texts">
                <p className="guide">Un poco de nosotros</p>
                <h2 className="about-us__title title">Nuestra Historia</h2>
                <p className="about-us__paragraph paragraph">Desde nuestros inicios, nos hemos comprometido a proporcionar asesoría experta y un acompañamiento constante a cada estudiante, garantizando que cada tesis cumpla con los más estrictos estándares de rigor académico y ético. Con una dedicación incansable y un enfoque en la excelencia, hemos ayudado a cientos de estudiantes a alcanzar sus metas académicas y profesionales.</p>
                <p className="about-us__paragraph paragraph">A lo largo de los años, hemos evolucionado y crecido, adaptándonos a las nuevas tecnologías y metodologías de investigación para ofrecer servicios innovadores y de calidad. Hoy en día, somos reconocidos por nuestra capacidad para manejar proyectos de gran escala y por nuestra eficiencia en la entrega de resultados sobresalientes.</p>
                <Link className="btn btn-primary" to="https://wa.link/jt1gt7" rel="noopener noreferrer" target="_blank" title="WhatsApp de Tesis VIP" preventScrollReset="false">Contáctanos</Link>
            </div>
        </section>


<section className="services container">
    <div className="services__texts center">
        <p className="guide">Servicios a la medida</p>
        <h2 className="services__title title">Nuestros Servicios</h2>
    </div>
    <div className="services__group">
        <article className="card">
            <img src="./assets/img/servicio-1.webp" alt="Imagen referencial a nuestro servicio de Redacción de Trabajos de Fin de Grado" loading="lazy"/>
            <div className="card-content">
                <h3 className="card-title">Redacción de Trabajos <br/> de Fin de Grado</h3>
                <a className="btn btn-primary card-button" href="https://wa.link/bwcii3" rel="noopener noreferrer" target="_blank" title="WhatsApp de Tesis VIP">Contratar</a>
            </div>
        </article>
        <article className="card">
            <img src="./assets/img/servicio-2.webp" alt="Imagen referencial a nuestro servicio de Redacción de Trabajos de Fin de Máster" loading="lazy"/>
            <div className="card-content">
                <h3 className="card-title">Redacción de Trabajos <br/> de Fin de Máster</h3>
                <a className="btn btn-primary card-button" href="https://wa.link/778eja" rel="noopener noreferrer" target="_blank" title="WhatsApp de Tesis VIP">Contratar</a>
            </div>
        </article>
        <article className="card">
            <img src="./assets/img/servicio-4.webp" alt="Imagen referencial a nuestro servicio de Levantamiento de Observaciones" loading="lazy"/>
            <div className="card-content">
                <h3 className="card-title">Levantamiento de <br/> Observaciones</h3>
                <a className="btn btn-primary card-button" href="https://wa.link/l3xagw" rel="noopener noreferrer" target="_blank" title="WhatsApp de Tesis VIP">Contratar</a>
            </div>
        </article>
        <article className="card">
            <img src="./assets/img/servicio-3.webp" alt="Imagen referencial a nuestro servicio de Asesoría para TFG y TFM" loading="lazy"/>
            <div className="card-content">
                <h3 className="card-title">Asesoría para <br/> TFG y TFM</h3>
                <a className="btn btn-primary card-button" href="https://wa.link/2g07pv" rel="noopener noreferrer" target="_blank" title="WhatsApp de Tesis VIP">Contratar</a>
            </div>
        </article>
    </div>
    <Link className="services__btn btn btn-secondary btn-secondary--dark" to="/servicios" preventScrollReset="false">Ver más servicios</Link>
</section>


<section className="values">
    <div className="values__content container">
        <div className="values__texts center">
            <h2 className="values__title title">Nuestros Valores</h2>
            <p className="values__paragraph paragraph">Estos valores son el corazón de todo lo que hacemos, impulsando nuestro éxito y el de nuestros clientes.</p>
        </div>
        <div className="values__group">
            <article className="value">
                <div className="value__background">
                    <img className="img" src="./assets/img/imagen-6.webp" alt="" loading="lazy" aria-hidden="true"
                        role="presentation"/>
                </div>
                <p className="value__number">01</p>
                <p className="value__text">Profesionalismo</p>
            </article>
            <article className="value">
                <div className="value__background">
                    <img className="img" src="./assets/img/imagen-7.webp" alt="" loading="lazy" aria-hidden="true"
                        role="presentation"/>
                </div>
                <p className="value__number">02</p>
                <p className="value__text">Compromiso</p>
            </article>
            <article className="value">
                <div className="value__background">
                    <img className="img" src="./assets/img/imagen-8.webp" alt="" loading="lazy" aria-hidden="true"
                        role="presentation"/>
                </div>
                <p className="value__number">03</p>
                <p className="value__text">Calidad</p>
            </article>
        </div>
    </div>
</section>


<section className="mission container" >
    <figure ref={missionFigureRef} className={`mission__figure translate-x ${inMissionFigureView ? "active" : ""}`}>
        <img className="img" src="./assets/img/imagen-9.webp" alt="Imagen referente a la misión de nuestra empresa"/>
    </figure>
    <div ref={missionTextsRef} className={`mission__texts translate-x reverse ${inMissionTextsView ? "active" : ""}`}>
        <p className="guide">Nuestro Proposito</p>
        <h2 className="mission__title title">Misión</h2>
        <p className="mission__paragraph paragraph">En Tesis VIP PROFESSIONALS CORPORATION, nuestra misión es ser tu aliado estratégico hacia el éxito académico.</p>
        <p className="mission__paragraph paragraph">Ofrecemos asesoría integral en la elaboración de tesis, garantizando alta calidad y rigurosidad ética. Nos comprometemos a brindar un servicio personalizado, desde la selección del tema hasta la revisión final, promoviendo la originalidad y el desarrollo profesional de cada estudiante.</p>
        <p className="mission__paragraph paragraph">Guiamos a nuestros estudiantes en cada paso del proceso, asegurando que sus trabajos cumplan con los estándares académicos y editoriales más exigentes, fomentando siempre la honestidad intelectual y la integridad académica.</p>
    </div>
</section>


<section className="vision container">
    <figure ref={visionFigureRef} className={`vision__figure translate-x reverse ${inVisionFigureView ? "active" : ""}`}>
        <img className="img" src="./assets/img/imagen-10.webp" alt="Imagen referente a la visión de nuestra empresa"/>
    </figure>
    <div ref={visionTextsRef} className={`vision__texts translate-x  ${inVisionTextsView ? "active" : ""}`}>
        <p className="guide">Nuestro Futuro</p>
        <h2 className="vision__title title">Visión</h2>
        <p className="vision__paragraph paragraph">Aspiramos a ser la empresa líder en asesoría y elaboración de tesis, reconocida por la calidad excepcional de nuestros servicios y la experiencia de nuestro equipo de profesionales.</p>
        <p className="vision__paragraph paragraph">Nos comprometemos con el éxito académico de cada estudiante, siendo la referencia de confianza para aquellos que buscan alcanzar la excelencia en sus trabajos de tesis.</p>
        <p className="vision__paragraph paragraph">Queremos posicionarnos como un pilar fundamental en la formación académica y profesional de nuestros clientes, ofreciendo un apoyo integral y de alta calidad.</p>
    </div>
</section>


<section className="about-contact">
    <div className="about-contact__content container">
        <div className="about-contact__background">
            <img className="img" src="./assets/img/imagen-11.webp" alt="" loading="lazy" aria-hidden="true"
                role="presentation"/>
        </div>
        <h2 className="about-contact__title title">¡Contacta hoy con nosotros!</h2>
        <p className="about-contact__paragraph paragraph">¡Póngase en contacto con nosotros para optimizar la redacción y estructura de su tesis con nuestra asesoría especializada! <br/>Estamos aquí para ofrecerle una amplia gama de soluciones adaptadas a sus necesidades académicas.</p>
        <a className="btn btn-primary" href="https://wa.link/jt1gt7" rel="noopener noreferrer" target="_blank" title="WhatsApp de Tesis VIP">Contáctanos</a>
    </div>
</section>

</main>
<Footer />
    </>
  );
}

export default AboutView;