import { useCallback, useState } from "react";

const LocalStorage = ({ key, id }) => {
  const [active, setActive] = useState(false);

  const setLocal = useCallback(
    ({ id }) => {
      const isLocal = localStorage.getItem(key);

      if (isLocal) {
        const arrayItem = JSON.parse(isLocal);
        const index = arrayItem.indexOf(id);

        if (index !== -1) {
          arrayItem.splice(index, 1);
          localStorage.setItem(key, JSON.stringify([...arrayItem]));
        } else {
          localStorage.setItem(key, JSON.stringify([...arrayItem, id]));
        }
      } else {
        localStorage.setItem(key, JSON.stringify([id]));
      }
    },
    [key]
  );

  const initial = useCallback(() => {
    const item = localStorage.getItem(key);
    if (item) {
      const arrayItem = JSON.parse(item);

      if (arrayItem.includes(id)) {
        setActive(true);
      }
    }
  }, [id, key]);

  const $any = async (e) => {
    e.preventDefault();

    setActive(!active);
    setLocal({ id });
  };

  return { $any, initial, active };
};

export default LocalStorage;
