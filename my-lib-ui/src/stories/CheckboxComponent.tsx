import React, {useState} from "react";

const CheckboxComponent: React.FC = () => {

  const [value, setValue] = useState<boolean>(false);

  return (

    <div>
      <input type="checkbox" id={"agree"} name={"agree"} checked={value} onChange={(event) => setValue(event.target.checked)}/>
      <label htmlFor="agree">Accepter les conditions: </label>
    </div>

  );

}

export default CheckboxComponent;
