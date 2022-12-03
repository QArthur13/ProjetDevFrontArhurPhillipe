import React, {useState} from "react";

interface SelectComponentProps {

  htmlFor: string,
  options: string[]

}

const SelectComponent: React.FC<SelectComponentProps> = (props) => {

  const { htmlFor, options } = props;
  const [value, setValue] = useState<string>("");

  return (

    <div>
      <label htmlFor={htmlFor}>Nationalité:</label>
      <select name="country" id={htmlFor} value={value} onChange={(event) => {

        setValue(event.target.value)
        console.log(event.target.value)

      }}>
        <option value="">Sélectionner une nationalité</option>
        {options.map((value, index) => (

          <option key={index} value={value}>{value}</option>

        ))}
      </select>
    </div>

  );

}

export default SelectComponent;
