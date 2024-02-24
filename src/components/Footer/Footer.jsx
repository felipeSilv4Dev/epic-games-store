import React from "react";
import styles from "./Footer.module.css";
import logo from "../../../public/img/header/header-logo.png";
import Paragraph from "./footer-components/Paragraph/Paragraph";
import GrouphLinks from "./footer-components/GrouphLinks/GrouphLinks";

const Footer = () => {
  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header + " flex"}>
          <div className={styles.social + " flex"}>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <i
            onClick={handleClick}
            className={styles.arrow + " fa-solid fa-chevron-down"}
          ></i>
        </div>

        <div className={styles.links}>
          <h2 className={styles.title}>Recursos</h2>
          <div className={styles.grouphLinks}>
            <GrouphLinks
              text1="Apoie-um-Criador"
              text2="Dristribuir na Epic Games"
              text3="Carreiras"
              text4="Empresa"
            />

            <GrouphLinks
              text1="Política de Conteúdo de Fãs"
              text2="Pesquisa de Usuário"
              text3="EULA da Loj"
            />

            <GrouphLinks
              text1="Serviços online"
              text2="Regras da comunidade"
              text3="Sala de Imprensa de Epic"
            />
          </div>
        </div>

        <div className={styles.links}>
          <h2 className={styles.title}>Feito pela Epic Games</h2>
          <div className={styles.grouphLinks}>
            <GrouphLinks
              text1="Battle Breakrs"
              text2="Fortnite"
              text3="Infinity Blade"
            />
            <GrouphLinks
              text1="Robo Recal"
              text2="Shadow Complex"
              text3="Unreal Tournament"
            />
          </div>
        </div>
        <span className={styles.line}></span>

        <div className={styles.text}>
          © 2024, Epic Games, Inc. Todos os direitos reservados. Epic, Epic
          Games, o logotipo da Epic Games, Fortnite, o logotipo do Fortnite,
          Unreal, Unreal Engine, o logotipo da Unreal Engine, Unreal Tournament
          e o logotipo do Unreal Tournament são marcas comerciais ou registradas
          da Epic Games, Inc. nos Estados Unidos da América e em outros lugares.
          Outras marcas e nomes de produtos são marcas registradas de seus
          respectivos donos. Nossos sites podem conter links para outros sites e
          recursos fornecidos por terceiros. Esses links são fornecidos apenas
          para a sua conveniência. A Epic Games não tem controle sobre o
          conteúdo desses sites ou recursos e não aceita nenhuma
          responsabilidade por eles ou por qualquer perda ou dano que possa
          resultar de seu uso.
        </div>

        <div className={styles.termos + " flex"}>
          <div className={styles.termosLinks + " flex"}>
            <Paragraph text="Termos de Serviços" />
            <Paragraph text="Política de Privacidade" />
            <Paragraph text="Política de Reembolso da Loja" />
          </div>

          <img onClick={handleClick} src={logo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
