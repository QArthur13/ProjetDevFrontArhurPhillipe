import React from "react";
import "../styles/radio.css";

interface RadioComponentProps {

  id1: string,
  value1: string,
  id2: string,
  value2: string,
  onChange?: (data: any) => any

}

const RadioComponent: React.FC<RadioComponentProps> = (props) => {

  //const [value, setValue] = useState<string>("");
  const { id1, value1, id2, value2, onChange } = props;
  /*const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setValue(event.target.value);
    console.log(value);

  };*/
  const handleChange = (event: any) => {

    console.log("Test du radio!");

    if (onChange) {

      onChange(event.target.value);

    }

  }

  return (

    <div>
      {/*checked={value === value1} checked={value === value2}*/}
      <input type="radio" id={id1} name={"choice"} value={value1} onChange={handleChange}/>
      <label htmlFor={value1}>une {value1}</label>
      <input type="radio" id={id2} name={"choice"} value={value2} onChange={handleChange}/>
      <label htmlFor={value2}>un {value2}</label>
    </div>

  );

}

export default RadioComponent
