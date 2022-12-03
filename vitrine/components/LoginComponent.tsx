import React from "react";
import {useRouter} from "next/router";
import {ButtonComponent, InputComponent} from "my-lib-ui";
import styles from "../styles/Main.module.css"

const LoginComponent: React.FC = () => {

    const router = useRouter();

    return (

        <div className={styles.mainStyles}>
            <a onClick={() => router.push('/')}>Retour</a>
            <h3>CONNEXION</h3>
            <InputComponent label={"username"} htmlFor={"Identifiant"} type={"text"} />
            <InputComponent label={"password"} htmlFor={"Mot de passe"} type={"text"} />
            <ButtonComponent label={"Connexion"} type={'button'}/>
        </div>

    );

}

export default LoginComponent;
