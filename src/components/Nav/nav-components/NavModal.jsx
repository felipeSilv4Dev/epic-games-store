import styles from "./NavModal.module.css";

const NavModal = ({ setNav, nav }) => {
  return (
    <>
      <div
        onClick={() => setNav(false)}
        className={styles.overlay + `${nav ? " active" : ""}`}
      ></div>
      <div className={styles.container + `${nav ? " active" : ""}`}>
        <div className={styles.content}>
          <li>
            <a href="#de">Descobrir</a>
          </li>
          <li>
            <a href="#nav">Navegar</a>
          </li>
          <li>
            <a href="#nov">Navegar</a>
          </li>
        </div>
      </div>
    </>
  );
};

export default NavModal;
