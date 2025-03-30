import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import head from "../../../images/Trucks/main_page.jpg";
import mainPage from "../../../images/Trucks/head.jpg";
import settings from "../../../images/Trucks/TrackInfo.png";
export const Trucks = () => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Trucks</h3>
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
      <p className={s.parag}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam
        nam quibusdam libero velit, hic laborum error incidunt voluptatum
        quisquam aut, impedit rerum molestiae blanditiis architecto ea.
        Doloremque, saepe sed.
      </p>
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
