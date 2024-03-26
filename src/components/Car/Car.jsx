import React, { useEffect } from "react";
import useTop from "../../Hooks/useTop";
import Head from "../../Helpers/Head";

const Car = () => {
  const top = useTop();
  useEffect(top, [top]);

  return (
    <div>
      <Head
        title="Carrinho"
        description="compre os jogos mais em conta do mercado"
      />
    </div>
  );
};

export default Car;
