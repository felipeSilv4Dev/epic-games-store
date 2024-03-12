import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";
import useMatch from "../../Hooks/useMatch";
import NavModal from "./nav-components/NavModal";
import SearchModal from "./nav-components/SearchModal";
import useFetch from "../../Hooks/useFetch";
import Game from "./nav-components/Game";
import { API_URL } from "../../Api/Api";
import { NavLink, useParams } from "react-router-dom";

const Nav = ({ setDist }) => {
  const container = useRef();
  const match = useMatch("80em");
  const matchMobile = useMatch("64em");
  const { request, data } = useFetch();
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [gameSearch, setGameSearch] = useState([]);
  const [value, setValue] = useState("");
  const [path, setPath] = useState("/");
  const { pathname } = window.location;

  const pathNow = useCallback(() => {
    const { pathname } = window.location;
    setPath(pathname);
  }, []);

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  function handleScroll() {
    if (!container.current) return;
    const active = container.current.classList.contains("active");
    const { offsetTop } = container.current;

    if (active && scrollY < offsetTop) {
      container.current.classList.remove("active");
    }

    if (!active && scrollY >= offsetTop) {
      container.current.classList.add("active");
    }
  }

  useEffect(() => {
    if (container.current) {
      const { offsetHeight } = container.current;
      setDist((dist) => ({ ...dist, height: offsetHeight }));
    }
  }, [setDist]);

  useEffect(() => {
    (async () => await request(API_URL))();
  }, [request]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleChange = useCallback(
    ({ target }) => {
      setValue(target.value);
      setGameSearch(
        data.filter((item) =>
          item.title.toLowerCase().includes(target.value.toLowerCase())
        )
      );
      if (target.value === "") setGameSearch([]);
    },
    [data]
  );

  return (
    <section ref={container} className={`${styles.container}`}>
      <div className={styles.navMobile + " max flex"}>
        <div className={styles.content + " flex"}>
          <div className={styles.input}>
            <i
              onClick={() => setSearch(!search)}
              className="fa-solid fa-magnifying-glass"
            ></i>
            {matchMobile && search && (
              <SearchModal
                onFocus={handleChange}
                onChange={handleChange}
                value={value}
                onBlur={() => {
                  setValue("");
                  setGameSearch([]);
                }}
                setSearch={setSearch}
              />
            )}
            <input
              onFocus={handleChange}
              onChange={handleChange}
              value={value}
              onBlur={() => {
                setValue("");
                setGameSearch([]);
              }}
              type="text"
              placeholder="Pesquisar Loja"
            />
            {value && (
              <div className={styles.searchRender}>
                {gameSearch.length > 0 ? (
                  gameSearch
                    .slice(0, 4)
                    .map((item) => <Game key={item.id} {...item} />)
                ) : (
                  <h2 className={styles.searchError}>Nenhum jogo encontrado</h2>
                )}
              </div>
            )}
          </div>

          {!match && (
            <div className={styles.nav + " flex"}>
              <NavLink className="link" to="/">
                Descobrir
              </NavLink>
              <NavLink className="link" to="navegar">
                Navegar
              </NavLink>
              <NavLink className="link" to="novidades">
                Novidade
              </NavLink>
            </div>
          )}

          {match && (
            <div>
              <button
                onClick={() => setNav(!nav)}
                className={styles.nav + `${nav ? " active" : ""}`}
              >
                <li className="flex">
                  {path === "/" && (
                    <span className={styles.link}>Descobrir</span>
                  )}
                  {path === "/navegar" && (
                    <span className={styles.link}>navegar</span>
                  )}
                  {path === "/novidades" && (
                    <span className={styles.link}>novidades</span>
                  )}
                  <i className="fa-solid fa-chevron-down "></i>
                </li>
              </button>

              <NavModal setNav={setNav} nav={nav} pathNow={pathNow} />
            </div>
          )}
        </div>

        <div className={styles.carrinho + " flex"}>
          {!matchMobile && (
            <NavLink className="link " to="markup">
              Lista de desejos
            </NavLink>
          )}
          {!matchMobile && (
            <NavLink className="link" to="carrinho">
              carrinho
            </NavLink>
          )}

          {matchMobile && (
            <NavLink className={styles.icon} to="markup">
              <i className="fa-regular fa-circle-check"></i>
            </NavLink>
          )}

          {matchMobile && (
            <NavLink className={styles.icon} to="carrinho">
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          )}
        </div>
      </div>
    </section>
  );
};

export default Nav;
