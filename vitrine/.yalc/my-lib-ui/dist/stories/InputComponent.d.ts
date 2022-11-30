import React from "react";
interface InputComponentProps {
    label: string;
    htmlFor: string;
    type: "text" | "email" | "tel";
}
declare const InputComponent: React.FC<InputComponentProps>;
export default InputComponent;
