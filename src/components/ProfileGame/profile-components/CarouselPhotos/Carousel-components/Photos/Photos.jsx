import React, { useState } from "react";
import styles from "./Photos.module.css";
import Image from "../../../../../Components/Image/Image";

const Photos = ({ images, alt }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        style={{ height: active ? "auto" : "" }}
        className={styles.container}
      >
        {images.map((src) => (
          <Image key={src} src={"../" + src} alt={alt} />
        ))}

        <div>
          <p onClick={() => setActive(!active)} className={styles.footer}>
            {active ? "Mostrar menos" : "Mostrar Mais"}
            <i
              className={`${styles.icon} fa-solid fa-chevron-${
                active ? "up" : "down"
              }`}
            />
          </p>
        </div>
      </div>
      {!active && <span className={styles.overlay}></span>}
    </>
  );
};

export default Photos;
