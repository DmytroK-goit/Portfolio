import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import head from "../../../images/Trucks/main_page.jpg";
import mainPage from "../../../images/Trucks/head.jpg";
import settings from "../../../images/Trucks/TrackInfo.png";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
export const Trucks = () => {
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
      <h3 className={s.title}>Trucks Campers</h3>
      <div className={s.container}>
        <ul className={s.list}>
          {[head, mainPage, settings].map((imgSrc, index) => (
            <li key={index} onClick={() => handleOpenModal(imgSrc)}>
              <img src={imgSrc} alt={`Trucks image ${index + 1}`} />
            </li>
          ))}
        </ul>

        <div>
          <p className={s.parag}>
            The React-based application showcases an interface that allows users
            to search and filter results based on various criteria. It makes API
            requests to fetch data, providing dynamic content that updates
            according to user input. This project highlights the integration of
            external data sources and the practical use of React for building
            interactive, data-driven applications.
          </p>
        </div>
      </div>
      <div className={s.cont_button}>
        <p>PRESS</p>
        <FaHandPointRight />
        <a
          href="https://travel-trucks-wine.vercel.app/"
          className={s.but}
          target="_blank"
        >
          Trucks
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
