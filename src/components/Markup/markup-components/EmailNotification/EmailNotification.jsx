import React from "react";
import styles from "./EmailNotification.module.css";
import Image from "../../../Components/Image/Image";
import email from "../../../../../public/img/assets/email.png";

const EmailNotification = () => {
  return (
    <div className={styles.email + " flex"}>
      <div className={styles.emailInfo + " flex"}>
        <Image src={email} alt="email" />
        <p className="flex">
          Receber notificações da minha lista de desejos por e-mail.
        </p>
      </div>
    </div>
  );
};

export default EmailNotification;
