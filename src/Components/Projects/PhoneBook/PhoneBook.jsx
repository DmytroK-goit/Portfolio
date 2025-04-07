import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import head from "../../../images/PhoneBook/multiLang.jpg";
import mainPage from "../../../images/PhoneBook/mainForms.jpg";
import settings from "../../../images/PhoneBook/contacts.jpg";

export const PhoneBook = () => {
  return (
    <div
      className={s.block_project}
      // className={fullscreen ? s.fullscreen : s.normal}
    >
      <h3 className={s.title}>PhoneBook</h3>
      <div className={s.container}>
        <ul className={s.list}>
          <li>
            <img src={head} alt="Head page" />
          </li>
          <li>
            <img src={mainPage} alt="mainPage" />
          </li>
          <li>
            <img src={settings} alt="settings" />
          </li>
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
          href="https://aqua-track-group-01.vercel.app/"
          target="_blank"
        >
          PhoneBook
        </a>
      </div>
    </div>
  );
};
