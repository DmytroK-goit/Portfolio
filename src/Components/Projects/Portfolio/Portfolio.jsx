import s from "./Portfolio.module.scss";
import head from "../../../images/portfolio/head_info.jpg";
import mainPage from "../../../images/portfolio/foto.jpg";
import settings from "../../../images/portfolio/projects.jpg";
export const Portfolio = () => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Portfolio </h3>
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
      <a
        href="https://dmytrok-goit.github.io/project-js-group02/"
        target="_blank"
      >
        Portfolio
      </a>
    </div>
  );
};
