import { useCallback, useRef, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async (url, signal) => {
    try {
      setData(null);
      setError(null);
      setLoading(true);

      const response = await fetch(url, { signal });
      if (!response.ok) throw new Error(`Error: ${response.status}💥`);
      const { game } = await response.json();

      setData(game);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    error,
    data,
    loading,
    request,
  };
};

export default useFetch;
