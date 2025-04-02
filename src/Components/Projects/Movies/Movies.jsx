import s from "../IndividualStyles.module.scss";
import head from "../../../images/movies/head.jpg";
import mainPage from "../../../images/movies/movie info.jpg";
import settings from "../../../images/movies/Search.jpg";
import { FaHandPointRight } from "react-icons/fa";
export const Movies = () => {
  return (
    <div>
      <div className={s.container}>
        <ul className={s.list}>
          <h3 className={s.title}>Movies</h3>
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
            This project is a React-based application built with Vite, utilizing
            a public API. It demonstrates modern front-end development
            practices, including interactive UI components, state management,
            and data fetching from external sources. The focus is on creating a
            responsive, user-friendly interface that highlights React skills in
            real-world scenarios. This project is ideal for showcasing practical
            experience with APIs and dynamic content handling.
          </p>
        </div>
      </div>
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
