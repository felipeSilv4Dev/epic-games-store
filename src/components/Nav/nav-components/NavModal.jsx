import styles from "./NavModal.module.css";
import { NavLink } from "react-router-dom";

const NavModal = ({ setNav, nav, pathNow }) => {
  return (
    <>
      <div
        onClick={() => setNav(false)}
        className={styles.overlay + `${nav ? " active" : ""}`}
      ></div>
      <div className={styles.container + `${nav ? " active" : ""}`}>
        <div className={styles.content}>
          <li onClick={() => pathNow()}>
            <NavLink to="/">Descobrir</NavLink>
          </li>
          <li onClick={() => pathNow()}>
            <NavLink to="navegar">Navegar</NavLink>
          </li>

          <li onClick={() => pathNow()}>
            <NavLink to="novidades">Novidade</NavLink>
          </li>
        </div>
      </div>
    </>
  );
};

export default NavModal;
