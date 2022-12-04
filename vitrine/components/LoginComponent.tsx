import React from "react";
import {useRouter} from "next/router";
import {ButtonComponent, InputComponent} from "my-lib-ui";
import styles from "../styles/Index.module.css"

const LoginComponent: React.FC = () => {

    const router = useRouter();

    return (

        <div>
            <a className={styles.loginPageBack} onClick={() => router.push('/')}>← retour</a>
            <div className={styles.loginForm}>
                <h3>CONNEXION</h3>
                <InputComponent label={"Identifiant"} htmlFor={"username"} type={"text"} />
                <InputComponent label={"Mot de passe"} htmlFor={"password"} type={"text"} />
                <ButtonComponent label={"Connexion"} type={'button'}/>
            </div>
        </div>

    );

}

export default LoginComponent;
