import React from "react";
import styles from "./Header.module.css";
import logo from "../../../public/img/header/header-logo.png";
import store from "../../../public/img/header/header-store.png";
import useMatch from "../../Hooks/useMatch";
import MenuMobile from "./MenuMobile";
import Modal from "./Modal";
import ModalHover from "./ModalHover";
import Icon from "./header-components/Icon";
import LiMenu from "./header-components/LiMenu";
import { NavLink } from "react-router-dom";
import useTop from "../../Hooks/useTop";

const Header = () => {
  const [mobile, setMobile] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [idioma, setIdioma] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [right, setRight] = React.useState(0);
  const match = useMatch("80em");
  const top = useTop();

  const handleClick = () => {
    setMobile(!mobile);
    setIdioma(false);
    setLogin(false);
    setModal(false);
    top();
    document.body.style.overflowY = mobile ? "initial" : "hidden";
    window.removeEventListener("scroll", handleClick);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const distRight = (target) => {
    const elemnt = target.offsetWidth + target.offsetLeft;
    const right = (window.innerWidth - elemnt) * 0.1;
    return right;
  };

  const handleMouseOverIdioma = ({ target }) => {
    const right = distRight(target);
    setRight(right);
    setIdioma(true);
  };

  const handleMouseOverLogin = ({ target }) => {
    const right = distRight(target);
    setRight(right);
    setLogin(true);
  };
  return (
    <>
      <header
        className={styles.header + `${mobile ? " active" : ""}` + " flex"}
        aria-expanded={mobile}
      >
        <div className={styles.logo_container + " flex"}>
          <div className={styles.logo_box + " flex"}>
            <span className={styles.logo} onClick={handleModal}>
              <img src={logo} title="Logo" />
            </span>
            <span
              onClick={handleModal}
              className={styles.arrow + `${modal ? " active" : ""}`}
            >
              <Icon classe="fa-solid fa-chevron-down" />
            </span>
          </div>

          <span className={styles.store}>
            <NavLink to="/">
              <img src={store} title="Store" />
            </NavLink>
          </span>
        </div>

        <div className={styles.nav}>
          <ul className="flex">
            <li className="link">Suporte</li>
            <li className="link">Distribuição</li>
          </ul>
        </div>

        <div className={styles.login + " flex"}>
          <span
            onMouseOut={() => setIdioma(false)}
            onMouseOver={handleMouseOverIdioma}
            className={`${styles.globe} ${idioma ? " active" : ""}`}
          >
            <Icon classe="fa-solid fa-globe" />
          </span>

          <span
            onMouseOut={() => setLogin(false)}
            onMouseOver={handleMouseOverLogin}
            className={`${styles.user} ${login ? " active" : ""}`}
            href="#login"
          >
            <Icon classe="fa-solid fa-user" />
          </span>

          <a className={styles.download} href="#download">
            Download
          </a>
        </div>
        {match && (
          <button onClick={handleClick} className={styles.btn}>
            <span className={styles.btn_span}></span>
          </button>
        )}
        {<MenuMobile active={mobile} />}
        {<Modal active={modal} setModal={setModal} />}
      </header>

      {idioma && (
        <ModalHover id="idioma" right={right} setModal={setIdioma}>
          <LiMenu text="English" />
          <LiMenu text="Português" />
          <LiMenu text="Espanhol" />
          <LiMenu text="Italiano" />
          <LiMenu text="Alemão" />
        </ModalHover>
      )}

      {login && (
        <ModalHover right={right} setModal={setLogin}>
          <LiMenu text="Minhas conquistas" />
          <LiMenu text="Cupons" />
          <LiMenu text="Carteira" />
          <LiMenu text="Conta" />
          <LiMenu text="Sair" />
        </ModalHover>
      )}
    </>
  );
};

export default Header;
