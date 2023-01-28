import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {ButtonComponent, InputComponent} from "my-lib-ui";
import styles from "../styles/Login.module.css"

const LoginComponent: React.FC = () => {

    const router = useRouter();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const fetchData = async (url: string, data: any) => {

        const response = await fetch(url, {method: "POST", body: JSON.stringify(data), headers: {"Content-Type": "application/json"}});

        return await response.json();

    }

    const handleChangeUsername = (data: any) => {

        setUsername(data);

    };
    const handleChangePassword = (data: any) => {

        setPassword(data);

    }
    const handleSubmit = (event: any) => {

        event.preventDefault();
        console.log("Le bouton marche!");
        console.log({username: username, password: password});

        const data = {username: username, password: password};

        fetchData("http://localhost:8000/api/.user/login", data)
            .then((response) => {

                /*console.log("J'ai le token, je vais l'enregistrer dans le localStorage!");
                console.log(response.token);*/
                localStorage.setItem("token", response.token);

                /*console.log("Je l'ai enregistrer, regarde dans le localStorage!");
                console.log(localStorage.getItem("token"));*/

                router.push("/admin");

            })
            .catch((error) => console.log(error))
        ;

    }

    useEffect(() => {

        if (localStorage.getItem("token")) {

            console.log("Oui il y a un token!");
            router.push("/admin");

        } else {

            console.log("Non pas de token!");

        }

    }, []);

    return (

        <div className={styles.mainLogin}>
            <a className={styles.home} onClick={() => router.push('/')}><span style={{color: "#C00000"}}>←</span> retour</a>
            <div className={styles.boxLogin}>
                <h3>CONNEXION</h3>
                <form action="" onSubmit={handleSubmit}>
                    <InputComponent label={"Identifiant"} htmlFor={"username"} type={"text"} value={username} onChange={handleChangeUsername} />
                    <InputComponent label={"Mot de passe"} htmlFor={"password"} type={"password"} value={password} onChange={handleChangePassword} />
                    <ButtonComponent classes={styles.theButton} label={"Connexion"} type={'submit'}/>
                </form>
            </div>
        </div>

    );

}

export default LoginComponent;
