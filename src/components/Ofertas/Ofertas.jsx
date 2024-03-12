import React, { useEffect, useRef } from "react";
import styles from "./Ofertas.module.css";
import useFetch from "../../Hooks/useFetch";
import Card from "../Components/Card/Card";
import useMatch from "../../Hooks/useMatch";
import { Carousel } from "../Components/Carousel/Carousel";
import { NavLink } from "react-router-dom";
import LoadingOfertas from "./ofertas-components/LoadingOfertas/LoadingOfertas";
import { API_URL } from "../../Api/Api";

const Ofertas = () => {
  const match = useMatch("48em");
  const { loading, data, request } = useFetch();
  const refOfertas = useRef();

  useEffect(() => {
    (async () => await request(API_URL))();
  }, [request]);

  if (loading) return <LoadingOfertas />;

  if (data) {
    const ofertas = data.filter((item) => item.oferta);
    return (
      <section className={styles.container + " flex max"}>
        {!match &&
          ofertas.map((props) => {
            return (
              <NavLink key={props.id} to={`game/${props.id}`}>
                <Card
                  key={props.id}
                  width={85}
                  price={true}
                  {...props}
                  img={props.img.src2}
                />
              </NavLink>
            );
          })}

        {match && (
          <Carousel ref={refOfertas} control={true}>
            {ofertas.map((item) => {
              return (
                <Card
                  key={item.id}
                  width={85}
                  price={true}
                  {...item}
                  img={item.img.src2}
                />
              );
            })}
          </Carousel>
        )}
      </section>
    );
  }
};

export default Ofertas;
