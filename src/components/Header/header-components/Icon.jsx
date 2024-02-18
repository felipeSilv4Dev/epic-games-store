import styles from "./Icon.module.css";

const Icon = ({ classe }) => {
  return <i className={`${styles.icon} ${classe}`}></i>;
};

export default Icon;
