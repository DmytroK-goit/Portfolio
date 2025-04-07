import React, { useState } from "react";
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
import { PhoneBook } from "./PhoneBook/PhoneBook";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveProject(null);
  };

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
        <SwiperSlide onClick={() => handleOpenModal("AquaTrack")}>
          <AquaTrack />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleOpenModal("Finance")}>
          <Finance />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleOpenModal("PhoneBook")}>
          <PhoneBook />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleOpenModal("Movies")}>
          <Movies />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleOpenModal("Portfolio")}>
          <Portfolio />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleOpenModal("SparkArt")}>
          <SparkArt />
        </SwiperSlide>
        <SwiperSlide onClick={() => handleOpenModal("Trucks")}>
          <Trucks />
        </SwiperSlide>
      </Swiper>

      {isModalOpen && (
        <div className={s.modalOverlay} onClick={handleCloseModal}>
          <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={s.modalCloseBtn} onClick={handleCloseModal}>
              ✖
            </button>
            {activeProject === "AquaTrack" && <AquaTrack fullscreen />}
            {activeProject === "Finance" && <Finance fullscreen />}
            {activeProject === "PhoneBook" && <PhoneBook fullscreen />}
            {activeProject === "Movies" && <Movies fullscreen />}
            {activeProject === "Portfolio" && <Portfolio fullscreen />}
            {activeProject === "SparkArt" && <SparkArt fullscreen />}
            {activeProject === "Trucks" && <Trucks fullscreen />}
          </div>
        </div>
      )}
    </div>
  );
};
