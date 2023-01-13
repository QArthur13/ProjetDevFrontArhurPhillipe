import React from "react";
interface SelectComponentProps {
    label: string;
    htmlFor: string;
    value: any;
    options: string[];
    onChange?: (data: any) => any;
}
declare const SelectComponent: React.FC<SelectComponentProps>;
export default SelectComponent;
