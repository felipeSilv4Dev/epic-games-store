import { useEffect } from "react";
import styles from "./Profile.module.css";
import { useParams } from "react-router";
import useFetch from "../../../../Hooks/useFetch";
import CarouselPhotos from "../CarouselPhotos/CarouselPhotos";
import Loading from "../../../Loading/Loading";

const Profile = () => {
  const params = useParams();
  const { id } = params;
  const { request, data, loading } = useFetch();

  useEffect(() => {
    (async () => await request("../../games-api.json"))();
  }, [request]);

  if (loading) return <Loading />;
  if (data) {
    const [game] = data.filter((item) => item.id === Number(id));

    console.log(game);
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
        </div>
      </section>
    );
  }
};
export default Profile;
