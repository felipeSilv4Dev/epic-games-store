import useMatch from "../../../../Hooks/useMatch";
import styles from "./Banners.module.css";
import Image from "../../../Components/Image/Image";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const Banner = ({ banner, index, count, homeRef }) => {
  const [skeleton, setSkeleton] = useState(true);
  const match = useMatch("48em");
  const navigate = useNavigate();
  const element = useRef();

  const handleLoad = () => {
    setSkeleton(false);
  };

  const handleNavigateID = () => {
    if (!match) navigate(`game/${banner.id}`);
  };

  const tanslatebanner = {
    transform: `translateX(-${
      !match &&
      count === index &&
      element.current?.offsetLeft - homeRef.current?.offsetLeft
    }px)`,
  };

  return (
    <section
      ref={element}
      onClick={handleNavigateID}
      style={tanslatebanner}
      className={`${styles.container} ${count === index ? "active" : ""}`}
    >
      <div className={styles.overlay}></div>
      <div>
        {skeleton && <div className={styles.skeleton}></div>}

        <img
          className={styles.banner}
          onLoad={handleLoad}
          src={banner.img.src3}
          alt={banner.title}
        />
      </div>

      <div className={styles.content + " flex"}>
        <div className={styles.logo}>
          <Image src={banner.img.logo} alt={`logo ${banner.title}`} />
        </div>

        <div className={styles.info}>
          <span>{banner.home.span}</span>
          <p>{banner.home.text}</p>
        </div>

        <div className={styles.btn}>
          <span>
            {banner.newPrice ? `apartir de R$ ${banner.newPrice}` : "Gratuito"}
          </span>
          <p>{banner.home.btn}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
