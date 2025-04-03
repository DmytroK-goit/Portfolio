import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import head from "../../../images/AquaTrack/head.jpg";
import mainPage from "../../../images/AquaTrack/mainPage.jpg";
import settings from "../../../images/AquaTrack/settings.jpg";

export const AquaTrack = () => {
  return (
    <div>
      <h3 className={s.title}>AquaTrack</h3>
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
        >
          AquaTrack
        </a>
      </div>
    </div>
  );
};
