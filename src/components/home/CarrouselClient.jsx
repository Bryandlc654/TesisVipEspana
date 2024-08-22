import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carrousel.css';

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
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className='container'
        style={{paddingBottom: "100px 0"}}
      >
        <SwiperSlide>
        <figure className="opinions__figure">
                            <img className="opinions__img" src="./assets/img/opinion-1.webp" loading="lazy"
                                alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos" />
                        </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="opinions__figure">
                            <img className="opinions__img" src="./assets/img/opinion-2.webp" loading="lazy"
                                alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos" />
                        </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="opinions__figure">
                            <img className="opinions__img" src="./assets/img/opinion-3.webp" loading="lazy"
                                alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos" />
                        </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure className="opinions__figure">
                            <img className="opinions__img" src="./assets/img/opinion-4.webp" loading="lazy"
                                alt="Captura de pantalla de whatsapp sobre un cliente agradeciendo nuestros servicios que ofrecemos" />
                        </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
