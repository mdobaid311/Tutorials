import React from "react";

type ButtonProps = {
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.clickHandler}>Click</button>;
};

export default Button;
