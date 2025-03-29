import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import finance1 from "../../images/finance/head page.jpg";
import finance2 from "../../images/finance/login page.jpg";
import finance3 from "../../images/finance/head inform.jpg";
import finance4 from "../../images/finance/head inform2.jpg";

import s from "./Projects.module.scss";
export const Projects = () => {
  return (
    <div className={s.container}>
      <p>Projects</p>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={finance1} alt="Project 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={finance2} alt="Project 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={finance3} alt="Project 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={finance4} alt="Project 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
