import React from "react";
import "./Button.css";

const Button = ({ type, addClick, children, className }) => {
  const theClass = `button ${className}`;

  return (
    <button type={type} className={theClass} onClick={addClick}>
      {children}
    </button>
  );
};
export default Button;
