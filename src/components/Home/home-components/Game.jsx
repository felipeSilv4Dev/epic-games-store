import styles from "./Game.module.css";

const Game = ({ id, title, img, setClick }) => {
  return (
    <div onClick={setClick} id={id} className={styles.container + " flex"}>
      <span className={styles.timeBg}></span>
      <img className={styles.photo} src={img.src1} alt={title} />
      <p className={styles.name}>{title}</p>
    </div>
  );
};

export default Game;
