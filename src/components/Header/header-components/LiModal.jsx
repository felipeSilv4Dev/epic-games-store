import styles from "./LiModal.module.css";
import Icon from "./Icon";

const LiModal = ({ classe, text }) => {
  return (
    <div className={styles.link}>
      <Icon classe={classe} />
      <li>{text}</li>
    </div>
  );
};

export default LiModal;
