import React, {useState} from "react";

interface CheckboxComponentProps {

  htmlFor: string

}

const CheckboxComponent: React.FC<CheckboxComponentProps> = (props) => {

  const { htmlFor } = props;
  const [value, setValue] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setValue(event.target.checked);
    console.log(value);

  };

  return (

    <div>
      <input type="checkbox" id={htmlFor} name={htmlFor} checked={value} onChange={handleChange}/>
      <label htmlFor={htmlFor}>J’atteste que je possède un permis de conduire valide.</label>
    </div>

  );

}

export default CheckboxComponent;
