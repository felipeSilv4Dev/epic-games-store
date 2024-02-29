import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";
import useMatch from "../../Hooks/useMatch";
import NavModal from "./nav-components/NavModal";
import SearchModal from "./nav-components/SearchModal";
import useFetch from "../../Hooks/useFetch";
import Game from "./nav-components/Game";
import { API_URL } from "../../Api/Api";

const Nav = () => {
  const container = useRef();
  const match = useMatch("80em");
  const matchMobile = useMatch("64em");
  const { request, data } = useFetch();
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [gameSearch, setGameSearch] = useState([]);
  const [value, setValue] = useState("");

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
              <a className="link" href="#Descobrir">
                Descobrir
              </a>
              <a className="link" href="#Navegar">
                Navegar
              </a>
              <a className="link" href="#Novidades">
                Novidades
              </a>
            </div>
          )}
          {match && (
            <div>
              <button
                onClick={() => setNav(!nav)}
                className={styles.nav + `${nav ? " active" : ""}`}
              >
                <li className="flex">
                  <span className={styles.link}>Descobrir</span>
                  <i className="fa-solid fa-chevron-down "></i>
                </li>
              </button>

              <NavModal setNav={setNav} nav={nav} />
            </div>
          )}
        </div>

        <div className={styles.carrinho + " flex"}>
          {!matchMobile && (
            <a className="link" href="#Lista de desejos">
              Lista de desejos
            </a>
          )}
          {!matchMobile && (
            <a className="link" href="#carrinho">
              carrinho
            </a>
          )}
          {matchMobile && <i className="fa-regular fa-circle-check"></i>}
          {matchMobile && <i className="fa-solid fa-cart-shopping"></i>}
        </div>
      </div>
    </section>
  );
};

export default Nav;
