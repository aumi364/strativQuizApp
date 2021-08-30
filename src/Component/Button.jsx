import React from "react";

const Button = ({ children, onHandler }) => {
  return <button onClick={onHandler}>{children}</button>;
};

export default Button;
