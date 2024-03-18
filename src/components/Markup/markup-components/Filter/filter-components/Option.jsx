import React, { useState } from "react";
import styles from "./Option.module.css";

const Option = ({ title, option }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className={styles.container + " flex"}>
      <button
        onClick={() => (option ? setOpen(!open) : null)}
        className={styles.content}
      >
        <div
          style={{ border: open ? "none" : "" }}
          className={styles.text + " flex"}
        >
          <span>{title}</span>
          {option && (
            <i
              style={{ transform: open ? "rotate(180deg)" : "initial" }}
              className={styles.icon + " fa-solid fa-chevron-down"}
            />
          )}
        </div>
      </button>
      {open && (
        <button
          onClick={() => setActive(!active)}
          className={styles.option + " flex"}
          style={{
            background: active ? "var(--type-4-dark)" : "initial",
            borderColor: active ? "none" : "",
          }}
        >
          <span
            style={{
              color: active ? "var(--type-2-light)" : "var(--type-4-light)",
            }}
          >
            {option}
          </span>
          {active && <i className={styles.icon + " fa-solid fa-check"} />}
        </button>
      )}
    </div>
  );
};

export default Option;
