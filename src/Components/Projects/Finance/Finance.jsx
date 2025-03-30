import s from "../IndividualStyles.module.scss";
import head from "../../../images/finance/head page.jpg";
import mainPage from "../../../images/finance/head inform.jpg";
import settings from "../../../images/finance/head inform2.jpg";
import { FaHandPointRight } from "react-icons/fa";
export const Finance = () => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Finance</h3>
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
          href="https://financial-analyst.vercel.app/"
          className={s.but}
          target="_blank"
        >
          Finance APP
        </a>
      </div>
    </div>
  );
};
