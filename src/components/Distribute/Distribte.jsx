import React from "react";
import styles from "./Distribte.module.css";
import BannerDist from "./BannerDist/BannerDist";
import money from "../../../public/img/assets/money-bag.png";
import shopping from "../../../public/img/assets/shopping-cart.png";
import global from "../../../public/img/assets/global.png";
import game from "../../../public/img/assets/game.png";
import wallet from "../../../public/img/assets/wallet.png";
import value from "../../../public/img/assets/value.png";
import Card from "./Card/Card";

const card = [
  {
    icon: global,
    title: "Alcance um público global",
    description:
      "Distribuição direta para mais de 270 milhões de usuários da Epic em 187 países com suporte para 16 idiomas.",
  },
  {
    icon: money,
    title: "Divisão de receita 88%/12%",
    description:
      "Fique com 88% da receita e monitore o desempenho do produto com painéis de análise integrados.",
  },
  {
    icon: game,
    title: "Engaje os jogadores",
    description:
      "Tenha acesso a recursos da loja como lista de desejos, conquistas, promoções com alcance em toda a loja e mais!",
  },
  {
    icon: shopping,
    title: "E-commerce mundial",
    description:
      "O serviço de pagamento da Epic tem suporte para mais de 100 métodos de pagamento em 43 moedas regionais e muitas outras que estão por vir.",
  },
  {
    icon: wallet,
    title: "Carteira Epic",
    description:
      "Os usuários podem carregar as suas Carteiras com fundos para gastar em produtos e serviços na loja, agora disponível em mais de 180 países.",
  },
  {
    icon: value,
    title: "Benefícios Adicionais",
    description:
      "Consiga classificações da IARC de forma simples no Portal do Desenvolvedor da Epic, solicite localizações sem custo para páginas da loja e ative o Apoie-um-Criador, nossa rede afiliada.",
  },
];

const Distribte = () => {
  return (
    <div className="max appMain">
      <BannerDist />

      <div className={styles.card}>
        {card.map((c) => (
          <Card key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
};

export default Distribte;
