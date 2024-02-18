import React, { useCallback, useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async (url) => {
    let json;
    let response;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url);
      if (!response.ok) throw new Error("Erro nas buscas 💥");
      json = await response.json();

      setData(json);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setLoading(false);
    }
    return { response, json };
  }, []);
  return {
    error,
    data,
    loading,
    request,
  };
};

export default useFetch;
