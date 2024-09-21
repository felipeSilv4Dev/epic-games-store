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
  onSaveLocal,
  storage,
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
      <section className={`${styles.container} max`}>
        <div className={`${styles.header} flex`}>
          <h2>{header}</h2>
          <h3>
            <NavLink to={"/navegar"}>{textButton}</NavLink>
          </h3>
        </div>

        <div className={`${styles.card} flex`}>
          {!mobile &&
            cardGame.map((game) => (
              <NavLink key={game.id} to={`game/${game.id}`}>
                <Card
                  game={game}
                  img={game.img.src1}
                  subtitle={true}
                  onSaveLocal={onSaveLocal}
                  storage={storage}
                />
              </NavLink>
            ))}

          {mobile && (
            <Carousel ref={refGame} control={false}>
              {mob.map((game) => (
                <Card
                  game={game}
                  img={game.img.src1}
                  subtitle={true}
                  storage={storage}
                  onSaveLocal={onSaveLocal}
                />
              ))}
            </Carousel>
          )}
        </div>
      </section>
    );
  }
};

export default Games;
