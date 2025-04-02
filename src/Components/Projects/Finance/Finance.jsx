import s from "../IndividualStyles.module.scss";
import head from "../../../images/finance/head page.jpg";
import mainPage from "../../../images/finance/head inform.jpg";
import settings from "../../../images/finance/head inform2.jpg";
import { FaHandPointRight } from "react-icons/fa";
export const Finance = () => {
  return (
    <div>
      <div className={s.container}>
        <ul className={s.list}>
          <h3 className={s.title}>Finance</h3>
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
            Financial Analyst is a personal full-stack project designed for
            tracking and managing personal income and expenses. It provides
            features for analyzing finances on a monthly and yearly basis,
            adding transactions, and visualizing financial data with charts. The
            platform also includes user registration and authentication for
            secure access.
          </p>
        </div>
      </div>{" "}
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
