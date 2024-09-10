import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { useParams } from "react-router";
import useFetch from "../../../../Hooks/useFetch";
import CarouselPhotos from "../CarouselPhotos/CarouselPhotos";
import Loading from "../../../Loading/Loading";
import MenuBuy from "../../profile-components/MenuBuy/MenuBuy";
import useLocalStorage from "../../../../Hooks/useLocalStore";
import Details from "../Details/Details";
import Social from "../Social/Social";
import Reviews from "../Reviews/Reviews";
import Requires from "../Requires/Requires";
import { API_URL } from "../../../../Api/Api";
import Head from "../../../../Helpers/Head";
import Box from "../Box/Box";
import Share from "../Share/Share";
import Report from "../Report/Report";

const Profile = ({ dist }) => {
  const params = useParams();
  const { id } = params;
  const { request, data, loading } = useFetch();
  const [open, setOpen] = useState(false);
  const [report, setReport] = useState(false);

  const {
    $any: clickGame,
    active: game,
    initial: gameInitial,
  } = useLocalStorage({ key: "game", id: +id });

  const {
    $any: clickCar,
    active: carrinho,
    initial: carrinhoInitial,
  } = useLocalStorage({ key: "carrinho", id: +id });

  useEffect(() => {
    gameInitial();
    carrinhoInitial();
  }, [carrinhoInitial, gameInitial]);

  useEffect(() => {
    const controler = new AbortController();
    (async () => await request(API_URL, controler.signal))();

    return () => {
      controler.abort();
    };
  }, [request]);

  if (loading) return <Loading />;

  if (data) {
    const [dates] = data.filter((item) => item.id === id);

    return (
      <section className={styles.container}>
        <Head
          title={"Epic Games store | " + dates.title}
          description="compre os jogos mais em conta do mercado"
        />
        <h1>{dates.title}</h1>

        <div className={styles.header + " flex"}>
          <h2>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star-half-stroke"></i>
            <span className={styles.score}>4.5</span>
          </h2>

          <h2>🌐 Personagens Diversos</h2>
          <h2> ⚔️Combate desafiador</h2>
        </div>

        <div className={styles.content + " flex"}>
          <CarouselPhotos {...dates} />
          <MenuBuy
            clickGame={clickGame}
            game={game}
            clickCar={clickCar}
            carrinho={carrinho}
            dist={dist}
            {...dates}
            setOpen={setOpen}
            setReport={setReport}
          />
          {open && (
            <Box setClick={setOpen}>
              <Share setClick={setOpen} />
            </Box>
          )}

          {report && (
            <Box setClick={setReport}>
              <Report theme={dates.profile.theme} setClick={setReport} />
            </Box>
          )}
        </div>

        <Details
          dates={dates}
          clickGame={clickGame}
          game={game}
          clickCar={clickCar}
          carrinho={carrinho}
        />

        <Social />
        <Reviews {...dates} />
        <Requires {...dates} />
      </section>
    );
  }
};
export default Profile;
