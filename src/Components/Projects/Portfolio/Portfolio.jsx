import s from "../IndividualStyles.module.scss";
import head from "../../../images/portfolio/head_info.jpg";
import mainPage from "../../../images/portfolio/foto.jpg";
import settings from "../../../images/portfolio/projects.jpg";
import { FaHandPointRight } from "react-icons/fa";
export const Portfolio = () => {
  return (
    <div>
      {" "}
      <h3 className={s.title}>Portfolio</h3>
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
    </div>
  );
};
