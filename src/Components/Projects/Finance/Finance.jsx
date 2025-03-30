import s from "./Finance.module.scss";
import head from "../../../images/finance/head page.jpg";
import mainPage from "../../../images/finance/head inform.jpg";
import settings from "../../../images/finance/head inform2.jpg";
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
      <a href="https://financial-analyst.vercel.app/" target="_blank">
        Finance APP
      </a>
    </div>
  );
};
