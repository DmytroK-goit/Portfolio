import s from "./Approach.module.scss";
import ShinyText from "../ShinyText/ShinyText";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Approach = () => {
  const { t } = useTranslation();

  const steps = [
    { id: "01", text: t("approach.s1") },
    { id: "02", text: t("approach.s2") },
    { id: "03", text: t("approach.s3") },
    { id: "04", text: t("approach.s4") },
    { id: "05", text: t("approach.s5") },
  ];

  return (
    <motion.div
      layout
      id="approach"
      className={s.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <ShinyText>
        <h2 className={s.title}>{t("approach.title")}</h2>
      </ShinyText>

      <p className={s.subtitle}>{t("approach.subtitle")}</p>

      <div className={s.steps}>
        {steps.map((step) => (
          <div key={step.id} className={s.step}>
            <div className={s.number}>{step.id}</div>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
