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
            <audio className="opinion__audio" src={Audio1} controls></audio>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="opinion">
            <p className="opinion__title paragraph">Redacción de Trabajos de Fin de Grado</p>
            <audio className="opinion__audio" src={Audio2} controls></audio>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="opinion">
            <p className="opinion__title paragraph">Redacción de Trabajos de Fin de Grado</p>
            <audio className="opinion__audio" src={Audio3} controls></audio>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="opinion">
            <p className="opinion__title paragraph">Redacción de Trabajos de Fin de Master</p>
            <audio className="opinion__audio" src={Audio4} controls></audio>
          </article>
        </SwiperSlide>
        <SwiperSlide>
        <article className="opinion">
            <p className="opinion__title paragraph">Redacción de Trabajos de Fin de Master</p>
            <audio className="opinion__audio" src={Audio5} controls></audio>
          </article>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
