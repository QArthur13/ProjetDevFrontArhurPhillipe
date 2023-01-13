import React from "react";
interface InputComponentProps {
    label: string;
    htmlFor: string;
    type: "text" | "email" | "password";
    value: string;
    onChange?: (data: any) => any;
}
declare const InputComponent: React.FC<InputComponentProps>;
export default InputComponent;
