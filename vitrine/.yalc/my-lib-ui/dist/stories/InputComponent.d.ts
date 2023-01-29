import React from "react";
interface InputComponentProps {
    label: string;
    htmlFor: string;
    type: "text" | "email" | "password" | "number";
    value: string | number;
    onChange?: (data: any) => any;
}
declare const InputComponent: React.FC<InputComponentProps>;
export default InputComponent;
