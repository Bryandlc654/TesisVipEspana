import Footer from "../components/generals/Footer";
import Header from "../components/generals/Header";
import WspButton from "../components/generals/WspButton";

import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import InfoSection from "../components/home/InfoSection";
import Form from "../components/generals/Form";
import ContactSection from "../components/home/ContactSection";
import CarrouselService from "../components/home/CarrouselService";

import { Link } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";


function HomeView() {

    useScrollToTop("/");

    const { ref: heroRef, inView: isVisible } = useInView();

    const { ref: benefitsRef, inView: isBenefitVisible } = useInView({
        threshold: 0.1,
        triggerOnce: true
    }
    );

    const [isModalOpen, setModalOpen] = useState(false);

    const handlePlayClick = () => {
        setModalOpen(true);
    };

    const handleCloseClick = () => {
        setModalOpen(false);
        const videoElement = document.getElementById('modal-video');
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
    };


    return (
        <>
            <Header>
                <section className={`hero__main container translate-x reverse ${!isVisible ? "" : "active"}`} ref={heroRef}>
                    <div className="hero__content">
                        <div className="hero__texts">
                            <p className="hero__info">Somos expertos en</p>
                            <h1 className="hero__title title">
                                <span className="resalt">Consultoría y Redacción</span>
                                <br />
                                de TFG y TFM
                            </h1>
                            <div className="hero__buttons">
                                <a className="btn btn-primary" href="https://wa.link/jt1gt7" rel="noopener noreferrer" target="_blank" title="WhatsApp de Tesis VIP">Contáctanos</a>
                                <Link className="btn btn-secondary btn-secondary--white" to="/servicios" preventScrollReset="false">Más información</Link>
                            </div>
                        </div>
                        <Form reverse="true" />
                    </div>
                </section>
            </Header>
            <main>
                {/* <section className="info"> */}
                <InfoSection />
                <section className="benefits" ref={benefitsRef}>
                    <div className="benefits__content container">
                        <figure className={`benefits__figure ${isBenefitVisible ? 'active' : ''}`}>
                            <img className="benefits__img" src="./assets/img/imagen-1.webp" loading="lazy"
                                alt="Imagen que muestra los años de experiencia de Tesis VIP" />
                        </figure>
                        {/* <div className="benefits__texts"> */}
                        <div className={`benefits__texts ${isBenefitVisible ? 'active' : ''}`}>
                            <p className="guide">Más sobre Tesis VIP</p>
                            <h2 className="benefits__title title">Te Ofrecemos la Asesoría de Tesis Más Completa y Eficaz</h2>
                            <p className="benefits__paragraph paragraph">Contamos con un equipo de expertos en metodología de la
                                investigación, desarrollo de contenidos y revisión crítica, garantizando un acompañamiento
                                integral
                                desde la conceptualización hasta la defensa de tu trabajo.</p>
                            <div className="benefits__container-lists">
                                <ul className="benefits__list">
                                    <li className="benefits__item">Acompañamiento Personalizado</li>
                                    <li className="benefits__item">Asesoría Metodológica</li>
                                    <li className="benefits__item">Redacción y Revisión Profesional</li>
                                </ul>
                                <ul className="benefits__list">
                                    <li className="benefits__item">Soporte Integral</li>
                                    <li className="benefits__item">Capacitación en Presentación</li>
                                    <li className="benefits__item">Garantía de Originalidad</li>
                                </ul>
                            </div>
                            <div className="benefits__group">
                                <div className="benefits__group-number">
                                    <div className="benefits__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                        </svg>
                                    </div>
                                    <p className="benefits__number">
                                        <span className="number">+34 910 91 84 18</span>
                                        <span className="text">Whatsapp</span>
                                    </p>
                                </div>
                                <a className="btn btn-primary" href="https://wa.link/jt1gt7" rel="noopener noreferrer" target="_blank" title="WhatsApp de Tesis VIP">Contáctanos</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="carrusel container">
                    <div className="carrusel__group">
                        <div className="carrusel__slide">
                            <img className="carrusel__img" src="./assets/img/carrusel-1.webp" alt="Artículos" loading="lazy" />
                            <img className="carrusel__img" src="./assets/img/carrusel-2.png" alt="Tesis Pregrado" loading="lazy" />
                            <img className="carrusel__img" src="./assets/img/carrusel-3.png" alt="Tesis Postgrado" loading="lazy" />
                            <img className="carrusel__img" src="./assets/img/carrusel-4.webp" alt="Asesoría" loading="lazy" />
                        </div>
                        <div className="carrusel__slide">
                            <img className="carrusel__img" src="./assets/img/carrusel-1.webp" alt="Artículos" loading="lazy" />
                            <img className="carrusel__img" src="./assets/img/carrusel-2.png" alt="Tesis Pregrado" loading="lazy" />
                            <img className="carrusel__img" src="./assets/img/carrusel-3.png" alt="Tesis Postgrado" loading="lazy" />
                            <img className="carrusel__img" src="./assets/img/carrusel-4.webp" alt="Asesoría" loading="lazy" />
                        </div>
                    </div>
                </section>

                <section className="about container">
                    <div className="about__texts">
                        <h2 className="about__title title">Innovación y excelencia <br /> en cada página</h2>
                        <p className="about__paragraph paragraph">
                            Únete a nosotros y descubre cómo podemos ayudarte a alcanzar tus metas
                            educativas con confianza y profesionalismo.
                        </p>
                        <Link className="btn btn-secondary btn-secondary--dark" to="/servicios" preventScrollReset="false">
                            Más información
                        </Link>
                    </div>
                    <div className="video">
                        <video id="video-html" className="video__player" poster="./assets/img/imagen-2.webp" preload="metadata"></video>
                        <button id="play" className="video__btn" title="Video" onClick={handlePlayClick}>
                            <div className="video__btn-border">
                                <div className="video__btn-background">
                                    <svg className="video__btn-icon" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>

                    {isModalOpen && (
                        <div className="modal">
                            <div className="modal__content">
                                <button className="modal__close" onClick={handleCloseClick}>×</button>
                                <video id="modal-video" className="modal__video" controls autoPlay>
                                    <source src="./assets/tesisvip.mp4" type="video/mp4" />
                                    Tu navegador no soporta la etiqueta de video.
                                </video>
                            </div>
                        </div>
                    )}
                </section>


                <section className="services container">
                    <div className="services__texts center">
                        <p className="guide">Servicios a la medida</p>
                        <h2 className="services__title title">Nuestros Servicios</h2>
                    </div>
                    <CarrouselService />

                </section>
                <section className="faqs">
                    <div className="faqs__content container">
                        <figure className="faqs__figure">
                            <img className="faqs__img" src="./assets/img/imagen-3.webp"
                                alt="Una mujer feliz contestando una llamada sentada en un silla con su pórtatil encima de sus piernas"
                                loading="lazy" />
                        </figure>
                        <div className="faqs__texts">
                            <p className="guide">Resuelve tus dudas</p>
                            <h2 className="faqs__title title">Preguntas y Respuestas</h2>
                            <div className="faqs__group">
                                <details className="faq" name="faq">
                                    <summary className="faq__title">
                                        ¿Cómo se realizaran las asesorías?
                                        <span className="faq__icon">
                                            <svg className="plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="#1c1d32" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                            </svg>
                                            <svg className="dash" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="#1c1d32" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="faq__paragraph paragraph">
                                        Tenemos un plan personalizado de asesorías para cada alumno dependiendo de sus necesidades. Podemos ayudarte con tu proyecto desde cero o retomarlo desde donde lo tengas.
                                        - Plan Básico: 30 minutos.
                                        - Plan Premium: 45 minutos
                                        - Plan Gold: 60 minutos.
                                        Todos cuentan con un profesional especializado en tu área de estudio y Correo electrónico con sugerencias.
                                    </p>
                                </details>
                                <details className="faq" name="faq">
                                    <summary className="faq__title">
                                        ¿Por qué elegirnos para hacer tu Tesis?
                                        <span className="faq__icon">
                                            <svg className="plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="#1c1d32" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                            </svg>
                                            <svg className="dash" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="#1c1d32" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="faq__paragraph paragraph">Realizamos entregas y pagos parciales, nunca solicitamos el monto total por adelantado. Trabajamos por presentaciones para que puedas revisar y presentar avances a tu tutor.
                                        Usamos un avanzado software anti plagio y con cada entrega proporcionamos un informe de plagio. Nos adaptamos a cualquier etapa de tu proyecto y ofrecemos precios justos, sin costos excesivos.</p>
                                </details>
                                <details className="faq" name="faq">
                                    <summary className="faq__title">
                                        ¿Por qué elegirnos para tu Artículo Científico?
                                        <span className="faq__icon">
                                            <svg className="plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="#1c1d32" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                            </svg>
                                            <svg className="dash" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="#1c1d32" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="faq__paragraph paragraph">En nuestra consultora, nos enfocamos en brindar soluciones efectivas a los problemas y desafíos que enfrentan nuestros clientes, nosotros vamos directo al asunto. Ofrecemos servicios personalizados y adaptados a las necesidades específicas de cada tesista, garantizando un servicio confidencial y de alta calidad. No estamos para hacerte perder el tiempo, realizamos tu Artículo Científico hasta que tu jurado lo apruebe.</p>
                                </details>
                                <details className="faq" name="faq">
                                    <summary className="faq__title">
                                        ¿Por qué confiarnos tu Ensayo?
                                        <span className="faq__icon">
                                            <svg className="plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="#1c1d32" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                            </svg>
                                            <svg className="dash" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="#1c1d32" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="faq__paragraph paragraph">Nuestros expertos poseen licenciaturas, maestrías o doctorados en diversas áreas de estudio, lo que respalda tu proyecto de Ensayo con un sólido conocimiento teórico y práctico. Además, nos comprometemos a elaborar tu trabajo académico con calidad y dedicación, asignando un especialista en tu campo para asegurar el mejor resultado posible. </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="opinions">
                    <div className="opinions__content container">
                        <div className="opinions__texts center">
                            <p className="guide">Comentarios de clientes</p>
                            <h2 className="opinions__title title">Respaldados por nuestros Clientes</h2>
                        </div>
                        <div className="opinions__group">
                            {/* <CarrouselClient /> */}
                            <article className="opinion">
                                <p className="opinion__title paragraph">Redacción de Trabajos de Fin de Grado</p>
                                <p className="opinion__paragraph paragraph">Hacéis un gran trabajo, muchas gracias</p>
                                <audio className="opinion__audio" src="#" controls></audio>
                                <div className="opinion__user">
                                    <div className="opinion__texts">
                                        <p className="opinion__name">Paula</p>
                                        <p className="opinion__info">Estudiante de Psicología</p>
                                    </div>
                                    <div className="opinion__image">
                                        <img src="./assets/img/imagen-whatsapp.webp" alt="Foto de perfil de Tesis VIP en WhatsApp" />
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <ContactSection>
                    <Form reverse="true" />
                </ContactSection>
            </main>
            <Footer />
            <WspButton />
        </>
    );
}

export default HomeView;