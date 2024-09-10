import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url, signal) => {
    try {
      setLoading(true);
      setData(null);
      setError(null);

      const response = await fetch(url, { signal });

      if (!response.ok) throw new Error(`Error: ${response.status}💥`);
      const game = await response.json();
      setData(game.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
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
