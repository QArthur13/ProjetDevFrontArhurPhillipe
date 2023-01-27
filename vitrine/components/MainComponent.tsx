import React, {FormEvent, useState} from "react";
import {ButtonComponent, CheckboxComponent, InputComponent, RadioComponent, SelectComponent} from "my-lib-ui";
import styles from "../styles/Index.module.css";

const MainComponent: React.FC = () => {

    const [choiceOne, setChoiceOne] = useState<string>("entreprise");
    const [choiceTwo, setChoiceTwo] = useState<string>("particulier");
    const [lastname, setLastName] = useState<string>("");
    const [firstname, setFirstName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const countries: string[] = ["France", "England", "Belgium", "Luxembourg", "Germany", "Switzerland", "Italy", "Spain"];

    const fetchData = async (url: string, method?: string, data?: any) => {

        const response = await fetch(url, {method: method, body: JSON.stringify(data), headers: {"Content-Type": "application/json"}});

        return await response.json();

    }
    const handleChangeLastName = (data: any) => {

        console.log("Coucou dans la vitrine!");
        setLastName(data);

    };
    const handleChangeFirstName = (data: any) => {

        console.log("Coucou dans la vitrine!");
        setFirstName(data);

    };
    const handleChangeEmail = (data: any) => {

        console.log("Coucou dans la vitrine!");
        setEmail(data);

    };
    const handleChangePhoneNumber = (data: any) => {

        console.log("Coucou dans la vitrine!");
        setPhoneNumber(data);

    };
    const handleChangeChoice = (data: any) => {

        console.log("Coucou la radio de la vitrine!");
        setChoiceOne(data);
        setChoiceTwo(data);

    }
    const handleChangeCountry = (data: any) => {

        console.log("Coucou le select de la vitrine!");
        setCountry(data)

    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        console.log("Coucou!");
        console.log({"nom": lastname, "prenom": firstname, "email": email, "telephone": phoneNumber, "pays": country});
        const data = {lastname: lastname, firstname: firstname, email: email, phonenumber: phoneNumber, country: country}

        fetchData("http://localhost:8000/api/.user/register", "POST", data)
            .then((response: any) => console.log(response))
            .catch((error: any) => console.log(error))
        ;

    };

    //console.log(lastname);

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
                <form action="" onSubmit={handleSubmit}>
                    <InputComponent label={'Nom'} htmlFor={'lastname'} type={'text'} value={lastname} onChange={handleChangeLastName}/>
                    <InputComponent label={'Prenom'} htmlFor={'firstname'} type={'text'} value={firstname} onChange={handleChangeFirstName} />
                    <InputComponent label={'Mail'} htmlFor={'email'} type={'email'} value={email} onChange={handleChangeEmail} />
                    <InputComponent label={'Téléphone'} htmlFor={'phonenumber'} type={'text'} value={phoneNumber} onChange={handleChangePhoneNumber} />
                    <SelectComponent htmlFor={"country"} label={"Nationalité"} value={country} options={countries} onChange={handleChangeCountry} />
                    <ButtonComponent label={"Inscription"} type={"submit"}/>
                </form>
            </div>
        </main>

    );

};

export default MainComponent;
