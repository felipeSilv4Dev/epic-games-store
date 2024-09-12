import { useRef } from "react";
import styles from "./Games.module.css";
import Card from "../Components/Card/Card";
import useMatch from "../../Hooks/useMatch";
import { Carousel } from "../Components/Carousel/Carousel";
import { NavLink } from "react-router-dom";
import LoadingGame from "./Loading/LoadingGame";

const Games = ({
  data,
  loading,
  header,
  textButton = "ver todos os jogos",
  keyApi,
}) => {
  const match = useMatch("64em");
  const mobile = useMatch("48em");
  const refGame = useRef();

  if (loading) return <LoadingGame />;

  if (data) {
    const cardGame = data
      .filter((game) => game[keyApi])
      .slice(0, match ? 4 : 6);

    const mob = data.filter((game) => game[keyApi]).slice(0, 6);

    return (
      <section className={styles.container + " max"}>
        <div className={styles.header + " flex"}>
          <h2>{header}</h2>
          <h3>{textButton}</h3>
        </div>

        <div className={styles.card + " flex"}>
          {!mobile &&
            cardGame.map((game) => (
              <NavLink key={game.id} to={`game/${game.id}`}>
                <Card
                  game={game}
                  subtitleOpen={true}
                  descriptionText={""}
                  radius={0.4}
                  img={game.img.src1}
                  icon={true}
                />
              </NavLink>
            ))}

          {/* {mobile && (
            <Carousel ref={refGame} control={false}>
              {mob.map((item) => (
                <Card
                  key={item.id}
                  {...item}
                  radius={0.4}
                  width={70}
                  subtitleOpen={true}
                  descriptionText={""}
                  img={item.img.src1}
                  icon={true}
                />
              ))}
            </Carousel>
          )} */}
        </div>
      </section>
    );
  }
};

export default Games;
