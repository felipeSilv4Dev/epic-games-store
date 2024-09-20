import { useEffect, useState } from "react";
import styles from "./CardMarkup.module.css";
import Price from "../Price/Price";
import review from "../../../../public/img/assets/review.png";
import Image from "../Image/Image";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../LoadingButton/LoadingButton";
import useMatch from "../../../Hooks/useMatch";

const CardMarkup = ({
  game,
  onRemove,
  onSaveLocal,
  KEY,
  car = false,
  list = false,
  storage,
}) => {
  const [loading, setLoading] = useState(false);
  const [remove, setRemove] = useState(false);
  const [isSave, setIsSave] = useState(false);

  const match = useMatch("48em");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/game/${game.id}`);
  };

  useEffect(() => {
    if (storage && storage[KEY].includes(game.id)) {
      setIsSave(true);
    } else {
      setIsSave(false);
    }
  }, [storage, game, setIsSave, KEY]);

  const handleRemove = () => {
    setRemove(true);
    setTimeout(() => {
      setRemove(false);
      onRemove(game.id);
      setIsSave(true);
    }, 200);
  };

  const handleAddItemList = () => {
    setLoading(true);
    setIsSave(true);

    setTimeout(() => {
      setLoading(false);
      onSaveLocal(KEY, game.id);
      {
        car && onRemove(game.id);
      }
    }, 200);
  };

  return (
    <section id={game.id} className={styles.container}>
      <div>
        <div className={styles.image + " flex"}>
          <div onClick={handleClick} className={styles.imgContianer + " flex"}>
            <Image src={game.img.src1} alt={game.title} />
          </div>
          <div className={styles.content}>
            <div className={styles.infoImage + " flex"}>
              <div>
                <span>{game.subtitle}</span>
                <span>Acesso antecipado</span>
                <h2 className={styles.title}>{game.title}</h2>
              </div>

              <div className={styles.price + " flex"}>
                <Price
                  oldPrice={game.oldPrice}
                  newPrice={game.newPrice}
                  porcentage={game.porcentage}
                />
                <p>A promoção termina 19/03/2024 às 12:00</p>
              </div>
            </div>
            <div className={styles.review + " flex"}>
              <Image src={review} alt="livre" />

              <p>Livre</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.porcentage + " flex"}>
        <i className={styles.icon + " fa-brands fa-windows"}></i>
        <p>
          Ganhe 10% de volta em recompensas Epic turbinadas, a oferta termina em
          28 de mar...
        </p>
      </div>

      <div className={styles.btn + " flex"}>
        <span onClick={handleRemove}>
          {remove ? <LoadingButton /> : "remover"}
        </span>

        <Button btn="secondary" onClick={handleAddItemList}>
          {car &&
            (loading ? (
              <LoadingButton />
            ) : isSave ? (
              "Na lista dos desejos"
            ) : (
              "Mover para lista de desejos"
            ))}
          {list &&
            (loading ? (
              <LoadingButton />
            ) : isSave ? (
              "visualizar carrinho"
            ) : (
              "Adicionar ao carrinho"
            ))}
        </Button>
      </div>
    </section>
  );
};

export default CardMarkup;
