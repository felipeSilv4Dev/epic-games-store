import { useRef } from "react";
import styles from "./ModalMobile.module.css";
import Icon from "./header-components/Icon";

const ModalMobile = ({ modal, setModal, children }) => {
  const container = useRef();

  return (
    <div
      ref={container}
      className={styles.container + `${modal ? " active" : ""}`}
    >
      <div className={styles.back}>
        <span className="flex" onClick={() => setModal(false)}>
          <Icon classe=" fa-solid fa-chevron-down" />
          <p>Voltar</p>
        </span>
      </div>

      <div className={styles.language}>{children}</div>
    </div>
  );
};

export default ModalMobile;
