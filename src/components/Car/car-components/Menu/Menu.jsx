import React, { useCallback, useEffect, useState } from "react";
import styles from "./Menu.module.css";
import Button from "../../../Components/Button/Button";
import Value from "./menu-components/Value";

const Menu = ({ data }) => {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleCalc = useCallback(
    (key) => {
      if (data) {
        const totalData = data.map((d) =>
          d[key] ? +d[key].replaceAll(".", "").replace(",", ".") : 0
        );
        const totalReal = totalData
          .reduce((acc, p) => acc + p)
          .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

        return totalReal;
      }
    },
    [data]
  );

  const handleDiscount = useCallback(() => {
    if (data) {
      const discountData = data.map((d) => {
        const porcentage = d.porcentage;
        const priceOld = +d.oldPrice.replaceAll(".", "").replace(",", ".");
        const discount = (porcentage / 100) * priceOld;

        return -discount;
      });

      const discountReal = discountData
        .reduce((acc, p) => acc + p)
        .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      setDiscount(discountReal);
    }
  }, [data]);

  useEffect(() => {
    handleDiscount();
    setTotal(handleCalc("newPrice"));
    setPrice(handleCalc("oldPrice"));
  }, [handleCalc, handleDiscount]);
  return (
    <div className={styles.menu}>
      <h2>Resumo de jogos e aplicativos</h2>

      <Value txt1="preço" tx2={price} />
      <Value txt1="Desconto" tx2={discount} />

      <div className={styles.imposto}>
        <Value txt1="imposto" tx2="calculado ao finalizar" />
      </div>

      <div className={styles.total}>
        <Value txt1="subtotal" tx2={total} />
        <Button btn="primary">Finalizar compra</Button>
      </div>
    </div>
  );
};

export default Menu;
