import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carrousel.css';
import Audio1 from "/public/audios/1.mp3"
import Audio2 from "/public/audios/2.mp3"
import Audio3 from "/public/audios/3.mp3"
import Audio4 from "/public/audios/4.mp3"
import Audio5 from "/public/audios/5.mp3"

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function CarrouselClient() {
  const handlePlayClick1 = () => {
      const audio = document.getElementById("audio1");
      const btn = document.getElementById("btn1");

      audio.setAttribute("controls", true);
      audio.play();

      btn.style.display = "none";

      audio.onpause = function() {
        btn.style.display = "flex";
        audio.removeAttribute("controls");
      };
  };

  const handlePlayClick2 = () => {
    const audio = document.getElementById("audio2");
    const btn = document.getElementById("btn2");

    audio.setAttribute("controls", true);
    audio.play();

    btn.style.display = "none";

    audio.onpause = function() {
      btn.style.display = "flex";
      audio.removeAttribute("controls");
    };
  };

  const handlePlayClick3 = () => {
    const audio = document.getElementById("audio3");
    const btn = document.getElementById("btn3");

    audio.setAttribute("controls", true);
    audio.play();

    btn.style.display = "none";

    audio.onpause = function() {
      btn.style.display = "flex";
      audio.removeAttribute("controls");
    };
  };

  const handlePlayClick4 = () => {
    const audio = document.getElementById("audio4");
    const btn = document.getElementById("btn4");

    audio.setAttribute("controls", true);
    audio.play();

    btn.style.display = "none";

    audio.onpause = function() {
      btn.style.display = "flex";
      audio.removeAttribute("controls");
    };
  };

  const handlePlayClick5 = () => {
    const audio = document.getElementById("audio5");
    const btn = document.getElementById("btn5");

    audio.setAttribute("controls", true);
    audio.play();

    btn.style.display = "none";

    audio.onpause = function() {
      btn.style.display = "flex";
      audio.removeAttribute("controls");
    };
  };

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 960) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1280) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        loop={true}
        speed={100}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        className='container'
        style={{ paddingBottom: "100px 0" }}
      >
        <SwiperSlide>
          <article className="opinion">
            <p className="opinion__title paragraph">Redacción de Trabajos de Fin de Master</p>
            <audio id="audio1" className="opinion__audio" src={Audio1}></audio>
            <button id="btn1" onClick={handlePlayClick1} className="opinion__btn-audio" title="Reproducir audio">
                <svg className="video__btn-icon" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
            </button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="opinion">
            <p className="opinion__title paragraph">Redacción de Trabajos de Fin de Grado</p>
            <audio id="audio2" className="opinion__audio" src={Audio2}></audio>
            <button id="btn2" onClick={handlePlayClick2} className="opinion__btn-audio" title="Reproducir audio">
                <svg className="video__btn-icon" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
            </button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="opinion">
            <p className="opinion__title paragraph">Redacción de Trabajos de Fin de Grado</p>
            <audio id="audio3" className="opinion__audio" src={Audio3}></audio>
            <button id="btn3" onClick={handlePlayClick3} className="opinion__btn-audio" title="Reproducir audio">
                <svg className="video__btn-icon" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
            </button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="opinion">
            <p className="opinion__title paragraph">Redacción de Trabajos de Fin de Master</p>
            <audio id="audio4" className="opinion__audio" src={Audio4}></audio>
            <button id="btn4" onClick={handlePlayClick4} className="opinion__btn-audio" title="Reproducir audio">
                <svg className="video__btn-icon" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
            </button>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="opinion">
            <p className="opinion__title paragraph">Redacción de Trabajos de Fin de Master</p>
            <audio id="audio5" className="opinion__audio" src={Audio5}></audio>
            <button id="btn5" onClick={handlePlayClick5} className="opinion__btn-audio" title="Reproducir audio">
                <svg className="video__btn-icon" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
            </button>
          </article>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
