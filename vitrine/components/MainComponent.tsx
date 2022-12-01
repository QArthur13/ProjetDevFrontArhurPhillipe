import React from "react";
import {CheckboxComponent, InputComponent, RadioComponent, SelectComponent} from "my-lib-ui";

const MainComponent: React.FC = () => {

    return (

        <main>
            <h3>Inscription</h3>
            <RadioComponent id1={"entreprise"} value1={"entreprise"} id2={"particulier"} value2={"particulier"}/>
            <InputComponent label={'lastName'} htmlFor={'lastName'} type={'text'}/>
            <InputComponent label={'firstName'} htmlFor={'firstName'} type={'text'}/>
            <InputComponent label={'email'} htmlFor={'email'} type={'email'}/>
            <InputComponent label={'tel'} htmlFor={'tel'} type={'tel'}/>
            <SelectComponent options={["france", "allemagne", "suisse"]}/>
            <CheckboxComponent/>
        </main>

    );

};

export default MainComponent;
