import { useCallback, useEffect, useState } from "react";

const LocalStorage = ({ key }) => {
  const [storage, setStorage] = useState({ games: [], car: [] });

  const setLocal = (key, options) => {
    localStorage.setItem(key, JSON.stringify(options));
    setStorage({ [key]: options });
  };

  const getItemLocal = useCallback((key) => {
    const isLocal = localStorage.getItem(key);
    return isLocal && JSON.parse(isLocal);
  }, []);

  const removeItemLocal = (gamesId, id) => {
    return gamesId.filter((game) => game !== id);
  };

  const saveItemLocal = (key, id) => {
    let gamesId = getItemLocal(key);

    if (gamesId) {
      const includeId = gamesId.includes(id);
      gamesId = removeItemLocal(gamesId, id);

      includeId ? setLocal(key, [...gamesId]) : setLocal(key, [...gamesId, id]);
    } else {
      setLocal(key, [id]);
    }
  };

  useEffect(() => {
    const gamesId = getItemLocal(key);
    setStorage({ [key]: gamesId });
  }, [key, getItemLocal]);

  return { saveItemLocal, getItemLocal, storage };
};

export default LocalStorage;
