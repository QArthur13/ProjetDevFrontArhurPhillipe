import React from "react";

interface ButtonComponentProps {

  label: string,
  type: 'button' | 'submit',
  classes?: any,
  styles?: any
  onClick?: () => void

}

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {

  const { label, type, classes, styles, onClick } = props;

  const handleTest = () => {

    console.log("Le callback va bientôt arriver!");
    console.log({"label": label, "type": type, "onClick": onClick});

    if (onClick) {

      onClick();

    }

  }

  return (

    <button className={classes} style={styles} type={type} onClick={handleTest}>{label}</button>

  );

};

export default ButtonComponent;
