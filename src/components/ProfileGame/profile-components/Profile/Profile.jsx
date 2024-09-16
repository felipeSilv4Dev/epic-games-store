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
import CardDetail from "../CardDetail/CardDetail";
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
  const [isSaveList, setIsSaveList] = useState(false);
  const [isSaveCar, setIsSaveCar] = useState(false);
  const { saveItemLocal: saveCarLocal, storage: storageCar } = useLocalStorage({
    key: "car",
  });

  const { saveItemLocal: saveListLocal, storage: storageList } =
    useLocalStorage({
      key: "games",
    });

  const titles = ["edição", "jogo base", "complemento"];

  const handleSaveCarLocal = (key, id) => {
    saveCarLocal(key, id);
  };
  const handleSaveLitLocal = (key, id) => {
    saveListLocal(key, id);
  };

  useEffect(() => {
    const controler = new AbortController();
    (async () => await request(`${API_URL}/${id}`, controler.signal))();

    return () => {
      controler.abort();
    };
  }, [request, id]);

  if (loading) return <Loading />;

  if (data) {
    return (
      <section className={styles.container}>
        <Head
          title={"Epic Games store | " + data.title}
          description="compre os jogos mais em conta do mercado"
        />
        <h1>{data.title}</h1>

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
          <CarouselPhotos game={data} />
          <MenuBuy
            game={data}
            dist={dist}
            setOpen={setOpen}
            setReport={setReport}
            onSaveCarLocal={handleSaveCarLocal}
            onSaveListLocal={handleSaveLitLocal}
            setIsSaveCar={setIsSaveCar}
            setIsSaveList={setIsSaveList}
            isSaveCar={isSaveCar}
            isSaveList={isSaveList}
            storageCar={storageCar}
            storageList={storageList}
          />

          {open && (
            <Box setClick={setOpen}>
              <Share setClick={setOpen} />
            </Box>
          )}

          {report && (
            <Box setClick={setReport}>
              <Report theme={data.profile.theme} setClick={setReport} />
            </Box>
          )}
        </div>

        {
          <Details game={data}>
            {titles.map((_, index) => (
              <CardDetail
                key={index}
                game={data}
                subtitles={_}
                src={data.profile.img[index]}
                onSaveCarLocal={handleSaveCarLocal}
                onSaveListLocal={handleSaveLitLocal}
                setIsSaveCar={setIsSaveCar}
                setIsSaveList={setIsSaveList}
                isSaveCar={isSaveCar}
                isSaveList={isSaveList}
                storageCar={storageCar}
                storageList={storageList}
              />
            ))}
          </Details>
        }

        <Social />
        <Reviews game={data} />
        <Requires game={data} />
      </section>
    );
  }
};
export default Profile;
