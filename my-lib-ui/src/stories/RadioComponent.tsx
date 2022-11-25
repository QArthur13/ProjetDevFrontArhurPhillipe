import React, {useState} from "react";

interface RadioComponentProps {

  id1: string,
  value1: string,
  id2: string,
  value2: string

}

const RadioComponent: React.FC<RadioComponentProps> = (props) => {

  const [value, setValue] = useState<string>("");

  const { id1, value1, id2, value2 } = props;

  return (

    <div>
      <input type="radio" id={id1} name={"choice"} checked={value === value1} value={value1} onChange={(event) => {

        console.log(event.target.value);
        setValue(event.target.value);

      }}/>
      <label htmlFor={value1}>Je suis {value1}</label>
      <input type="radio" id={id2} name={"choice"} value={value2} checked={value === value2} onChange={(event) => {

        console.log(event.target.value);
        setValue(event.target.value);

      }}/>
      <label htmlFor={value2}>Je suis un {value2}</label>
    </div>

  );

}

export default RadioComponent
