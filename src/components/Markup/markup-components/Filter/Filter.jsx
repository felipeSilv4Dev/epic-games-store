import React from "react";
import styles from "./Filter.module.css";
import Option from "./filter-components/Option";
import Button from "../../../Components/Button/Button";
import useMatch from "../../../../Hooks/useMatch";

const Filter = ({ setOpen }) => {
  const match = useMatch("64em");
  return (
    <div
      id="overlay"
      onClick={({ target }) => target.id === "overlay" && setOpen(false)}
      className={styles.overlay}
    >
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
            <div
              id="limpar"
              style={{ width: "100%" }}
              onClick={({ currentTarget }) =>
                currentTarget.id === "limpar" && setOpen(false)
              }
            >
              <Button btn="secondary">Limpar</Button>
            </div>

            <Button btn="primary">aplicar</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
