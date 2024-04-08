import React, { useRef } from "react";
import styles from "./Galery.module.css";
import { NavLink } from "react-router-dom";
import Card from "../Components/Card/Card";
import { Carousel } from "../Components/Carousel/Carousel";

import useMatch from "../../Hooks/useMatch";
import LoadingOfertas from "../Ofertas/ofertas-components/LoadingOfertas/LoadingOfertas";

const Galery = ({ data, loading }) => {
  const match = useMatch("48em");
  const galeryRef = useRef();

  if (loading) return <LoadingOfertas />;

  if (data) {
    const gratis = data.filter((item) => item.gratis);
    return (
      <section className={styles.container + " max"}>
        <div>
          <div className={styles.header + " flex"}>
            <div className="flex">
              <i className={styles.gift + " fa-solid fa-gift"}></i>
              <h2 className={styles.title}>jogos grátis</h2>
            </div>

            <h2 className={styles.btn}>Ver Mais</h2>
          </div>
          <div className={styles.content + " flex"}>
            {!match &&
              gratis.map((props) => {
                return (
                  <NavLink key={props.id} to={`game/${props.id}`}>
                    <Card
                      key={props.id}
                      {...props}
                      width={85}
                      img={props.img.src2}
                      footerImg={true}
                      porcentage={""}
                    />
                  </NavLink>
                );
              })}

            {match && (
              <Carousel ref={galeryRef} control={false}>
                {gratis.map((props) => {
                  return (
                    <Card
                      key={props.id}
                      {...props}
                      width={85}
                      img={props.img.src2}
                      footerImg={true}
                      porcentage={""}
                    />
                  );
                })}
              </Carousel>
            )}
          </div>
        </div>
      </section>
    );
  }
};

export default Galery;
