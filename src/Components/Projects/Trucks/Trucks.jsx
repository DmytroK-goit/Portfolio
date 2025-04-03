import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import head from "../../../images/Trucks/main_page.jpg";
import mainPage from "../../../images/Trucks/head.jpg";
import settings from "../../../images/Trucks/TrackInfo.png";
export const Trucks = () => {
  return (
    <div>
      <h3 className={s.title}>Trucks Campers</h3>
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
    </div>
  );
};
