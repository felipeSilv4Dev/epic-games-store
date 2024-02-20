import React, { useState } from "react";
import styles from "./Image.module.css";

const Image = ({ alt, src, radius }) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = "1";
  };

  return (
    <div className={styles.container}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img
        style={{ borderRadius: radius + "rem" }}
        onLoad={handleLoad}
        className={styles.image}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Image;
