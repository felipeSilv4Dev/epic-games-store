import useMatch from "../../../Hooks/useMatch";
import styles from "./Banner.module.css";
import Image from "../../Components/Image/Image";
import { useState } from "react";
import { useNavigate } from "react-router";

const Banner = ({ id, title, img, home, newPrice, time }) => {
  const [skeleton, setSkeleton] = useState(true);
  const match = useMatch("48em");
  const navigate = useNavigate();

  const handleLoad = () => {
    setSkeleton(false);
  };

  const handleClick = ({ currentTarget }) => {
    if (!match) navigate(`game/${currentTarget.id}`);
  };

  return (
    <>
      {time && <div className={styles.time}></div>}
      <section onClick={handleClick} id={id} className={styles.container}>
        <div className={styles.overlay}></div>

        {skeleton && <div className={styles.skeleton}></div>}

        <img
          className={styles.banner}
          onLoad={handleLoad}
          src={img.src3}
          alt={title}
        />

        <div className={styles.content + " flex"}>
          <div className={styles.logo}>
            <Image src={img.logo} alt={`logo ${title}`} />
          </div>

          <div className={styles.info}>
            <span>{home.span}</span>
            <p>{home.text}</p>
          </div>

          <div className={styles.btn}>
            <span>{newPrice ? `apartir de R$ ${newPrice}` : "Gratuito"}</span>
            <p>{home.btn}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
