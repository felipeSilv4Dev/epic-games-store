import React from "react";
import styles from "./Filter.module.css";
import Option from "./filter-components/Option";
import Button from "../../../Components/Button/Button";
import useMatch from "../../../../Hooks/useMatch";

const Filter = ({ setSelected, options, setOpen, selected }) => {
  const match = useMatch("64em");
  const mobile = useMatch("48em");

  const handleCloseFilter = () => {
    setOpen(false);
  };

  return (
    <>
      {!mobile && (
        <div onClick={handleCloseFilter} className={styles.overlay}></div>
      )}
      <section className={`${styles.container} flex`}>
        <div className={styles.content}>
          <Option title="filtros" button={false} />
          {options.map((option) => (
            <Option
              key={option}
              title={option}
              option={option}
              setSelected={setSelected}
              selected={selected}
            />
          ))}
        </div>

        {match && (
          <div className={`${styles.btn} flex`}>
            <Button btn="secondary" onClick={handleCloseFilter}>
              Limpar
            </Button>
            <Button btn="primary" onClick={null}>
              aplicar
            </Button>
          </div>
        )}
      </section>
    </>
  );
};

export default Filter;
