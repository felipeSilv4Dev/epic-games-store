import React, { useRef } from "react";
import styles from "./Reviews.module.css";
import Score from "./reviews-components/Score/Score";
import ReviewsInfo from "./reviews-components/ReviewsInfo/ReviewsInfo";
import { Carousel } from "../../../Components/Carousel/Carousel";
import useMatch from "../../../../Hooks/useMatch";

const Reviews = ({ title, profile }) => {
  const refInfo = useRef();
  const match = useMatch("89.8125em");
  const { primary, secondary, terciary } = profile.score;

  const reviews = [
    { text: "Críticos recomendam", porcentage: primary },
    { text: "Média dos principais críticos", porcentage: secondary },
    { text: "Média do público", porcentage: terciary },
  ];

  const reviewInfo = [
    { author: "Adam Sessler", score: "8/10" },
    { author: "Anita Sarkeesia", score: "10/10" },
    { author: "Jeff Gerstmann", score: "9/10" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Notas e avaliações: {title}</h2>
      <div className={styles.reviews + " flex"}>
        {reviews.map(({ text, porcentage }) => (
          <Score
            key={porcentage}
            theme={profile.theme}
            porcentage={porcentage}
            text={text}
          />
        ))}
      </div>

      {!match && (
        <div className={styles.info + " flex"}>
          {reviewInfo.map(({ author, score }) => (
            <ReviewsInfo
              key={score}
              author={author}
              score={score}
              title={title}
              company={profile.company}
            />
          ))}
        </div>
      )}
      <div className={styles.slide}>
        {match && (
          <Carousel ref={refInfo} control={true} custom={[]}>
            {reviewInfo.map(({ author, score }) => (
              <ReviewsInfo
                key={score}
                author={author}
                score={score}
                title={title}
                company={profile.company}
              />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Reviews;
