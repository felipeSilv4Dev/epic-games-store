import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import Banner from "./home-components/Banner";
import Game from "./home-components/Game";
import useMatch from "../../Hooks/useMatch";
import { Carousel } from "../Components/Carousel/Carousel";
import { useNavigate } from "react-router-dom";
import Loading from "./home-components/LoadingHome/Loading";

import Head from "../../Helpers/Head";

const Home = ({ data, loading }) => {
  const navigate = useNavigate();
  const match = useMatch("48em");
  const game = useRef();
  const banner = useRef();
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(true);
  const homeRef = useRef();

  const arrayBanner = useCallback(() => {
    if (!banner.current) return;
    return Array.from(banner.current.children);
  }, []);

  const arrayGame = useCallback(() => {
    if (!game.current) return;

    return Array.from(game.current.children);
  }, []);

  const translateBanner = useCallback(
    (offsetLeft) => {
      const bannerArray = arrayBanner();
      bannerArray.map((item) => {
        const position = item.offsetLeft - offsetLeft;

        item.style.transform = `translateX(-${position}px)`;
      });
    },
    [arrayBanner]
  );

  const changeGame = useCallback(
    (index) => {
      if (!banner.current || !game.current) return;
      const bannerArr = arrayBanner();
      const gameArr = arrayGame();

      bannerArr.map((item) => item.classList.remove("active"));
      gameArr.map((item) => item.classList.remove("active"));
      bannerArr[index].classList.add("active");
      gameArr[index].classList.add("active");
      translateBanner(banner.current.offsetLeft);
    },
    [arrayBanner, arrayGame, translateBanner]
  );

  const handleClick = useCallback(
    ({ currentTarget }) => {
      const idClick = currentTarget.id - 1;

      if (idClick === count) {
        navigate(`game/${currentTarget.id}`);
      }

      setCount(idClick);
    },
    [count, navigate]
  );

  useEffect(() => {
    if (data) {
      if (!game.current) return;

      const gameArr = arrayGame();

      let timeCount = 6000;
      const TimeGame = setInterval(() => {
        setCount(count + 1);
        if (count >= gameArr.length - 1) {
          setCount(0);
        }
      }, timeCount);

      setTimeout(() => {
        setTime(false);
      }, 300);

      if (!time) {
        changeGame(count);
      }

      window.addEventListener("resize", () => {
        if (!match) {
          if (!banner.current) return;
          gameArr[count].classList.remove("active");
          translateBanner(banner.current.offsetLeft);
          setCount(0);
          changeGame(0);
        }
      });

      return () => clearInterval(TimeGame);
    }
  }, [
    data,
    count,
    changeGame,
    arrayGame,
    time,
    arrayBanner,
    match,
    translateBanner,
  ]);

  if (loading) return <Loading loading={loading} />;

  if (data) {
    const home = data.filter((item) => item.home);

    return (
      <section className="max flex">
        <Head
          title="Epic Games store | Baixe e jogue"
          description="compre os jogos mais em conta do mercado"
        />
        {!match && (
          <div ref={banner} className={styles.banner}>
            {home.map((item) => (
              <Banner time={time} key={item.id} {...item} />
            ))}
          </div>
        )}
        {match && (
          <Carousel ref={homeRef} control={true}>
            {home.map((item) => (
              <Banner key={item.id} {...item} />
            ))}
          </Carousel>
        )}
        {!match && (
          <div ref={game} className={styles.content}>
            {home.map((item) => (
              <Game key={item.id} setClick={handleClick} {...item} />
            ))}
          </div>
        )}
      </section>
    );
  }
};

export default Home;
