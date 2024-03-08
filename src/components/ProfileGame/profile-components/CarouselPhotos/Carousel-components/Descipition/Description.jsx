import React from "react";
import styles from "./Description.module.css";

const Description = ({ title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.description + " flex"}>
        <p>
          Inclui {title}: Modo História e {title} Online.
        </p>
        <p>
          Vencedor de mais de 175 prêmios de Jogo do Ano e avaliado com mais de
          250 notas máximas, {title} é uma história épica de honra e lealdade no
          alvorecer dos tempos modernos.
        </p>
        <p>
          Estados Unidos, 1899. Arthur Morgan e a gangue Van der Linde são
          forçados a fugir. Com agentes federais e os melhores caçadores de
          recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar
          para sobreviver no impiedoso coração dos Estados Unidos. Conforme
          divisões internas profundas ameaçam despedaçar a gangue, Arthur deve
          fazer uma escolha entre os seus próprios ideais e a lealdade à gangue
          que o criou.
        </p>
        <p>
          {title} também inclui o mundo compartilhado de {title} Online – trilhe
          seu próprio caminho enquanto enfrenta autoridades, gangues fora da lei
          e animais selvagens ferozes para construir uma vida na fronteira dos
          Estados Unidos. Monte um acampamento, cavalgue com ou sem um bando e
          explore tudo, das montanhas nevadas no norte aos pântanos do sul, de
          postos remotos a fazendas agitadas e cidades vibrantes. Vá atrás de
          recompensas, cace, pesque e negocie, procure tesouros exóticos, toque
          sua própria destilaria clandestina de Moonshine ou se torne
          Naturalista para aprender os segredos do reino animal e muito mais num
          mundo rico em detalhes. Inclui todos os recursos, conteúdos e
          melhorias adicionados desde o lançamento.
        </p>
      </div>
    </div>
  );
};

export default Description;
