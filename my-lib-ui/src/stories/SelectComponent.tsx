import React from "react";

interface SelectComponentProps {

  label: string,
  htmlFor: string,
  value: any,
  options: string[],
  onChange?: (data: any) => any

}

const SelectComponent: React.FC<SelectComponentProps> = (props) => {

  const { label, htmlFor, value, options, onChange } = props;
  //const [value, setValue] = useState<string>("");
  const handleChange = (event: any) => {

    /*setValue(event.target.value)
    console.log(value);*/

    console.log("Test dans le composant select!");

    if (onChange) {

      onChange(event.target.value);

    }

  };

  return (

    <div>
      <label htmlFor={htmlFor}>{label}:</label>
      <select name={htmlFor} id={htmlFor} value={value} onChange={handleChange}>
        <option value="">Choisir une nationalité</option>
        {options.map((value, index) => (

          <option key={index} value={value}>{value}</option>

        ))}
      </select>
    </div>

  );

}

export default SelectComponent;
