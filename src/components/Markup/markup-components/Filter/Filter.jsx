import React, { useEffect } from "react";
import styles from "./Filter.module.css";
import Option from "./filter-components/Option";
import Button from "../../../Components/Button/Button";
import useMatch from "../../../../Hooks/useMatch";

const Filter = ({ setOpen }) => {
  const match = useMatch("64em");
  const mobile = useMatch("48em");

  const handleClick = ({ id, key }) => {
    id === key && setOpen(false);
  };

  return (
    <>
      {!mobile && (
        <div
          id="overlay"
          onClick={({ target }) =>
            handleClick({ id: target.id, key: "overlay" })
          }
          className={styles.overlay}
        ></div>
      )}
      <section className={styles.container + " flex"}>
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
                handleClick({ id: currentTarget.id, key: "limpar" })
              }
            >
              <Button btn="secondary">Limpar</Button>
            </div>

            <Button btn="primary">aplicar</Button>
          </div>
        )}
      </section>
    </>
  );
};

export default Filter;
