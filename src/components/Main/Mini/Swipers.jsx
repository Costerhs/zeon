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
        <a href='https://www.youtube.com/'>
          <div>
            <div className={main.lor}>
              <div className={main.fLor}><p className={main.firstlor}>Lorem ipsum</p></div>
              <div className={main.fsor}><p className={main.slor}>Lorem Lorem isum ipsum</p></div>
            </div>
            <img
              className={main.imgSwipe}
              src="https://i.ibb.co/nQLvhMB/slife.png"
              style={{ lifeStyle: 'none' }}
              alt={`Slide ${i}`}
            />
            <div className={main.precent}>
              <div className={main.sale}>Sale</div>
              <div className={main.tree}>30%</div>
              <div className={main.allFor}>for all</div>
            </div>
          </div>
        </a>
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
