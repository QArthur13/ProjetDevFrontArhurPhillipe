import React from "react";

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

    <button type={type ? type : "button"} onClick={handleTest}>{label ? label : "bouton"}</button>

  );

};

export default ButtonComponent;
