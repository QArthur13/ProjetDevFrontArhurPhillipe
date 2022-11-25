import React, {useState} from "react";

//type Props = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

const SelectComponent: React.FC = () => {

  const [value, setValue] = useState<string>("");

  return (

    <div>
      <label htmlFor="country">Nationalité:</label>
      <select name="country" id="country" value={value} onChange={(event) => setValue(event.target.value)}>
        <option value="france">France</option>
        <option value="allemagne">Alemagne</option>
        <option value="espagne">Espagne</option>
        <option value="italie">Italie</option>
        <option value="belgique">Belgique</option>
      </select>
    </div>

  );

}

export default SelectComponent;
