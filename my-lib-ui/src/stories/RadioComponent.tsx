import React, {useState} from "react";

const RadioComponent: React.FC = () => {

  const [value, setValue] = useState<any>("");

  return (

    <div>
      <input type="radio" id={"entrepreneur"} name={"who"} value={"entrepreneur"} onChange={(event) => setValue(event.target.value)}/>
      <label htmlFor={"entrepreneur"}>Je suis entrepreneur</label>
      <input type="radio" id={"particulier"} name={"who"} value={"particulier"} onChange={(event) => setValue(event.target.value)}/>
      <label htmlFor={"particulier"}>Je suis un particulier</label>
    </div>

  );

}

export default RadioComponent
