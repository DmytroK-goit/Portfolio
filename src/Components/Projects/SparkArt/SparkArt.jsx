import s from "../IndividualStyles.module.scss";
import { FaHandPointRight } from "react-icons/fa";
import head from "../../../images/SparkArt/main.jpg";
import mainPage from "../../../images/SparkArt/about.jpg";
import settings from "../../../images/SparkArt/how.png";
export const SparkArt = () => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>SparkArt </h3>
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
          href="https://dmytrok-goit.github.io/stp-7973/"
          className={s.but}
          target="_blank"
        >
          SparkArt
        </a>
      </div>
    </div>
  );
};
