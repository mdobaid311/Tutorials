import React from "react";

type InputProps = {
  handlerChange  : (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <div>
      <input type="text" onChange={props.handlerChange} />
    </div>
  );
};

export default Input;
