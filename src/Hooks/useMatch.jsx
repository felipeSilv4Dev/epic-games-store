import React from "react";

const UseMatch = (value) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = matchMedia(`(max-width:${value}`);

      setMatch(matches);
    }
    changeMatch();
    window.addEventListener("resize", changeMatch);

    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [value]);

  return match;
};

export default UseMatch;
