import s from "./ShinyText.module.scss";

const ShinyText = ({
  children,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`${s.shinyText} ${disabled ? "s.disabled" : ""} ${className}`}
      style={{ animationDuration }}
    >
      {children}
    </div>
  );
};

export default ShinyText;
