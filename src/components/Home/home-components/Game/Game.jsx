import styles from "./Game.module.css";
import Image from "../../../Components/Image/Image";

const Game = ({ game, onMoveGame, count, index, interval }) => {
  const intervalActive = {
    transition: `width ${interval}s linear`,
    width: "100%",
  };

  const intervalDisabled = {
    width: "0",
  };
  return (
    <div
      id={game.id}
      onClick={() => onMoveGame(index, game.id)}
      className={`${styles.container} ${count === index ? "active" : ""} flex`}
    >
      <span
        style={count === index ? intervalActive : intervalDisabled}
        className={styles.timeBg}
      ></span>

      <div className={styles.photo}>
        <Image src={game.img.src1} alt={game.title} />
      </div>

      <p className={styles.name}>{game.title}</p>
    </div>
  );
};

export default Game;
