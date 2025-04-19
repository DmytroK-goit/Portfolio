import s from "../IndividualStyles.module.scss";
import head from "../../../images/movies/head.jpg";
import mainPage from "../../../images/movies/movie info.jpg";
import settings from "../../../images/movies/Search.jpg";
import { FaHandPointRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

export const Movies = () => {
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
      <h3 className={s.title}>Movies App</h3>
      <div className={s.container}>
        <ul className={s.list}>
          {[head].map((imgSrc, index) => (
            <li key={index}>
              <img
                className={s.project_img}
                src={imgSrc}
                alt={`Movies image ${index + 1}`}
              />
            </li>
          ))}
        </ul>

        <div>
          <p className={s.parag}>
            This project is a React-based application built with Vite, utilizing
            a public API. It demonstrates modern front-end development
            practices, including interactive UI components, state management,
            and data fetching from external sources. The focus is on creating a
            responsive, user-friendly interface that highlights React skills in
            real-world scenarios. This project is ideal for showcasing practical
            experience with APIs and dynamic content handling.
          </p>
        </div>
      </div>
      <div className={s.cont_button}>
        <p>PRESS</p>
        <FaHandPointRight />
        <a
          className={s.but}
          href="https://goit-react-hw-05-three-beige.vercel.app/"
          target="_blank"
        >
          Movies
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
