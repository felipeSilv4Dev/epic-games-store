import React from "react";
import styles from "./Menu.module.css";
import Button from "../../../Components/Button/Button";
import Value from "./menu-components/Value";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <h2>Resumo de jogos e aplicativos</h2>

      <Value txt1="preço" tx2="R$ 288,94" />
      <Value txt1="Desconto" tx2="R$ 228,94" />

      <div className={styles.imposto}>
        <Value txt1="imposto" tx2="calculado ao finaliza" />
      </div>

      <div className={styles.total}>
        <Value txt1="subtotal" tx2="R$ 285,04" />
        <Button btn="primary">Finalizar compra</Button>
      </div>
    </div>
  );
};

export default Menu;
