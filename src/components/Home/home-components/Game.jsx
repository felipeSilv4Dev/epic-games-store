import styles from "./Game.module.css";
import Image from "../../Components/Image/Image";

const Game = ({ id, title, img, setClick }) => {
  return (
    <div onClick={setClick} id={id} className={styles.container + " flex"}>
      <span className={styles.timeBg}></span>

      <div className={styles.photo}>
        <Image src={img.src1} alt={title} />
      </div>

      <p className={styles.name}>{title}</p>
    </div>
  );
};

export default Game;
