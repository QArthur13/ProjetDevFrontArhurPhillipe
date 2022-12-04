import React from "react";
import "../styles/index.css";

interface ButtonComponentProps {

  label: string,
  type: 'button' | 'submit',
  onClick?: () => void

}

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {

  const { label, type, onClick } = props;

  const handleTest = () => {

    if (onClick) {

      onClick();

    }

  }

  return (

    <button className={"the-button"} type={type} onClick={handleTest}>{label}</button>

  );

};

export default ButtonComponent;
