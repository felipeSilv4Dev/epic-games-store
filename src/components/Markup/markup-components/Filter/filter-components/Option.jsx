import React, { useState } from "react";
import styles from "./Option.module.css";

const Option = ({ title, option, setSelected, button = true }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const color = {
    color: active ? "var(--type-2-light)" : "var(--type-4-light)",
  };
  const background = {
    background: active ? "var(--type-4-dark)" : "initial",
    borderColor: active ? "none" : "",
  };
  const transform = { transform: open ? "rotate(180deg)" : "initial" };
  const border = { border: open ? "none" : "" };

  const handleOpen = () => {
    if (!button) return;
    setOpen(!open);
  };

  const handleSelectedOption = () => {
    if (!active) {
      setSelected((select) => (select === option ? "" : option));
    }
    setActive(!active);
  };

  return (
    <div className={`${styles.container} flex`}>
      <button onClick={handleOpen} className={styles.content}>
        <div style={border} className={`${styles.text} flex`}>
          <span>{title}</span>

          {button && option && (
            <i
              style={transform}
              className={`${styles.icon} fa-solid fa-chevron-down`}
            />
          )}
        </div>
      </button>
      {button && open && (
        <button
          style={background}
          onClick={handleSelectedOption}
          className={`${styles.option} flex`}
        >
          <span style={color}>{option}</span>
          {active && <i className={`${styles.icon} fa-solid fa-check`} />}
        </button>
      )}
    </div>
  );
};

export default Option;
