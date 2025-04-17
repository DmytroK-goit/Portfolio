import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import head from "../../../images/SparkArt/main.jpg";
import mainPage from "../../../images/SparkArt/about.jpg";
import settings from "../../../images/SparkArt/how.png";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
export const SparkArt = () => {
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
      <h3 className={s.title}>SparkArt</h3>
      <div className={s.container}>
        <ul className={s.list}>
          {[head, mainPage, settings].map((imgSrc, index) => (
            <li key={index} onClick={() => handleOpenModal(imgSrc)}>
              <img src={imgSrc} alt={`SparkArt image ${index + 1}`} />
            </li>
          ))}
        </ul>

        <div>
          <p className={s.parag}>
            The landing page for Spark Art showcases a creative and visually
            appealing design focused on presenting the brand's services and
            offerings. It emphasizes user-friendly navigation and an engaging
            layout, likely aimed at attracting potential customers or clients.
            The design is modern, with a clear focus on aesthetics and
            functionality.
          </p>
        </div>
      </div>{" "}
      <div className={s.cont_button}>
        <p>PRESS</p>
        <FaHandPointRight />
        <a
          href="https://dmytrok-goit.github.io/stp-7973/"
          className={s.but}
          target="_blank"
        >
          SparkArt
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
