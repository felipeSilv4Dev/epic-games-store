import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import Banners from "./home-components/Banners/Banners";
import Game from "./home-components/Game/Game";
import useMatch from "../../Hooks/useMatch";
import { Carousel } from "../Components/Carousel/Carousel";
import { useNavigate } from "react-router-dom";
import Loading from "./home-components/LoadingHome/Loading";

import Head from "../../Helpers/Head";

const Home = ({ data, loading }) => {
  const navigate = useNavigate();
  const match = useMatch("48em");
  const [count, setCount] = useState(null);
  const interval = 6;
  const homeRef = useRef();

  const handleMoveGame = (index, id) => {
    if (index === count) {
      navigate(`game/${id}`);
    }
    setCount(index);
  };

  useEffect(() => {
    if (data) {
      setCount((count) => count + 0);
      const home = data.filter((item) => item.home);

      if (count === home.length) setCount(0);
      const countClear = setInterval(() => {
        setCount((count) => count + 1);
      }, interval * 1000);

      return () => clearInterval(countClear);
    }
  }, [count, data]);

  if (loading) return <Loading loading={loading} />;

  if (data) {
    const home = data.filter((item) => item.home);

    return (
      <section ref={homeRef} className="max flex">
        <Head
          title="Epic Games store | Baixe e jogue"
          description="compre os jogos mais em conta do mercado"
        />
        {!match && (
          <div className={styles.banner}>
            {home.map((banner, index) => (
              <Banners
                key={banner.id}
                index={index}
                count={count}
                banner={banner}
                homeRef={homeRef}
              />
            ))}
          </div>
        )}

        {!match && (
          <div className={styles.content}>
            {home.map((game, index) => (
              <Game
                key={game.id}
                game={game}
                index={index}
                count={count}
                interval={interval}
                onMoveGame={handleMoveGame}
              />
            ))}
          </div>
        )}

        {match && (
          <Carousel ref={homeRef} control={true}>
            {home.map((banner) => (
              <Banners key={banner.id} banner={banner} homeRef={homeRef} />
            ))}
          </Carousel>
        )}
      </section>
    );
  }
};

export default Home;
