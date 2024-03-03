import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./List.module.css";
import Card from "../Card/Card";
import useFetch from "../../../../Hooks/useFetch";
import { API_URL } from "../../../../Api/Api";
import Loading from "../LoadingList/Loading";

const List = ({ title, btn, initial, final, nav }) => {
  const { request, data, loading } = useFetch();

  useEffect(() => {
    (async () => await request(API_URL))();
  }, [request]);

  if (loading) return <Loading />;

  if (data) {
    return (
      <div className={styles.container}>
        <div className={styles.header + " flex"}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.btn}>{btn}</p>
        </div>

        <div>
          {data.slice(initial, final).map((item) => {
            return nav ? (
              <NavLink key={item.id} to={`game/${item.id}`}>
                <Card {...item} img={item.img.src1} />
              </NavLink>
            ) : (
              <Card key={item.id} {...item} img={item.img.src1} />
            );
          })}
        </div>
      </div>
    );
  }
};

export default List;
