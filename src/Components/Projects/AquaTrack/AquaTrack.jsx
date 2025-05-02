import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";

import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
export const AquaTrack = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpenModal = (imgSrc) => {
    setSelectedImg(imgSrc);
  };

  const handleCloseModal = () => {
    setSelectedImg(null);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedImg) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImg]);

  return (
    <div className={`${s.block_project} ${s.aquaTrack}`}>
      <h3 className={s.title}>AquaTrack</h3>
      <div className={s.container}>
        <img
          className={s.project_img}
          loading="lazy"
          width="550"
          src="/AquaTrack/head.jpg"
          alt="AquaTrack image"
        />
        {/* <ul className={s.list}>
          <li></li>
        </ul> */}
        <div>
          <p className={s.parag}>
            Team project. The Aqua Track application is a hydration tracking
            tool designed to help users monitor and improve their daily water
            intake. As the Front-End Team Lead for the Aqua Track project, I led
            the development of the user interface using React, managed the
            application's state with Redux, and provided support to the
            development team. Server part is developed with Mongo DB.
          </p>
        </div>
      </div>
      <div className={s.cont_button}>
        <p>PRESS</p>
        <FaHandPointRight />
        <motion.a
          className={s.but}
          href="https://aqua-track-group-01.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          animate={{
            scale: [1, 1.05, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          AquaTrack
        </motion.a>
      </div>
      {selectedImg && (
        <div className={s.modalOverlay} onClick={handleCloseModal}>
          <div
            className={s.modalImageWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={s.modalCloseBtn} onClick={handleCloseModal}>
              <VscChromeClose />
            </button>
            <img src={selectedImg} alt="Zoomed AquaTrack" />
          </div>
        </div>
      )}
    </div>
  );
};
