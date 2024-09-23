import React, { useEffect, useState } from "react";
import styles from "./MenuMobile.module.css";
import ModalMobile from "./ModalMobile";
import Icon from "./header-components/Icon";
import LiMenu from "./header-components/LiMenu";
import { useNavigate } from "react-router";

const MenuMobile = ({ active, onClose }) => {
  const [idioma, setIdioma] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (!active) {
      setIdioma(false);
      setLogin(false);
    }
  }, [active]);

  const handleNavigate = (link) => {
    setOpen(true);
    navigate(link);
    onClose();
  };
  return (
    <div className={styles.container + `${active ? " active" : ""}`}>
      <div className={styles.content + " flex"}>
        <div className={styles.animeTop}>
          <div className={styles.login + " flex"}>
            <span onClick={() => setIdioma(true)} className={styles.globe}>
              <Icon classe="fa-solid fa-globe" />
            </span>
            <span onClick={() => setLogin(true)} className={styles.user}>
              <Icon classe="fa-solid fa-user" />
            </span>
          </div>

          <div>
            <ul className={styles.nav + " flex"}>
              <div onClick={() => handleNavigate("/suporte")}>
                <LiMenu text="Suporte" active={open} />
              </div>

              <div onClick={() => handleNavigate("/distribuir")}>
                <LiMenu text="Distribuição" active={open} />
              </div>
            </ul>
          </div>
        </div>

        <div className={styles.btn_container}>
          <a className={styles.btn} href="#Disribuica">
            download
          </a>
        </div>

        {
          <ModalMobile modal={idioma} setModal={setIdioma}>
            <LiMenu text="English" />
            <LiMenu text="Português" />
            <LiMenu text="Espanhol" />
            <LiMenu text="Italiano" />
            <LiMenu text="Alemão" />
          </ModalMobile>
        }

        {
          <ModalMobile modal={login} setModal={setLogin}>
            <LiMenu text="Minhas conquistas" />
            <LiMenu text="Cupons" />
            <LiMenu text="Carteira" />
            <LiMenu text="Conta" />
            <LiMenu text="Sair" />
          </ModalMobile>
        }
      </div>
    </div>
  );
};

export default MenuMobile;
