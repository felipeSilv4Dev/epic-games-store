import React from "react";
import styles from "./Filter.module.css";
import Option from "./filter-components/Option";
import Button from "../../../Components/Button/Button";
import useMatch from "../../../../Hooks/useMatch";

const Filter = () => {
  const match = useMatch("64em");
  return (
    <div className={styles.overlay}>
      <div className={styles.container + " flex"}>
        <div className={styles.content}>
          <Option title="filtros" />
          <Option title="eventos" option="promoção de primavera" />
          <Option title="genêros" option="Ação" />
          <Option title="recursos" option="ordem alfabética" />
          <Option title="plataformas" option="windows" />
        </div>
        {match && (
          <div className={styles.btn + " flex"}>
            <Button btn="secondary">Limpar</Button>
            <Button btn="primary">aplicar</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
