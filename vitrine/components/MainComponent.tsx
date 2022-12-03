import React from "react";
import Image from "next/image";
import {ButtonComponent, CheckboxComponent, InputComponent, RadioComponent, SelectComponent} from "my-lib-ui";
import styles from "../styles/Index.module.css";

const MainComponent: React.FC = () => {

    const handleTest = () => {

        console.log("Coucou!");

    }

    return (

        <main className={styles.mainStyles}>
            <Image src={"/image/image 2.jpg"} width={1519} height={424} alt={"Car"}></Image>
            <div>
                <h3>INSCRIPTION</h3>
                <h4>Je suis:</h4>
            </div>
            <div>
                <RadioComponent id1={"entreprise"} value1={"entreprise"} id2={"particulier"} value2={"particulier"}/>
                <InputComponent label={'lastName'} htmlFor={'Nom'} type={'text'}/>
                <InputComponent label={'firstName'} htmlFor={'Prénom'} type={'text'}/>
                <InputComponent label={'email'} htmlFor={'Email'} type={'email'}/>
                <InputComponent label={'tel'} htmlFor={'Phone'} type={'tel'}/>
                <SelectComponent htmlFor={"Nationalité"} options={["france", "allemagne", "suisse"]}/>
                <ButtonComponent label={"Inscription"} type={"button"} onClick={handleTest}/>
                <CheckboxComponent htmlFor={"check"}/>
            </div>
        </main>

    );

};

export default MainComponent;
