import s from "../IndividualStyles.module.scss";
import head from "../../../images/portfolio/head_info.jpg";
import mainPage from "../../../images/portfolio/foto.jpg";
import settings from "../../../images/portfolio/projects.jpg";
import { FaHandPointRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
export const Portfolio = () => {
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
      {" "}
      <h3 className={s.title}>Portfolio</h3>
      <div className={s.container}>
        <ul className={s.list}>
          {[head, mainPage, settings].map((imgSrc, index) => (
            <li key={index} onClick={() => handleOpenModal(imgSrc)}>
              <img src={imgSrc} alt={`Portfolio image ${index + 1}`} />
            </li>
          ))}
        </ul>

        <div>
          <p className={s.parag}>
            Team project. A website with a responsive layout. Role: Team Lead,
            developer. As a team lead on the project, I needed to set up a
            GitHub repository for project contributors, as well as hook up
            styles with basic settings and fonts. As a team leader, I checked,
            accepted pull requests, and helped project participants. As a
            developer I was responsible for the "work-together" section.
          </p>
        </div>
      </div>
      <div className={s.cont_button}>
        <p>PRESS</p>
        <FaHandPointRight />
        <a
          className={s.but}
          href="https://dmytrok-goit.github.io/project-js-group02/"
          target="_blank"
        >
          Portfolio
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
