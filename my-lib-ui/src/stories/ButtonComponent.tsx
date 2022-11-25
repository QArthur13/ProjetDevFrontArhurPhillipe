import React from "react";

type ButtonComponentProps = {

  label: string,
  onClick?: () => void

}

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {

  const { label, onClick } = props;

  return (

    <button onClick={onClick}>{label ? label : "Le bouton"}</button>

  );

};

export default ButtonComponent;
