import React from "react";
interface ButtonComponentProps {
    label: string;
    type: 'button' | 'submit';
    onClick?: () => void;
}
declare const ButtonComponent: React.FC<ButtonComponentProps>;
export default ButtonComponent;
