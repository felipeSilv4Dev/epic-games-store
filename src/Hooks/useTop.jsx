import { useCallback } from "react";

const useTop = () => {
  const useTop = useCallback(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return useTop;
};

export default useTop;
