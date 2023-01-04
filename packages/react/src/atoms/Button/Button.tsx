import React from "react";
import "@dse/scss/lib/Button.css";

interface ButtonProps {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, children }) => {
  return (
    <button className="btn btn-primary" title={title} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
