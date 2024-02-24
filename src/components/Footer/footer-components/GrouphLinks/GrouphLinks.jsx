import React from "react";
import Paragraph from "../Paragraph/Paragraph";

const GrouphLinks = ({ text1, text2, text3, text4 }) => {
  return (
    <div>
      <Paragraph text={text1} />
      <Paragraph text={text2} />
      <Paragraph text={text3} />
      {text4 && <Paragraph text={text4} />}
    </div>
  );
};

export default GrouphLinks;
