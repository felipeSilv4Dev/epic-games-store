import React, { useEffect } from "react";
import useTop from "../../Hooks/useTop";

const Car = () => {
  const top = useTop();
  useEffect(top, [top]);

  return <div>Car</div>;
};

export default Car;
