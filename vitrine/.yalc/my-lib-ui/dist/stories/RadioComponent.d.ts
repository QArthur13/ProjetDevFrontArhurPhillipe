import React from "react";
import "../styles/radio.css";
interface RadioComponentProps {
    id1: string;
    value1: string;
    id2: string;
    value2: string;
    onChange?: (data: any) => any;
}
declare const RadioComponent: React.FC<RadioComponentProps>;
export default RadioComponent;
