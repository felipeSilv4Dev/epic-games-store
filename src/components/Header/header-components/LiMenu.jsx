import { NavLink } from "react-router-dom";
import styles from "./LiMenu.module.css";

const LiMenu = ({ text, active }) => {
  return (
    <li>
      <a className={`${styles.link} ${active}`} href={`#${text}`}>
        {text}
      </a>
    </li>
  );
};

export default LiMenu;
