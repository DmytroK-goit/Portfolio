import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import finance1 from "../../images/finance/head page.jpg";
import finance2 from "../../images/finance/login page.jpg";
import finance3 from "../../images/finance/head inform.jpg";
import finance4 from "../../images/finance/head inform2.jpg";

import s from "./Projects.module.scss";

export const Projects = () => {
  return (
    <div className={s.container}>
      <h2>Projects</h2>
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
          <img src={finance1} alt="Project 1" width="300" />
          <img src={finance1} alt="Project 1" width="300" />
          <img src={finance1} alt="Project 1" width="300" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            corrupti facilis voluptatum vel provident culpa quasi blanditiis
            nostrum ducimus nihil inventore fuga magnam ad unde, dicta
            perferendis itaque cupiditate atque?
          </p>
          <a href="https://financial-analyst.vercel.app/">Finance App</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={finance2} alt="Project 2" width="300" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            corrupti facilis voluptatum vel provident culpa quasi blanditiis
            nostrum ducimus nihil inventore fuga magnam ad unde, dicta
            perferendis itaque cupiditate atque?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={finance3} alt="Project 3" width="300" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            corrupti facilis voluptatum vel provident culpa quasi blanditiis
            nostrum ducimus nihil inventore fuga magnam ad unde, dicta
            perferendis itaque cupiditate atque?
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={finance4} alt="Project 4" width="300" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            corrupti facilis voluptatum vel provident culpa quasi blanditiis
            nostrum ducimus nihil inventore fuga magnam ad unde, dicta
            perferendis itaque cupiditate atque?
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
