import { useState } from "react";
import styles from "./MenuSelect.module.css";

const MenuSelect = ({ setIdOptions }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("Em promoção");

  const style = {
    transform: "rotate(-180deg)",
    top: "-.15rem",
  };
  const options = [
    "Em promoção",
    "Adicionado recentemente",
    "Ordem Alfabética",
    "Preço: Crescente",
    "Preço: Decrescente",
  ];

  return (
    <button
      onBlur={() => setOpen(false)}
      onClick={() => setOpen(!open)}
      className={styles.container}
    >
      <p className={styles.checked + " flex"}>
        {current}
        <i
          style={open ? style : null}
          className={styles.icon + " fa-solid fa-chevron-down"}
        />
      </p>

      {open && (
        <div
          onClick={({ target }) => {
            setIdOptions(Number(target.id));
            setCurrent(target.textContent);
          }}
          className={styles.options}
        >
          {options.map((op, i) => (
            <p key={op} id={i + 1} className={current === op ? " active" : ""}>
              {op}
            </p>
          ))}
        </div>
      )}
    </button>
  );
};

export default MenuSelect;
