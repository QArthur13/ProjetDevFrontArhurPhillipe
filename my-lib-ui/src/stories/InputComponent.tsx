import React, {useState} from "react";

interface InputComponentProps {

  label: string,
  htmlFor: string
  type: "text" | "email" | "tel" | "password",

}

const InputComponent: React.FC<InputComponentProps> = (props) => {

  const { label, htmlFor, type} = props;
  const [value, setValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setValue(e.target.value);

  return (

    <div className={"test"}>
      <label htmlFor={htmlFor}>{label}:</label>
      <input type={type} id={htmlFor} name={htmlFor} value={value} onChange={handleChange}/>
    </div>

  );

}

export default InputComponent;
