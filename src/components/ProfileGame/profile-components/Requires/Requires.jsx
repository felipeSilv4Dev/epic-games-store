import React from "react";
import styles from "./Requires.module.css";
import System from "./requires-components/System/System";

const Requires = ({ title, profile }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Requisitos de sistema de {title}</h2>

      <div className={styles.content}>
        <div className={styles.header}>
          <a href="#wind">
            <h2>Windows</h2>
          </a>
        </div>

        <div className={styles.system}>
          <div>
            <h2 className={styles.systemTitle}>Mínimo</h2>

            <System title="Windows 10" subtitle="Sistema operaciona" />
            <System
              title="Intel i7 4790 ou AMD Ryzen 5 1600"
              subtitle="Processador"
            />
            <System title="8 GB em canal duplo" subtitle="Memória" />
            <System title="65 GB de SSD" subtitle="Armazenamento" />
            <System
              title="NVIDIA GTX 1060 de 6 GB ou AMD RX 570 de 8 GB"
              subtitle="Placa de vídeo"
            />
          </div>

          <div>
            <h2 className={styles.systemTitle}>Recomendado</h2>

            <System title="Windows 10" subtitle="Sistema operaciona" />
            <System
              title="Intel i7 4790 ou AMD Ryzen 5 1600"
              subtitle="Processador"
            />
            <System title="8 GB em canal duplo" subtitle="Memória" />
            <System title="65 GB de SSD" subtitle="Armazenamento" />
            <System
              title="NVIDIA GTX 1060 de 6 GB ou AMD RX 570 de 8 GB"
              subtitle="Placa de vídeo"
            />
          </div>
        </div>

        <System
          title={profile.company}
          subtitle="Contas para login obrigatórias"
        />

        <System
          title="ÁUDIO: inglês, inglês (adaptado), francês, alemão, espanhol (Espanha), japonês
TEXTO: inglês, francês, italiano, alemão, espanhol (Espanha), português (Brasil), espanhol (América Latina), japonês, coreano, chinês simplificado, chinês tradicional, polonês, árabe, russo
COMENTÁRIOS: o inglês (adaptado) é destinado apenas a países asiáticos. Será usado no lugar do inglês neutro nesses territórios."
          subtitle="Idiomas suportados"
        />

        <div className={styles.footer}>
          <span>
            © 2024 {profile.company}. All Rights Reserved. {title},
            {profile.company}, and the {profile.company} logo are registered or
            unregistered trademarks of {profile.company} in the US and/or other
            countries.
          </span>
          <h2>Política de Privacidade</h2>
        </div>
      </div>
    </div>
  );
};

export default Requires;
