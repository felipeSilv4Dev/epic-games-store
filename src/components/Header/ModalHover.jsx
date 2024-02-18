import styles from "./ModalHover.module.css";
const ModalHover = ({ setModal, right, children }) => {
  return (
    <>
      <div
        onMouseOver={() => setModal(true)}
        onMouseOut={() => setModal(false)}
        className={styles.container}
        style={{ right: `${right}px` }}
      >
        <div className={styles.content}>
          <ul className={styles.list}>{children}</ul>
        </div>
      </div>
    </>
  );
};

export default ModalHover;
