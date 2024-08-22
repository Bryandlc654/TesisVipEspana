import { useInView } from "react-intersection-observer";
import { useAnimatedNumber } from "../../hooks/useAnimatedNumber";

export default function InfoSection () {

    const { ref: infoRef, inView: isInfoVisible } = useInView({
        threshold: 0.1,
    });
    const { ref: numberRef, inView: inViewNumber } = useInView({
        threshold: 1,
    });
    const { ref: projectsRef, inView: inViewProjects } = useInView({
        threshold: 1,
    });
    const { ref: yearsRef, inView: inViewYears } = useInView({
        threshold: 1,
    });
    const { ref: recommendedRef, inView: inViewRecommended } = useInView({
        threshold: 1,
    });

    const number = useAnimatedNumber(0, 120, 10, 75, inViewNumber);
    const projects = useAnimatedNumber(0, 100, 10, 90, inViewProjects);
    const years = useAnimatedNumber(0, 10, 1, 100, inViewYears);
    const recommended = useAnimatedNumber(0, 100, 12, 120, inViewRecommended);
  return (
    <section className={`info aparecer ${isInfoVisible ? 'active' : ''}`} ref={infoRef}>
            <div className="info__content container">
                <div className="info__texts">
                    <span className="info__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-person" viewBox="0 0 16 16">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                    </span>
                    <p className="info__text" ref={numberRef}>+ {number}</p>
                    <p className="info__name">Clientes</p>
                </div>
                <div className="info__texts">
                    <span className="info__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-journal-richtext" viewBox="0 0 16 16">
                            <path
                                d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208M5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                            <path
                                d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                            <path
                                d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                        </svg>
                    </span>
                    <p className="info__text" ref={projectsRef}>{projects}%</p>
                    <p className="info__name">Proyectos Completados</p>
                </div>
                <div className="info__texts">
                    <span className="info__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-award" viewBox="0 0 16 16">
                            <path
                                d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                        </svg>
                    </span>
                    <p className="info__text" ref={yearsRef}>+ {years}</p>
                    <p className="info__name">Años de Experiencia</p>
                </div>
                <div className="info__texts">
                    <span className="info__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-star" viewBox="0 0 16 16">
                            <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                        </svg>
                    </span>
                    <p className="info__text" ref={recommendedRef}>{recommended}%</p>
                    <p className="info__name">Recomendado</p>
                </div>
            </div>
      </section>
  )
}