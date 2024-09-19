import React, { useCallback, useEffect, useState } from "react";
import styles from "./Menu.module.css";
import Button from "../../../Components/Button/Button";
import Value from "./menu-components/Value";

const Menu = ({ games }) => {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  const clearNumber = (number) =>
    Number(number.replaceAll(".", "").replace(",", "."));

  const convertNumberForCurrency = (number) =>
    number.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const handleTotalPrice = useCallback(
    (games) =>
      convertNumberForCurrency(
        games
          .map((game) => clearNumber(game.newPrice))
          .reduce((acc, game) => acc + game)
      ),
    []
  );

  const handleDiscountPrice = useCallback(
    (games) =>
      convertNumberForCurrency(
        games
          .map((game) => {
            const oldPrice = clearNumber(game.oldPrice);
            const porcentage = game.porcentage;

            return (porcentage / 100) * oldPrice;
          })
          .reduce((acc, game) => acc + game)
      ),
    []
  );

  useEffect(() => {
    if (!games) return;
    setTotal(handleTotalPrice(games));
    setDiscount(handleDiscountPrice(games));
  }, [handleDiscountPrice, handleTotalPrice, games]);

  return (
    <div className={styles.menu}>
      <h2>Resumo de jogos e aplicativos</h2>

      <Value name="preço" value={total} />
      <Value name="Desconto" value={discount} />

      <div className={styles.imposto}>
        <Value name="imposto" value="calculado ao finalizar" />
      </div>

      <div className={styles.total}>
        <Value vame="subtotal" value={total} />
        <Button btn="primary" onClick={null}>
          Finalizar compra
        </Button>
      </div>
    </div>
  );
};

export default Menu;
