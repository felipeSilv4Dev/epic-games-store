import { NavLink } from "react-router-dom";
import styles from "./List.module.css";
import CardList from "../CardList/CardList";
import Loading from "../LoadingList/Loading";

const List = ({ props, nav = true, data, loading }) => {
  if (loading) return <Loading />;

  if (data) {
    return (
      <div className={styles.container}>
        <div className={styles.header + " flex"}>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.btn}>{props.btn}</p>
        </div>

        <div>
          {data.slice(props.initial, props.final).map((game) => {
            return nav ? (
              <NavLink key={game.id} to={`game/${game.id}`}>
                <CardList game={game} src={"src1"} />
              </NavLink>
            ) : (
              <CardList key={game.id} game={game} src={"src1"} />
            );
          })}
        </div>
      </div>
    );
  }
};

export default List;
