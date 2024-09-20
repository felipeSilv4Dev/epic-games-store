import React from "react";
import Filter from "../Filter/Filter";
import styles from "./FilterMobile.module.css";

const FilterMobile = ({ setOpen, options, setSelected, open }) => {
  return (
    <>
      <p
        className={`${styles.filterButton} flex`}
        onClick={() => setOpen(true)}
      >
        filtro
        <i className="fa-solid fa-sort-down"></i>
      </p>

      {open && (
        <Filter setOpen={setOpen} options={options} setSelected={setSelected} />
      )}
    </>
  );
};

export default FilterMobile;
