import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
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
import { PhoneBook } from "./PhoneBook/PhoneBook";
import { Istore } from "./Istore/istore";

const slides = [
  <Istore />,
  <Finance />,
  <AquaTrack />,
  <PhoneBook />,
  <Movies />,
  <Portfolio />,
  <SparkArt />,
  <Trucks />,
];

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div layout id="projects" className={s.container}>
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
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className={s.mySwiper}
      >
        {slides.map((Component, index) => (
          <SwiperSlide key={index}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={
                activeIndex === index
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 70 }
              }
              transition={{ duration: 0.6 }}
            >
              {Component}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};
