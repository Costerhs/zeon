import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import main from '../Main.module.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style.css';

function Swipers() {
  const slides = [];

  for (let i = 0; i < 7; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src="https://i.ibb.co/nQLvhMB/slife.png"
          style={{ lifeStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>,
    );
  }
  return (
    <div className={main.boss_slides}>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // effect="fade"
        spaceBetween={50}
        id="main"
        tag="section"
        wrapperTag="ul"
        pagination={{
          clickable: true,
        }}>
        {slides}
      </Swiper>
    </div>
  );
}

export default Swipers;
