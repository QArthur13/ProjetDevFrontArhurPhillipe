import React from "react";
import {useRouter} from "next/router";
import {ButtonComponent, InputComponent} from "my-lib-ui";

const LoginComponent: React.FC = () => {

    const router = useRouter();

    return (

        <div>
            <a onClick={() => router.push('/')}>Retour</a>
            <h3>CONNEXION</h3>
            <InputComponent label={"username"} htmlFor={"username"} type={"text"} />
            <InputComponent label={"password"} htmlFor={"password"} type={"text"} />
            <ButtonComponent label={"Connexion"} type={'button'}/>
        </div>

    );

}

export default LoginComponent;
