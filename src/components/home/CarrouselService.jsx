import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carrousel.css';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function CarrouselService() {
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
        <SwiperSlide><article className="card">
                    <img src="./assets/img/servicio-1.webp" alt="Imagen referencial a nuestro servicio de Redacción de Trabajos de Fin de Grado" loading="lazy" />
                    <div className="card-content">
                        <h3 className="card-title">Redacción de Trabajos <br /> de Fin de Grado</h3>
                        <a className="btn btn-primary card-button" target='_blank' href="https://wa.link/bwcii3">Contratar</a>
                    </div>
                </article></SwiperSlide>
        <SwiperSlide><article className="card">
                    <img src="./assets/img/servicio-2.webp" alt="Imagen referencial a nuestro servicio de Redacción de Trabajos de Fin de Máster" loading="lazy" />
                    <div className="card-content">
                        <h3 className="card-title">Redacción de Trabajos <br /> de Fin de Máster</h3>
                        <a className="btn btn-primary card-button" target='_blank' href="https://wa.link/778eja">Contratar</a>
                    </div>
                </article></SwiperSlide>
        <SwiperSlide><article className="card">
                    <img src="./assets/img/servicio-4.webp" alt="Imagen referencial a nuestro servicio de Levantamiento de Observaciones" loading="lazy" />
                    <div className="card-content">
                        <h3 className="card-title">Levantamiento de <br /> Observaciones</h3>
                        <a className="btn btn-primary card-button" target='_blank' href="https://wa.link/l3xagw">Contratar</a>
                    </div>
                </article></SwiperSlide>
        <SwiperSlide><article className="card">
                    <img src="./assets/img/servicio-3.webp" alt="Imagen referencial a nuestro servicio de Asesoría para TFG y TFM" loading="lazy" />
                    <div className="card-content">
                        <h3 className="card-title">Asesoría para <br /> TFG y TFM</h3>
                        <a className="btn btn-primary card-button" target='_blank' href="https://wa.link/2g07pv">Contratar</a>
                    </div>
                </article></SwiperSlide>
      </Swiper>
    </>
  );
}
