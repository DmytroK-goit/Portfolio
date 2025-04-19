import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import head from "../../../images/PhoneBook/multiLang.jpg";
import mainPage from "../../../images/PhoneBook/mainForms.jpg";
import settings from "../../../images/PhoneBook/contacts.jpg";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
export const PhoneBook = () => {
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
    <div
      className={s.block_project}
      // className={fullscreen ? s.fullscreen : s.normal}
    >
      <h3 className={s.title}>PhoneBook</h3>
      <div className={s.container}>
        <ul className={s.list}>
          {[mainPage].map((imgSrc, index) => (
            <li key={index}>
              <img
                className={s.project_img}
                src={imgSrc}
                alt={`PhoneBook image ${index + 1}`}
              />
            </li>
          ))}
        </ul>

        <div>
          <p className={s.parag}>
            A full stack application for managing personal contacts. Users can
            register, add, edit, delete, and view contacts with sorting and
            filtering options for easier navigation. The app also supports
            multilingual functionality for a better user experience. All data is
            securely stored in MongoDB. The frontend is built with React, and
            the backend uses Node.js and Express to handle RESTful API requests.
          </p>
        </div>
      </div>
      <div className={s.cont_button}>
        <p>PRESS</p>
        <FaHandPointRight />
        <a
          className={s.but}
          href="https://phone-book-full-stack.vercel.app/"
          target="_blank"
        >
          PhoneBook
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
