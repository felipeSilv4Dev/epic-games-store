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
      <section className={`${styles.container} max`}>
        <div>
          <div className={styles.header + " flex"}>
            <div className="flex">
              <i className={styles.gift + " fa-solid fa-gift"}></i>
              <h2 className={styles.title}>jogos grátis</h2>
            </div>

            <NavLink className={styles.btn} to={"/navegar"}>
              Ver Mais
            </NavLink>
          </div>

          <div className={styles.content + " flex"}>
            {!match &&
              gratis.map((game) => {
                return (
                  <NavLink key={game.id} to={`game/${game.id}`}>
                    <Card
                      key={game.id}
                      game={game}
                      src={"src2"}
                      footer={true}
                      price={false}
                      description={true}
                      icon={false}
                    />
                  </NavLink>
                );
              })}

            {match && (
              <Carousel ref={galeryRef} control={false}>
                {gratis.map((game) => {
                  return (
                    <Card
                      key={game.id}
                      game={game}
                      src={"src2"}
                      footer={true}
                      price={false}
                      description={true}
                      icon={false}
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
