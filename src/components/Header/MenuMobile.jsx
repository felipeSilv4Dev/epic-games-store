import React from "react";
import styles from "./MenuMobile.module.css";
import ModalMobile from "./ModalMobile";
import Icon from "./header-components/Icon";
import LiMenu from "./header-components/LiMenu";

const MenuMobile = (active) => {
  const [idioma, setIdioma] = React.useState(false);
  const [login, setLogin] = React.useState(false);

  React.useEffect(() => {
    if (!active.active) {
      setIdioma(false);
      setLogin(false);
    }
  }, [active.active]);

  return (
    <div className={styles.container + `${active.active ? " active" : ""}`}>
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
              <LiMenu text="Distribuição" />
              <LiMenu text="Suporte" />
              <LiMenu text="Unreal Engine" />
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
