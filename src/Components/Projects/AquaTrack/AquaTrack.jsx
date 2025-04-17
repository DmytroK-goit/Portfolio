import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import head from "../../../images/AquaTrack/head.jpg";
import mainPage from "../../../images/AquaTrack/mainPage.jpg";
import settings from "../../../images/AquaTrack/settings.jpg";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

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
    <div className={s.block_project}>
      <h3 className={s.title}>AquaTrack</h3>
      <div className={s.container}>
        <ul className={s.list}>
          {[head, mainPage, settings].map((imgSrc, index) => (
            <li key={index} onClick={() => handleOpenModal(imgSrc)}>
              <img src={imgSrc} alt={`AquaTrack image ${index + 1}`} />
            </li>
          ))}
        </ul>
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
        <a
          className={s.but}
          href="https://aqua-track-group-01.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AquaTrack
        </a>
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
