import s from "../IndividualStyles.module.scss";
import head from "../../../images/movies/head.jpg";
import mainPage from "../../../images/movies/movie info.jpg";
import settings from "../../../images/movies/Search.jpg";
import { FaHandPointRight } from "react-icons/fa";
export const Movies = () => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Movies</h3>
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
          className={s.but}
          href="https://goit-react-hw-05-three-beige.vercel.app/"
          target="_blank"
        >
          Movies
        </a>
      </div>
    </div>
  );
};
