import styles from "./SearchModal.module.css";
const SearchModal = ({ setSearch, onChange, onBlur, value }) => {
  return (
    <>
      <div onClick={() => setSearch(false)} className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content + " flex"}>
          <i className="fa-solid fa-magnifying-glass"></i>

          <input
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type="text"
            placeholder="Pesquisar loja"
          />

          <i onClick={() => setSearch(false)} className="fa-solid fa-x"></i>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
