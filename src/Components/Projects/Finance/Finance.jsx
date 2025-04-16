import s from "../IndividualStyles.module.scss";
import head from "../../../images/finance/head page.jpg";
import mainPage from "../../../images/finance/head inform.jpg";
import settings from "../../../images/finance/head inform2.jpg";
import { FaHandPointRight } from "react-icons/fa";
import { useEffect, useState } from "react";
export const Finance = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpenModal = (imgSrc) => {
    setSelectedImg(imgSrc);
  };

  const handleCloseModal = () => {
    setSelectedImg(null);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);

      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedImg) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImg]);

  return (
    <div className={s.block_project}>
      <h3 className={s.title}>Finance App</h3>
      <div className={s.container}>
        <ul className={s.list}>
          {[head, mainPage, settings].map((imgSrc, index) => (
            <li key={index} onClick={() => handleOpenModal(imgSrc)}>
              <img src={imgSrc} alt={`Finance image ${index + 1}`} />
            </li>
          ))}
        </ul>

        <div>
          <p className={s.parag}>
            Financial Analyst is a personal full-stack project designed for
            tracking and managing personal income and expenses. It provides
            features for analyzing finances on a monthly and yearly basis,
            adding transactions, and visualizing financial data with charts. The
            platform also includes user registration and authentication for
            secure access. The project is currently in active development.
          </p>
        </div>
      </div>
      <div className={s.cont_button}>
        <p>PRESS</p>
        <FaHandPointRight />
        <a
          href="https://financial-analyst.vercel.app/"
          className={s.but}
          target="_blank"
        >
          Finance APP
        </a>
      </div>
      {selectedImg && (
        <div className={s.modalOverlay} onClick={handleCloseModal}>
          <div
            className={s.modalImageWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={s.modalCloseBtn} onClick={handleCloseModal}>
              &times;
            </button>
            <img src={selectedImg} alt="Zoomed AquaTrack" />
          </div>
        </div>
      )}
    </div>
  );
};
