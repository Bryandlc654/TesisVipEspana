import {useInView} from 'react-intersection-observer';
// eslint-disable-next-line react/prop-types
function Card({name, info, path}){

  const {ref, inView: isVisible} =useInView({
    threshold: 0,
    rootMargin: "-200px 0px -100px 0px",
  });

  return (
    <li className={`info-contact__item fade-in ${isVisible ? "active" : ""}`} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          viewBox="0 0 16 16">
          <path d={path} />
      </svg>
      <div className="info-contact__contact">
          <p className="info-contact__name">{name}</p>
          <p className="info-contact__info">{info}</p>
      </div>
  </li>
  )
}

export default Card;