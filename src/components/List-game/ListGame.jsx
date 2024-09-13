import React, { useRef } from "react";
import style from "./ListGame.module.css";
import List from "./list-components/List/List";
import useMatch from "../../Hooks/useMatch";
import { Carousel } from "../Components/Carousel/Carousel";

const list = [
  {
    id: 0,
    title: "mais vendido",
    btn: "ver mais",
    initial: 0,
    final: 5,
  },
  {
    id: 1,
    title: "mais jogados",
    btn: "ver mais",
    initial: 4,
    final: 9,
  },
  {
    id: 2,
    title: "mais aguardados",
    btn: "ver mais",
    initial: 3,
    final: 8,
  },
];

const ListGame = ({ data, loading }) => {
  const match = useMatch("48em");
  const refList = useRef();

  return (
    <section className={style.container + " max"}>
      {!match &&
        list.map((props) => {
          return (
            <div key={props.id} id={props.id} className={style.content}>
              <List props={props} data={data} loading={loading} />
            </div>
          );
        })}

      {match && (
        <Carousel ref={refList} control={true}>
          {list.map((props) => {
            return (
              <div key={props.id} id={props.id} className={style.content}>
                <List props={props} data={data} loading={loading} />
              </div>
            );
          })}
        </Carousel>
      )}
    </section>
  );
};

export default ListGame;
