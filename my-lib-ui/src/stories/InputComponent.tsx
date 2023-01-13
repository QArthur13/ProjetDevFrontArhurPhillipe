import React from "react";

interface InputComponentProps {

  label: string,
  htmlFor: string
  type: "text" | "email" | "password",
  value: string,
  onChange?: (data: any) => any

}

const InputComponent: React.FC<InputComponentProps> = (props) => {

  const { label, htmlFor, type, value, onChange} = props;
  const handleChange = (event: any) => {

    console.log("Test du input!");
    //console.log({"label": label, "htmlFor": htmlFor, "type": type, "value": value, "onChange": onChange});

    if (onChange) {

      onChange(event.target.value);

    }

  }

  return (

    <div>
      <label htmlFor={htmlFor}>{label}:</label>
      <input type={type} id={htmlFor} name={htmlFor} value={value} onChange={handleChange}/>
    </div>

  );

  /*const [val, setVal] = useState<string>(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {

    console.log("Test");
    //setValue(event.target.value);
    setVal(event.target.value);
    console.log(value);

  };

  return (

    <div>
      <label htmlFor={htmlFor}>{label}:</label>
      <input type={type} id={htmlFor} name={htmlFor} value={value} onChange={handleChange}/>
    </div>

  );*/

}

export default InputComponent;
