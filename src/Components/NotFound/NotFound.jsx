import { useTranslation } from "react-i18next";
import s from "./NotFound.module.scss";
const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className={s.cont}>
      <a className={s.home_button} href="/">
        {t("notFound.home")}
      </a>
    </div>
  );
};

export default NotFound;
