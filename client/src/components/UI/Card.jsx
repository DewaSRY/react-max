import React from "react";

import classes from "./Card.moule.css";

const Card = (props) => {
  const classe = ` ${classes.card} + ${props.className}`;

  return <div className={classe}>{props.children}</div>;
};

export default Card;
