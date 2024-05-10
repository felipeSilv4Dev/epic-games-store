import React from "react";
import styles from "./Account.module.css";
import Image from "../../../Components/Image/Image";

const Account = ({ title, img, profile }) => {
  return (
    <div className={styles.container + " flex"}>
      <div className={styles.picture}>
        <Image src={profile.img[0]} alt={title} />
      </div>

      <div className={styles.text + " flex"}>
        <Image src={img.logo} alt="Logo" />
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Account;
