import { useEffect, useState } from "react";
import styles from "./Card.module.css";
import Price from "../Price/Price";
import Image from "../Image/Image";
import ButtonPlus from "./ButtonPlus/ButtonPlus";

const CardGame = ({
  game,
  footer = false,
  description = false,
  price = true,
  subtitle = false,
  src = "src1",
  icon = true,
  onSaveLocal = false,
  storage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (storage && storage.games.includes(game.id)) {
      setIsOpen(true);
    }
  }, [storage, game.id]);

  const footerBg = {
    backgroundColor: game.newPrice ? "var(--body-bg)" : "var(--btn-3)",
  };

  const handleAddGame = (e) => {
    setIsOpen((open) => !open);
    onSaveLocal("games", game.id, e);
  };

  return (
    <section id={game.id} className={styles.container + " flex"}>
      <div id={game.id} className={styles.image}>
        <div>
          <figure>
            <Image src={game.img[src]} alt={game.title} />
          </figure>

          {icon && <ButtonPlus onAddGame={handleAddGame} isOpen={isOpen} />}
        </div>

        {footer && (
          <p style={footerBg} className={styles.footer}>
            {game.newPrice ? "Em breve" : "gratuito"}
          </p>
        )}
      </div>

      {subtitle && <span className={styles.subtitle}>{game.subtitle}</span>}

      <h2 className={styles.title}>{game.title}</h2>
      {description && (
        <p className={styles.description}>{game.descriptionText}</p>
      )}

      {price && (
        <Price
          porcentage={game.porcentage}
          oldPrice={game.oldPrice}
          newPrice={game.newPrice}
          theme={game.theme}
        />
      )}
    </section>
  );
};

export default CardGame;
