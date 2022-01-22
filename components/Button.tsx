import React, { ReactChild } from "react";

type Props = {
  className?: string;
  children: ReactChild;
  primary?: boolean;
  secondary?: boolean;
};

const Button = (props: Props) => {
  const primary = "bg-primary hover:bg-[#1C9C74] text-white";
  const secondary = "border-2 border-subtitle";

  const style = props.primary ? primary : secondary;

  return (
    <button
      className={`${style} transition duration-300 hover:scale-105 active:scale-95 rounded-md w-full text-base font-medium py-2`}
    >
      {props.children}
    </button>
  );
};

export default Button;
