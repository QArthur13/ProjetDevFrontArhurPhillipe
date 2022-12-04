import React from "react";
import {ButtonComponent, CheckboxComponent, InputComponent, RadioComponent, SelectComponent} from "my-lib-ui";
import styles from "../styles/Index.module.css";

const MainComponent: React.FC = () => {

    const handleTest = () => {

        console.log("Coucou!");

    }

    return (

        <main>
            <div className={styles.mainPage}>
                <div className={styles.mainPageBoxAbout}>
                    <p>▷ Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).
                        Notre expérience est à votre service pour répondre à toutes vos demandes</p>
                </div>
            </div>
            <h1 className={styles.mainPageH}>INSCRIPTION</h1>
            <div className={styles.mainPageForm}>
                <h4>Je suis:</h4>
                <RadioComponent id1={"entreprise"} value1={"entreprise"} id2={"particulier"} value2={"particulier"}/>
                <InputComponent label={'lastName'} htmlFor={'Nom'} type={'text'}/>
                <InputComponent label={'firstName'} htmlFor={'Prénom'} type={'text'}/>
                <InputComponent label={'email'} htmlFor={'Email'} type={'email'}/>
                <InputComponent label={'tel'} htmlFor={'Phone'} type={'tel'}/>
                <SelectComponent htmlFor={"Nationalité"} options={["france", "allemagne", "suisse"]}/>
                <CheckboxComponent htmlFor={"check"}/>
                <ButtonComponent label={"Inscription"} type={"button"} onClick={handleTest}/>
            </div>
        </main>

    );

};

export default MainComponent;
