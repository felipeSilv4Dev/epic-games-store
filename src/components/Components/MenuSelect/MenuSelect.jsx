import { useState } from "react";
import styles from "./MenuSelect.module.css";

const style = {
  transform: "rotate(-180deg)",
  top: "-.15rem",
};

const MenuSelect = ({ onSelected, options }) => {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("Em promoção");

  const handleOpenOptions = () => {
    setOpen(!open);
  };

  const handleSelectOption = (option) => {
    setLabel(option);
  };

  return (
    <button
      onBlur={() => open && handleOpenOptions()}
      onClick={handleOpenOptions}
      className={styles.container}
    >
      <p className={`${styles.checked}  flex`}>
        {label}
        <i
          style={open ? style : null}
          className={`${styles.icon}  fa-solid fa-chevron-down`}
        />
      </p>

      {open && (
        <div className={styles.options}>
          {options.map((option) => (
            <p
              key={option}
              className={label === option ? "active" : ""}
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </button>
  );
};

export default MenuSelect;
