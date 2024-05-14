import React from "react";
import styles from "./Business.module.css";
import Image from "../../../Components/Image/Image";
import { useNavigate } from "react-router";

const Business = ({ profile, img, id }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/game/${id}`)} className={styles.container}>
      <div
        style={{
          background: `url(${profile.img[1]}) no-repeat center center`,
          backgroundSize: "cover",
        }}
        className={styles.bg}
      >
        <Image src={img.logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Business;
