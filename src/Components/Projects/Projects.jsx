import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import s from "./Projects.module.scss";
import { AquaTrack } from "./AquaTrack/AquaTrack";
import { Finance } from "./Finance/Finance";
import { Movies } from "./Movies/Movies";
import { Portfolio } from "./Portfolio/Portfolio";
import { SparkArt } from "./SparkArt/SparkArt";
import { Trucks } from "./Trucks/Trucks";

export const Projects = () => {
  return (
    <div id="projects" className={s.container}>
      <h2 className={s.title}>Projects</h2>
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
        className={s.mySwiper}
      >
        <SwiperSlide>
          <AquaTrack />
        </SwiperSlide>
        <SwiperSlide>
          <Finance />
        </SwiperSlide>
        <SwiperSlide>
          <Movies />
        </SwiperSlide>
        <SwiperSlide>
          <Portfolio />
        </SwiperSlide>
        <SwiperSlide>
          <SparkArt />
        </SwiperSlide>
        <SwiperSlide>
          <Trucks />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
