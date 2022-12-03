import React, {useState} from "react";

interface CheckboxComponentProps {

  htmlFor: string

}

const CheckboxComponent: React.FC<CheckboxComponentProps> = (props) => {

  const { htmlFor } = props;
  const [value, setValue] = useState<boolean>(false);

  return (

    <div>
      <input type="checkbox" id={htmlFor} name={htmlFor} checked={value} onChange={(event) => setValue(event.target.checked)}/>
      <label htmlFor={htmlFor}>J’atteste que je possède un permis de conduire valide.</label>
    </div>

  );

}

export default CheckboxComponent;
