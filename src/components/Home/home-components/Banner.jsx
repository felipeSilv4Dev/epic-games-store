import { NavLink } from "react-router-dom";
import styles from "./Banner.module.css";

const Banner = ({ id, title, img, home, newPrice, time }) => {
  return (
    <>
      {time && <div className={styles.time}></div>}
      <section id={id} className={styles.container}>
        <NavLink to={`game/${id}`}>
          <div className={styles.overlay}></div>
          <img className={styles.banner} src={img.src3} alt={title} />
          <div className={styles.content + " flex"}>
            <img className={styles.logo} src={img.logo} alt={`logo ${title}`} />

            <div className={styles.info}>
              <span>{home.span}</span>
              <p>{home.text}</p>
            </div>

            <div className={styles.btn}>
              <span>{newPrice ? `apartir de R$ ${newPrice}` : "Gratuito"}</span>
              <p>{home.btn}</p>
            </div>
          </div>
        </NavLink>
      </section>
    </>
  );
};

export default Banner;
