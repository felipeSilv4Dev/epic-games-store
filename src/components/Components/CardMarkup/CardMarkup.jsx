import { useCallback, useEffect } from "react";
import styles from "./CardMarkup.module.css";
import Price from "../Price/Price";
import review from "../../../../public/img/assets/review.png";
import Image from "../Image/Image";
import Button from "../Button/Button";
import useLocalStorage from "../../../Hooks/useLocalStore";
import { NavLink } from "react-router-dom";

const CardMarkup = ({
  img,
  title,
  subtitle,
  porcentage,
  oldPrice,
  newPrice,
  id,
  onDelete,
  onMoveList,
  car,
  markup,
}) => {
  const handleClick = () => {
    window.location.pathname = `game/${id}`;
  };

  const {
    $any: addCar,
    initial: init,
    active,
  } = useLocalStorage({ key: "carrinho", id });

  useEffect(() => {
    init();
  }, [init]);

  return (
    <section id={id} className={styles.container}>
      <div>
        <div className={styles.image + " flex"}>
          <div onClick={handleClick} className={styles.imgContianer + " flex"}>
            <Image src={img.src1} alt={title} />
          </div>
          <div className={styles.content}>
            <div className={styles.infoImage + " flex"}>
              <div>
                <span>{subtitle}</span>
                <span>Acesso antecipado</span>
                <h2 className={styles.title}>{title}</h2>
              </div>

              <div className={styles.price + " flex"}>
                <Price
                  oldPrice={oldPrice}
                  newPrice={newPrice}
                  porcentage={porcentage}
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
        <span onClick={onDelete}>remover</span>
        {markup && (
          <NavLink to={active && "/carrinho"} onClick={!active ? addCar : null}>
            <Button btn="secondary">
              {active ? "visualizar carrinho" : "Adicionar ao carrinho"}
            </Button>
          </NavLink>
        )}

        {car && (
          <div onClick={onMoveList}>
            <Button btn="secondary">Mover para lista de desejos</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardMarkup;
