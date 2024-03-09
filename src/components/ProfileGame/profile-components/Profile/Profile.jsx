import { useEffect } from "react";
import styles from "./Profile.module.css";
import { useParams } from "react-router";
import useFetch from "../../../../Hooks/useFetch";
import CarouselPhotos from "../CarouselPhotos/CarouselPhotos";
import Loading from "../../../Loading/Loading";
import MenuBuy from "../../profile-components/MenuBuy/MenuBuy";
import useLocalStorage from "../../../../Hooks/useLocalStore";
import { API_URL } from "../../../../Api/Api";

const Profile = ({ dist }) => {
  const params = useParams();
  const { id } = params;
  const { request, data, loading } = useFetch();
  const {
    $any: gameClick,
    active: activeGame,
    initial: gameInitial,
  } = useLocalStorage({ key: "game", id });

  const {
    $any: carrinhoClick,
    active: activeCarrinho,
    initial: carrinhoInitial,
  } = useLocalStorage({ key: "carrinho", id });

  useEffect(() => {
    gameInitial();
    carrinhoInitial();
  }, [carrinhoInitial, gameInitial]);

  useEffect(() => {
    (async () => await request(API_URL))();
  }, [request]);

  if (loading) return <Loading />;

  if (data) {
    const [game] = data.filter((item) => item.id === Number(id));

    return (
      <section className={styles.container}>
        <h1>{game.title}</h1>

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
          <CarouselPhotos {...game} />
          <MenuBuy
            gameClick={gameClick}
            activeGame={activeGame}
            carrinhoClick={carrinhoClick}
            activeCarrinho={activeCarrinho}
            dist={dist}
            {...game}
          />
        </div>
      </section>
    );
  }
};
export default Profile;
