import React from "react";
import styles from "./Loading.module.css";

const Loading = ({ loading }) => {
  return (
    <>
      {loading && (
        <section className="max flex">
          <div className={styles.container + " flex"}>
            <div className={styles.banner}></div>

            <div className={styles.content}>
              <div className={styles.game}></div>
              <div className={styles.game}></div>
              <div className={styles.game}></div>
              <div className={styles.game}></div>
              <div className={styles.game}></div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Loading;
