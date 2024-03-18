import React from "react";
import styles from "./Filter.module.css";
import Option from "./filter-components/Option";

const Filter = () => {
  return (
    <div className={styles.container + " flex"}>
      <Option title="filtros" />
      <Option title="eventos" option="promoção de primavera" />
      <Option title="genêros" option="Ação" />
      <Option title="recursos" option="ordem alfabética" />
      <Option title="plataformas" option="windows" />
    </div>
  );
};

export default Filter;
