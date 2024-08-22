import { useInView } from "react-intersection-observer";
// eslint-disable-next-line react/prop-types
export default function ContactSection ({children}){

  const [ref, isVisible] =useInView({
    threshold: 0,
    rootMargin: "0px 0px -300px 0px",
  });

  return  (<section className="contact container" ref={ref}>
            <div className={`contact__texts fade-in ${isVisible ? "active" : ""}`}>
                <p className="guide">Contáctanos</p>
                <h2 className="contact__title title">Completa el formulario <br /> para contactarnos</h2>
                <p className="contact__paragraph paragraph">Estamos aquí para escucharte. Ponte en contacto con nuestro
                    equipo para cualquier consulta o sugerencia que tengas.</p>
                <ul className="contact__way">
                    <li className="contact__item">
                        <span className="contact__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-facebook" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.94 2.85 7.19 6.58 7.88v-5.57H4.93V8h1.65V6.23c0-1.62.97-2.5 2.45-2.5.7 0 1.44.13 1.44.13v1.58H9.94c-.89 0-1.17.55-1.17 1.11V8h2l-.32 2.31H8.77v5.57C12.5 15.19 15 11.94 15 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </span>
                        <div className="contact__text">
                            <p className="contact__name paragraph">Facebook</p>
                            <p className="contact__data paragraph">Tesis VIP España</p>
                        </div>
                    </li>
                    <li className="contact__item">
                        <span className="contact__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-telephone" viewBox="0 0 16 16">
                                <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                        </span>
                        <div className="contact__text">
                            <p className="contact__name paragraph">Celular</p>
                            <p className="contact__data paragraph">+34 910 91 84 18</p>
                        </div>
                    </li>
                    <li className="contact__item">
                        <span className="contact__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-envelope" viewBox="0 0 16 16">
                                <path
                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                        </span>
                        <div className="contact__text">
                            <p className="contact__name paragraph">Correo</p>
                            <p className="contact__data paragraph">info@tesis-vip.esp</p>
                        </div>
                    </li>
                </ul>
            </div>
            {children}
        </section>
        )
}