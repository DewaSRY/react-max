import React from "react";
import "./card.css";
const Card = ({ children, className }) => {
  const theClass = `card  ${className}`;
  return <div className={theClass}>{children}</div>;
};

export default Card;
