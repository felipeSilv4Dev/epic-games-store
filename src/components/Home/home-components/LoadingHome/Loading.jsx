import React from "react";
import styles from "./Loading.module.css";

const Loading = ({ loading }) => {
  const game = [0, 1, 2, 3, 4];
  return (
    <>
      {loading && (
        <section className="max flex">
          <div className={styles.container + " flex"}>
            <div className={styles.banner}></div>

            <div className={styles.content}>
              {game.map((item) => (
                <div key={item} className={styles.game}></div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Loading;
