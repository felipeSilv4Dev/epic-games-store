import React, { useRef } from "react";
import styles from "./Reviews.module.css";
import Score from "./reviews-components/Score/Score";
import ReviewsInfo from "./reviews-components/ReviewsInfo/ReviewsInfo";
import { Carousel } from "../../../Components/Carousel/Carousel";
import useMatch from "../../../../Hooks/useMatch";

const Reviews = ({ title, profile }) => {
  const refInfo = useRef();
  const match = useMatch("48em");
  const { primary, secondary, terciary } = profile.score;

  return (
    <div>
      <h2 className={styles.title}>Notas e avaliações: {title}</h2>
      <div className={styles.reviews + " flex"}>
        <Score
          theme={profile.theme}
          porcentage={primary}
          text={"Críticos recomendam"}
        />
        <Score
          theme={profile.theme}
          porcentage={secondary}
          text={"Média dos principais críticos"}
        />
        <Score
          theme={profile.theme}
          porcentage={terciary}
          text={"Média do público"}
        />
      </div>
      {!match && (
        <div className={styles.info + " flex"}>
          <ReviewsInfo
            author={"Adam Sessler"}
            score={"8/10"}
            title={title}
            company={profile.company}
          />
          <ReviewsInfo
            author={"Anita Sarkeesia"}
            score={"6/10"}
            title={title}
            company={profile.company}
          />
          <ReviewsInfo
            author={"Jeff Gerstmann"}
            score={"10/10"}
            title={title}
            company={profile.company}
          />
        </div>
      )}
      <div className={styles.slide}>
        {match && (
          <Carousel ref={refInfo} control={true}>
            <ReviewsInfo
              author={"Adam Sessler"}
              score={"8/10"}
              id={1}
              title={title}
              company={profile.company}
            />
            <ReviewsInfo
              author={"Anita Sarkeesia"}
              score={"6/10"}
              id={2}
              title={title}
              company={profile.company}
            />
            <ReviewsInfo
              author={"Jeff Gerstmann"}
              score={"10/10"}
              id={3}
              title={title}
              company={profile.company}
            />
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Reviews;
