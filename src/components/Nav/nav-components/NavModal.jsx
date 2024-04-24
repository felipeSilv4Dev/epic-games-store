import styles from "./NavModal.module.css";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/">Descobrir</NavLink>
          </li>
          <li>
            <NavLink to="navegar">Navegar</NavLink>
          </li>

          <li>
            <NavLink to="novidades">Novidades</NavLink>
          </li>
        </div>
      </div>
    </>
  );
};

export default NavModal;
