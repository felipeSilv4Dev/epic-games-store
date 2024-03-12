import React, { useRef } from "react";
import style from "./ListGame.module.css";
import List from "./list-components/List/List";
import useMatch from "../../Hooks/useMatch";
import { Carousel } from "../Components/Carousel/Carousel";

const ListGame = () => {
  const match = useMatch("48em");
  const refList = useRef();
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

  return (
    <section className={style.container + " max"}>
      {!match &&
        list.map(({ id, initial, final, title, btn }) => {
          return (
            <div key={id} id={id} className={style.content}>
              <List
                initial={initial}
                final={final}
                title={title}
                btn={btn}
                nav={true}
              />
            </div>
          );
        })}

      {match && (
        <Carousel ref={refList} control={true}>
          {list.map(({ id, initial, final, title, btn }) => {
            return (
              <div key={id} id={id} className={style.content}>
                <List initial={initial} final={final} title={title} btn={btn} />
              </div>
            );
          })}
        </Carousel>
      )}
    </section>
  );
};

export default ListGame;
