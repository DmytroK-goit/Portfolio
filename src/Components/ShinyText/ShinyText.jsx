import s from "./ShinyText.module.scss";

const ShinyText = ({
  children,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  return (
    <div
      className={`${s.shinyText} ${disabled ? s.disabled : ""} ${className}`}
      style={{ animationDuration: `${speed}s` }}
    >
      {children}
    </div>
  );
};

export default ShinyText;
