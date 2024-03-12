import React, { useRef } from "react";
import styles from "./CarouselPhotos.module.css";
import { Carousel } from "../../../Components/Carousel/Carousel";
import Genre from "./Carousel-components/Genre/Genre";
import Description from "./Carousel-components/Descipition/Description";
import Photos from "./Carousel-components/Photos/Photos";
import Image from "../../../Components/Image/Image";

const CarouselPhotos = ({ title, profile }) => {
  const refProfile = useRef();

  const control = profile.img.map((img, index) => (
    <div key={index} className={styles.control}>
      <Image id={index} src={"../" + img} alt={title} />
    </div>
  ));

  return (
    <figure className={styles.container + " flex"}>
      <Carousel ref={refProfile} control={true} custom={control}>
        {profile.img.map((img, index) => (
          <Image key={img} id={index + 1} src={"../" + img} alt={title} />
        ))}
      </Carousel>

      <p className={styles.description}>
        Explore um mundo repleto de possibilidades em {title}. sozinho ou com
        amigos, mergulhe em uma experiência de jogo emocionante e desafiadora.
        explore o jogo enquanto se diverte com mais imerssão em {title}.
        {profile.company} convida você a se juntar a esta jornada
        extraordinária, onde sua determinação e habilidade serão testadas a cada
        passo, e a diversão é garantida em cada momento.
      </p>

      <div className={styles.genre + " flex"}>
        <Genre title="Gênero" genre={["Ação", "aventura"]} />
        <Genre
          title="Recursos"
          genre={["conquistas", "Jogos para um jogador", "salvamento na nuvem"]}
        />
      </div>

      <Description title={title} />
      <Photos img={profile.img} alt={title} />
    </figure>
  );
};

export default CarouselPhotos;
