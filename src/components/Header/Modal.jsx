import LiModal from "./header-components/LiModal";
import styles from "./Modal.module.css";

const Modal = ({ active, setModal }) => {
  const handleClick = (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    if (e.target.classList.contains("active")) setModal(false);
  };

  const crie = [
    {
      class: "fa-solid fa-play",
      text: "Fortnite",
    },
    {
      class: "fa-brands fa-r-project",
      text: "Engine",
    },
    {
      class: "fa-solid fa-store",
      text: "Loja",
    },
    {
      class: "fa-solid fa-hourglass-start",
      text: "Campanha",
    },
    {
      class: "fa-solid fa-flag-checkered",
      text: "red dead",
    },
    {
      class: "fa-solid fa-handshake-angle",
      text: "suporte",
    },
    {
      class: "fa-brands fa-mandalorian",
      text: "valorant",
    },
    {
      class: "fa-solid fa-upload",
      text: "Publicar na epic games",
    },
    {
      class: "fa-solid fa-layer-group",
      text: "comunidade",
    },
  ];

  return (
    <div
      onClick={handleClick}
      className={styles.overlay + `${active ? " active" : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <h1>Jogar</h1>
            {crie.slice(0, 3).map((item, i) => (
              <div key={i}>
                <LiModal classe={item.class} text={item.text} />
              </div>
            ))}
          </div>

          <div>
            <h1>Descobrir</h1>
            {crie.slice(0, 4).map((item, i) => (
              <div key={i}>
                <LiModal classe={item.class} text={item.text} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1>Crie</h1>
          {crie.map((item, i) => (
            <div key={i}>
              <LiModal classe={item.class} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
