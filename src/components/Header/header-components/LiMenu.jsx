import styles from "./LiMenu.module.css";

const LiMenu = ({ text }) => {
  return (
    <li>
      <a className={styles.link} href={`#${text}`}>
        {text}
      </a>
    </li>
  );
};

export default LiMenu;
